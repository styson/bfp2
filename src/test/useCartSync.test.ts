import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { createSupabaseMock } from './mocks/supabase'
import { useAuthStore } from '../store/authStore'
import { useCartStore } from '../store/cartStore'
import type { User } from '@supabase/supabase-js'
import type { CartItem } from '../types'

const supabaseMock = createSupabaseMock()
vi.mock('../lib/supabase', () => ({ supabase: supabaseMock }))

// Mock products data so useCartSync can look up products by id
vi.mock('../data/products', () => ({
  products: [
    { id: 'prod-1', name: 'Product 1', description: '', price: 10, image: '', category: 'boards', paypalItemCode: 'p1', releaseDate: '2024-01-01', inStock: true },
    { id: 'prod-2', name: 'Product 2', description: '', price: 20, image: '', category: 'boards', paypalItemCode: 'p2', releaseDate: '2024-01-01', inStock: true },
  ],
}))

const { useCartSync } = await import('../hooks/useCartSync')

const mockUser = { id: 'user-123', email: 'test@example.com', user_metadata: {} } as unknown as User

const makeCartItem = (id: string, qty: number, shipping: 'domestic' | 'international' = 'domestic'): CartItem => ({
  id, name: `Product ${id}`, description: '', price: 10, image: '', category: 'boards',
  paypalItemCode: id, releaseDate: '2024-01-01', inStock: true,
  quantity: qty, shippingType: shipping,
})

beforeEach(() => {
  vi.clearAllMocks()
  supabaseMock._fromChain.order.mockResolvedValue({ data: [], error: null })
  supabaseMock._fromChain.select.mockReturnThis()
  supabaseMock._fromChain.eq.mockReturnThis()
  supabaseMock._fromChain.delete.mockReturnThis()
  supabaseMock._fromChain.insert.mockResolvedValue({ error: null })
  useAuthStore.setState({ user: null, loading: false })
  useCartStore.setState({ items: [], isOpen: false })
})

afterEach(() => {
  useCartStore.setState({ items: [], isOpen: false })
})

describe('useCartSync — merge on sign-in', () => {
  it('empty local + empty DB: cart stays empty, no insert', async () => {
    supabaseMock._fromChain.eq.mockResolvedValueOnce({ data: [], error: null })
    act(() => { useAuthStore.getState().setUser(mockUser) })
    renderHook(() => useCartSync())
    await waitFor(() => expect(supabaseMock.from).toHaveBeenCalledWith('cart_items'))
    expect(supabaseMock._fromChain.insert).not.toHaveBeenCalled()
    expect(useCartStore.getState().items).toEqual([])
  })

  it('local only: local items written to DB', async () => {
    supabaseMock._fromChain.eq.mockResolvedValueOnce({ data: [], error: null })
    useCartStore.setState({ items: [makeCartItem('prod-1', 2)] })
    act(() => { useAuthStore.getState().setUser(mockUser) })
    renderHook(() => useCartSync())
    await waitFor(() => expect(supabaseMock._fromChain.insert).toHaveBeenCalled())
    const insertArg = supabaseMock._fromChain.insert.mock.calls[0][0]
    expect(insertArg[0]).toMatchObject({ product_id: 'prod-1', quantity: 2 })
  })

  it('DB only: DB items loaded into cart', async () => {
    supabaseMock._fromChain.eq.mockResolvedValueOnce({
      data: [{ product_id: 'prod-1', quantity: 3, variant: { shippingType: 'domestic' } }],
      error: null,
    })
    act(() => { useAuthStore.getState().setUser(mockUser) })
    renderHook(() => useCartSync())
    await waitFor(() => expect(useCartStore.getState().items.length).toBe(1))
    expect(useCartStore.getState().items[0]).toMatchObject({ id: 'prod-1', quantity: 3 })
  })

  it('overlap: quantities summed, written to DB', async () => {
    supabaseMock._fromChain.eq.mockResolvedValueOnce({
      data: [{ product_id: 'prod-1', quantity: 2, variant: { shippingType: 'domestic' } }],
      error: null,
    })
    useCartStore.setState({ items: [makeCartItem('prod-1', 3)] })
    act(() => { useAuthStore.getState().setUser(mockUser) })
    renderHook(() => useCartSync())
    await waitFor(() => expect(supabaseMock._fromChain.insert).toHaveBeenCalled())
    const insertArg = supabaseMock._fromChain.insert.mock.calls[0][0]
    expect(insertArg[0]).toMatchObject({ product_id: 'prod-1', quantity: 5 })
    expect(useCartStore.getState().items[0].quantity).toBe(5)
  })

  it('no overlap: both items present in merged result', async () => {
    supabaseMock._fromChain.eq.mockResolvedValueOnce({
      data: [{ product_id: 'prod-1', quantity: 1, variant: { shippingType: 'domestic' } }],
      error: null,
    })
    useCartStore.setState({ items: [makeCartItem('prod-2', 1)] })
    act(() => { useAuthStore.getState().setUser(mockUser) })
    renderHook(() => useCartSync())
    await waitFor(() => expect(useCartStore.getState().items.length).toBe(2))
    const ids = useCartStore.getState().items.map(i => i.id)
    expect(ids).toContain('prod-1')
    expect(ids).toContain('prod-2')
  })
})

