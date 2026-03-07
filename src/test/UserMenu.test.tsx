import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { createSupabaseMock } from './mocks/supabase'
import type { User } from '@supabase/supabase-js'

const supabaseMock = createSupabaseMock()
vi.mock('../lib/supabase', () => ({ supabase: supabaseMock }))
vi.mock('@mui/icons-material', () => ({
  Person: () => <span>Person</span>,
  ShoppingBag: () => <span>ShoppingBag</span>,
  Logout: () => <span>Logout</span>,
}))

const signOut = vi.fn()
const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')
  return { ...actual, useNavigate: () => mockNavigate }
})

const makeUser = (overrides = {}): User => ({
  id: 'user-123',
  email: 'test@example.com',
  user_metadata: { full_name: 'Test User', avatar_url: 'https://example.com/av.png' },
  ...overrides,
} as unknown as User)

vi.mock('../hooks/useAuth', () => ({
  useAuth: vi.fn(),
}))

// Dynamic import after mock setup
const { useAuth } = await import('../hooks/useAuth')
const { UserMenu } = await import('../components/auth/UserMenu')

const renderMenu = () =>
  render(
    <MemoryRouter>
      <UserMenu />
    </MemoryRouter>
  )

beforeEach(() => {
  vi.clearAllMocks()
  vi.mocked(useAuth).mockReturnValue({
    user: null,
    loading: false,
    signInWithGoogle: vi.fn(),
    signInWithGitHub: vi.fn(),
    signInWithFacebook: vi.fn(),
    signInWithEmail: vi.fn(),
    signOut,
  })
})

describe('UserMenu', () => {
  it('renders nothing when user is null', () => {
    const { container } = renderMenu()
    expect(container).toBeEmptyDOMElement()
  })

  it('renders avatar img when avatar_url is set', () => {
    vi.mocked(useAuth).mockReturnValue({ ...vi.mocked(useAuth)(), user: makeUser() } as ReturnType<typeof useAuth>)
    renderMenu()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/av.png')
  })

  it('renders initials fallback when no avatar URL', () => {
    vi.mocked(useAuth).mockReturnValue({
      ...vi.mocked(useAuth)(),
      user: makeUser({ user_metadata: { full_name: 'Test User' } }),
    } as ReturnType<typeof useAuth>)
    renderMenu()
    expect(screen.queryByRole('img')).toBeNull()
    expect(screen.getByText('TE')).toBeInTheDocument()
  })

  it('initials are first 2 chars of display_name uppercased', () => {
    vi.mocked(useAuth).mockReturnValue({
      ...vi.mocked(useAuth)(),
      user: makeUser({ user_metadata: { full_name: 'john doe' } }),
    } as ReturnType<typeof useAuth>)
    renderMenu()
    expect(screen.getByText('JO')).toBeInTheDocument()
  })

  it('dropdown hidden on initial render', () => {
    vi.mocked(useAuth).mockReturnValue({ ...vi.mocked(useAuth)(), user: makeUser() } as ReturnType<typeof useAuth>)
    renderMenu()
    expect(screen.queryByText('My Account')).toBeNull()
  })

  it('clicking avatar opens dropdown', async () => {
    vi.mocked(useAuth).mockReturnValue({ ...vi.mocked(useAuth)(), user: makeUser() } as ReturnType<typeof useAuth>)
    renderMenu()
    await userEvent.click(screen.getByLabelText('Account menu'))
    expect(screen.getByText('My Account')).toBeInTheDocument()
  })

  it('clicking avatar again closes dropdown', async () => {
    vi.mocked(useAuth).mockReturnValue({ ...vi.mocked(useAuth)(), user: makeUser() } as ReturnType<typeof useAuth>)
    renderMenu()
    await userEvent.click(screen.getByLabelText('Account menu'))
    await userEvent.click(screen.getByLabelText('Account menu'))
    expect(screen.queryByText('My Account')).toBeNull()
  })

  it('clicking outside closes dropdown', async () => {
    vi.mocked(useAuth).mockReturnValue({ ...vi.mocked(useAuth)(), user: makeUser() } as ReturnType<typeof useAuth>)
    renderMenu()
    await userEvent.click(screen.getByLabelText('Account menu'))
    expect(screen.getByText('My Account')).toBeInTheDocument()
    fireEvent.mouseDown(document.body)
    await waitFor(() => expect(screen.queryByText('My Account')).toBeNull())
  })

  it('"My Account" navigates to /account', async () => {
    vi.mocked(useAuth).mockReturnValue({ ...vi.mocked(useAuth)(), user: makeUser() } as ReturnType<typeof useAuth>)
    renderMenu()
    await userEvent.click(screen.getByLabelText('Account menu'))
    await userEvent.click(screen.getByText('My Account'))
    expect(mockNavigate).toHaveBeenCalledWith('/account')
  })

  it('"Order History" navigates to /account?tab=orders', async () => {
    vi.mocked(useAuth).mockReturnValue({ ...vi.mocked(useAuth)(), user: makeUser() } as ReturnType<typeof useAuth>)
    renderMenu()
    await userEvent.click(screen.getByLabelText('Account menu'))
    await userEvent.click(screen.getByText('Order History'))
    expect(mockNavigate).toHaveBeenCalledWith('/account?tab=orders')
  })

  it('Sign Out button calls signOut and closes dropdown', async () => {
    vi.mocked(useAuth).mockReturnValue({ ...vi.mocked(useAuth)(), user: makeUser() } as ReturnType<typeof useAuth>)
    renderMenu()
    await userEvent.click(screen.getByLabelText('Account menu'))
    await userEvent.click(screen.getByText('Sign Out'))
    expect(signOut).toHaveBeenCalled()
    await waitFor(() => expect(screen.queryByText('My Account')).toBeNull())
  })

  it('aria-expanded reflects open state', async () => {
    vi.mocked(useAuth).mockReturnValue({ ...vi.mocked(useAuth)(), user: makeUser() } as ReturnType<typeof useAuth>)
    renderMenu()
    const btn = screen.getByLabelText('Account menu')
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })
})
