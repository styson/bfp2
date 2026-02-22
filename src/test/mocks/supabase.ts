import { vi } from 'vitest'

export const createSupabaseMock = () => {
  let authStateCallback: ((event: string, session: unknown) => void) | null = null

  const fromChain = {
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    order: vi.fn().mockResolvedValue({ data: [], error: null }),
    delete: vi.fn().mockReturnThis(),
    insert: vi.fn().mockResolvedValue({ error: null }),
  }

  const mock = {
    auth: {
      signInWithOAuth: vi.fn().mockResolvedValue({ data: {}, error: null }),
      signOut: vi.fn().mockResolvedValue({ error: null }),
      getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
      onAuthStateChange: vi.fn().mockImplementation((cb: (event: string, session: unknown) => void) => {
        authStateCallback = cb
        return { data: { subscription: { unsubscribe: vi.fn() } } }
      }),
    },
    from: vi.fn().mockReturnValue(fromChain),
    _fromChain: fromChain,
    _triggerAuthStateChange: (event: string, session: unknown) => {
      authStateCallback?.(event, session)
    },
  }

  return mock
}

export type SupabaseMock = ReturnType<typeof createSupabaseMock>
