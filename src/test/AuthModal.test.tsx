import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createSupabaseMock } from './mocks/supabase'

const supabaseMock = createSupabaseMock()
vi.mock('../lib/supabase', () => ({ supabase: supabaseMock }))
vi.mock('@mui/icons-material', () => ({
  Close: () => <span data-testid="close-icon">X</span>,
}))

const { AuthModal } = await import('../components/auth/AuthModal')

const signInWithGoogle = vi.fn()
const signInWithGitHub = vi.fn()

vi.mock('../hooks/useAuth', () => ({
  useAuth: () => ({
    user: null,
    loading: false,
    signInWithGoogle,
    signInWithGitHub,
    signOut: vi.fn(),
  }),
}))

beforeEach(() => {
  vi.clearAllMocks()
})

describe('AuthModal', () => {
  it('renders nothing when isOpen=false', () => {
    const { container } = render(<AuthModal isOpen={false} onClose={vi.fn()} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders modal content when isOpen=true', () => {
    render(<AuthModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByText(/sign in/i)).toBeInTheDocument()
  })

  it('shows Sign In heading and both provider buttons', () => {
    render(<AuthModal isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
    expect(screen.getByText(/continue with google/i)).toBeInTheDocument()
    expect(screen.getByText(/continue with github/i)).toBeInTheDocument()
  })

  it('clicking backdrop calls onClose', () => {
    const onClose = vi.fn()
    render(<AuthModal isOpen={true} onClose={onClose} />)
    // The first fixed div with bg-black is the backdrop
    const backdrop = document.querySelector('.fixed.inset-0.bg-black\\/70') as HTMLElement
    fireEvent.click(backdrop)
    expect(onClose).toHaveBeenCalled()
  })

  it('clicking modal content does NOT call onClose', () => {
    const onClose = vi.fn()
    render(<AuthModal isOpen={true} onClose={onClose} />)
    const modal = document.querySelector('.bg-\\[\\#13141f\\]') as HTMLElement
    fireEvent.click(modal)
    expect(onClose).not.toHaveBeenCalled()
  })

  it('pressing Escape key calls onClose', async () => {
    const onClose = vi.fn()
    render(<AuthModal isOpen={true} onClose={onClose} />)
    await userEvent.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalled()
  })

  it('Escape listener removed when modal closes', async () => {
    const onClose = vi.fn()
    const { rerender } = render(<AuthModal isOpen={true} onClose={onClose} />)
    rerender(<AuthModal isOpen={false} onClose={onClose} />)
    await userEvent.keyboard('{Escape}')
    expect(onClose).not.toHaveBeenCalled()
  })

  it('close button calls onClose', () => {
    const onClose = vi.fn()
    render(<AuthModal isOpen={true} onClose={onClose} />)
    fireEvent.click(screen.getByLabelText('Close'))
    expect(onClose).toHaveBeenCalled()
  })

  it('Google button click calls signInWithGoogle', async () => {
    render(<AuthModal isOpen={true} onClose={vi.fn()} />)
    await userEvent.click(screen.getByText(/continue with google/i))
    expect(signInWithGoogle).toHaveBeenCalled()
  })

  it('GitHub button click calls signInWithGitHub', async () => {
    render(<AuthModal isOpen={true} onClose={vi.fn()} />)
    await userEvent.click(screen.getByText(/continue with github/i))
    expect(signInWithGitHub).toHaveBeenCalled()
  })
})
