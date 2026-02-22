import { describe, it, expect, beforeEach } from 'vitest'
import { useAuthStore } from '../store/authStore'
import type { User } from '@supabase/supabase-js'

const mockUser = {
  id: 'user-123',
  email: 'test@example.com',
  user_metadata: { full_name: 'Test User', avatar_url: 'https://example.com/avatar.png' },
} as unknown as User

const mockUser2 = {
  id: 'user-456',
  email: 'other@example.com',
  user_metadata: { full_name: 'Other User' },
} as unknown as User

beforeEach(() => {
  useAuthStore.setState({ user: null, loading: true })
})

describe('authStore', () => {
  it('has null user and loading true initially', () => {
    const { user, loading } = useAuthStore.getState()
    expect(user).toBeNull()
    expect(loading).toBe(true)
  })

  it('setUser updates user correctly', () => {
    useAuthStore.getState().setUser(mockUser)
    expect(useAuthStore.getState().user).toEqual(mockUser)
  })

  it('setUser(null) clears user', () => {
    useAuthStore.getState().setUser(mockUser)
    useAuthStore.getState().setUser(null)
    expect(useAuthStore.getState().user).toBeNull()
  })

  it('setLoading updates loading flag', () => {
    useAuthStore.getState().setLoading(false)
    expect(useAuthStore.getState().loading).toBe(false)
  })

  it('multiple setUser calls reflect latest value', () => {
    useAuthStore.getState().setUser(mockUser)
    useAuthStore.getState().setUser(mockUser2)
    expect(useAuthStore.getState().user?.id).toBe('user-456')
  })

  it('simulates onAuthStateChange token refresh — store reflects updated user', () => {
    useAuthStore.getState().setUser(mockUser)
    // Token refresh: same id, updated metadata
    const refreshedUser = { ...mockUser, user_metadata: { ...mockUser.user_metadata, full_name: 'Refreshed' } } as User
    useAuthStore.getState().setUser(refreshedUser)
    expect(useAuthStore.getState().user?.user_metadata.full_name).toBe('Refreshed')
    expect(useAuthStore.getState().user?.id).toBe('user-123')
  })
})
