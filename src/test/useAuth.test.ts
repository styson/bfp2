import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { createSupabaseMock } from './mocks/supabase'
import { useAuthStore } from '../store/authStore'
import type { User } from '@supabase/supabase-js'

const supabaseMock = createSupabaseMock()

vi.mock('../lib/supabase', () => ({ supabase: supabaseMock }))

// Import after mock
const { useAuth } = await import('../hooks/useAuth')

const mockUser = {
  id: 'user-123',
  email: 'test@example.com',
  user_metadata: { full_name: 'Test User' },
} as unknown as User

beforeEach(() => {
  vi.clearAllMocks()
  useAuthStore.setState({ user: null, loading: false })
})

describe('useAuth', () => {
  it('returns user and loading from authStore', () => {
    useAuthStore.setState({ user: mockUser, loading: false })
    const { result } = renderHook(() => useAuth())
    expect(result.current.user).toEqual(mockUser)
    expect(result.current.loading).toBe(false)
  })

  it('signInWithGoogle calls supabase with provider google', async () => {
    const { result } = renderHook(() => useAuth())
    await act(async () => { await result.current.signInWithGoogle() })
    expect(supabaseMock.auth.signInWithOAuth).toHaveBeenCalledWith(
      expect.objectContaining({ provider: 'google' })
    )
  })

  it('signInWithGoogle passes redirectTo: window.location.origin', async () => {
    const { result } = renderHook(() => useAuth())
    await act(async () => { await result.current.signInWithGoogle() })
    expect(supabaseMock.auth.signInWithOAuth).toHaveBeenCalledWith(
      expect.objectContaining({
        options: expect.objectContaining({ redirectTo: window.location.origin }),
      })
    )
  })

  it('signInWithGitHub calls supabase with provider github', async () => {
    const { result } = renderHook(() => useAuth())
    await act(async () => { await result.current.signInWithGitHub() })
    expect(supabaseMock.auth.signInWithOAuth).toHaveBeenCalledWith(
      expect.objectContaining({ provider: 'github' })
    )
  })

  it('signOut calls supabase.auth.signOut', async () => {
    const { result } = renderHook(() => useAuth())
    await act(async () => { await result.current.signOut() })
    expect(supabaseMock.auth.signOut).toHaveBeenCalled()
  })

  it('returns updated user when authStore changes', () => {
    const { result } = renderHook(() => useAuth())
    expect(result.current.user).toBeNull()
    act(() => { useAuthStore.getState().setUser(mockUser) })
    expect(result.current.user).toEqual(mockUser)
  })
})
