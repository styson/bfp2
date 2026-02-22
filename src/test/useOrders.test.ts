import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { createSupabaseMock } from './mocks/supabase'
import { useAuthStore } from '../store/authStore'
import type { User } from '@supabase/supabase-js'

const supabaseMock = createSupabaseMock()
vi.mock('../lib/supabase', () => ({ supabase: supabaseMock }))

const { useOrders } = await import('../hooks/useOrders')

const mockUser = { id: 'user-123', email: 'test@example.com', user_metadata: {} } as unknown as User
const mockUser2 = { id: 'user-456', email: 'other@example.com', user_metadata: {} } as unknown as User

const mockOrders = [
  { id: 'order-1', paypal_order_id: 'pp-1', status: 'completed', items: [], total_usd: 50, created_at: '2024-01-01' },
]

beforeEach(() => {
  vi.clearAllMocks()
  // Reset chain to default empty response
  supabaseMock._fromChain.order.mockResolvedValue({ data: [], error: null })
  useAuthStore.setState({ user: null, loading: false })
})

describe('useOrders', () => {
  it('returns empty orders and loading false when user is null', () => {
    const { result } = renderHook(() => useOrders())
    expect(result.current.orders).toEqual([])
    expect(result.current.loading).toBe(false)
  })

  it('sets loading true while fetching', async () => {
    let resolve!: (v: unknown) => void
    supabaseMock._fromChain.order.mockReturnValue(new Promise(r => { resolve = r }))
    useAuthStore.setState({ user: mockUser })
    const { result } = renderHook(() => useOrders())
    await waitFor(() => expect(result.current.loading).toBe(true))
    await act(async () => { resolve({ data: [], error: null }) })
  })

  it('returns fetched orders on success', async () => {
    supabaseMock._fromChain.order.mockResolvedValue({ data: mockOrders, error: null })
    useAuthStore.setState({ user: mockUser })
    const { result } = renderHook(() => useOrders())
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.orders).toEqual(mockOrders)
  })

  it('queries orders table filtered by user_id', async () => {
    useAuthStore.setState({ user: mockUser })
    renderHook(() => useOrders())
    await waitFor(() => expect(supabaseMock.from).toHaveBeenCalledWith('orders'))
    expect(supabaseMock._fromChain.eq).toHaveBeenCalledWith('user_id', 'user-123')
  })

  it('sets error when supabase returns error', async () => {
    supabaseMock._fromChain.order.mockResolvedValue({ data: null, error: { message: 'DB error' } })
    useAuthStore.setState({ user: mockUser })
    const { result } = renderHook(() => useOrders())
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.error).toBe('DB error')
  })

  it('clears orders when user becomes null (sign-out)', async () => {
    supabaseMock._fromChain.order.mockResolvedValue({ data: mockOrders, error: null })
    useAuthStore.setState({ user: mockUser })
    const { result } = renderHook(() => useOrders())
    await waitFor(() => expect(result.current.orders).toEqual(mockOrders))
    act(() => { useAuthStore.getState().setUser(null) })
    await waitFor(() => expect(result.current.orders).toEqual([]))
  })

  it('re-fetches when user.id changes', async () => {
    supabaseMock._fromChain.order.mockResolvedValue({ data: mockOrders, error: null })
    useAuthStore.setState({ user: mockUser })
    const { result } = renderHook(() => useOrders())
    await waitFor(() => expect(result.current.loading).toBe(false))
    const firstCallCount = supabaseMock.from.mock.calls.length

    act(() => { useAuthStore.getState().setUser(mockUser2) })
    await waitFor(() => expect(supabaseMock.from.mock.calls.length).toBeGreaterThan(firstCallCount))
  })

  it('does not refetch when same user id (token refresh)', async () => {
    supabaseMock._fromChain.order.mockResolvedValue({ data: mockOrders, error: null })
    useAuthStore.setState({ user: mockUser })
    const { result } = renderHook(() => useOrders())
    await waitFor(() => expect(result.current.loading).toBe(false))
    const callCount = supabaseMock.from.mock.calls.length

    // Simulate token refresh: same id, updated metadata
    const refreshedUser = { ...mockUser, user_metadata: { updated: true } } as unknown as User
    act(() => { useAuthStore.getState().setUser(refreshedUser) })

    // Give it a tick to potentially re-fetch (it shouldn't)
    await new Promise(r => setTimeout(r, 20))
    expect(supabaseMock.from.mock.calls.length).toBe(callCount)
    expect(result.current.orders).toEqual(mockOrders)
  })
})