describe('useCartSync — sign-out', () => {
  it('clearCart called when prevUserId was set and user becomes null', async () => {
    supabaseMock._fromChain.eq.mockResolvedValue({ data: [], error: null })
    useCartStore.setState({ items: [makeCartItem('prod-1', 1)] })
    act(() => { useAuthStore.getState().setUser(mockUser) })
    renderHook(() => useCartSync())
    await waitFor(() => expect(supabaseMock.from).toHaveBeenCalledWith('cart_items'))
    act(() => { useAuthStore.getState().setUser(null) })
    await waitFor(() => expect(useCartStore.getState().items).toEqual([]))
  })

  it('clearCart NOT called on first null user (guest)', () => {
    const clearCart = vi.spyOn(useCartStore.getState(), 'clearCart')
    renderHook(() => useCartSync())
    expect(clearCart).not.toHaveBeenCalled()
  })
})

describe('useCartSync — ongoing sync', () => {
  it('cart item change triggers delete + re-insert to DB', async () => {
    supabaseMock._fromChain.eq.mockResolvedValue({ data: [], error: null })
    act(() => { useAuthStore.getState().setUser(mockUser) })
    renderHook(() => useCartSync())
    // Wait for merge to complete
    await waitFor(() => expect(supabaseMock.from).toHaveBeenCalledWith('cart_items'))
    vi.clearAllMocks()
    supabaseMock._fromChain.eq.mockResolvedValue({ data: [], error: null })
    supabaseMock._fromChain.delete.mockReturnThis()
    supabaseMock._fromChain.insert.mockResolvedValue({ error: null })

    act(() => { useCartStore.getState().setItems([makeCartItem('prod-2', 1)]) })
    await waitFor(() => expect(supabaseMock._fromChain.delete).toHaveBeenCalled())
    expect(supabaseMock._fromChain.insert).toHaveBeenCalled()
  })

  it('no DB write if items reference unchanged', async () => {
    supabaseMock._fromChain.eq.mockResolvedValue({ data: [], error: null })
    act(() => { useAuthStore.getState().setUser(mockUser) })
    renderHook(() => useCartSync())
    await waitFor(() => expect(supabaseMock.from).toHaveBeenCalledWith('cart_items'))
    vi.clearAllMocks()

    // Set same reference — trigger subscribe but with same items ref
    const items = useCartStore.getState().items
    act(() => { useCartStore.setState({ items }) })
    await new Promise(r => setTimeout(r, 20))
    expect(supabaseMock._fromChain.delete).not.toHaveBeenCalled()
  })
})
