import { useEffect, useState } from 'react';
import { Close } from '@mui/icons-material';
import { useAuth } from '../../hooks/useAuth';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Google icon SVG
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

// GitHub icon SVG
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const { signInWithGoogle, signInWithGitHub, signInWithEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmailLoading(true);
    await signInWithEmail(email);
    setEmailLoading(false);
    setEmailSent(true);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="pointer-events-auto w-full max-w-sm bg-[#13141f] border border-[#f0b429]/30 shadow-[0_0_60px_rgba(240,180,41,0.1)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-[#f0b429]/20">
            <div>
              <h2 className="text-xl font-black uppercase tracking-widest text-[#f0b429]">
                Sign In
              </h2>
              <p className="text-xs text-[#e2e2e2]/75 uppercase tracking-wider mt-1 font-sans">
                Access your account
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 border border-[#f0b429]/30 text-[#e2e2e2]/50 hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200"
              aria-label="Close"
            >
              <Close fontSize="small" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-3">
            <button
              onClick={() => signInWithGoogle()}
              className="w-full flex items-center gap-3 px-4 py-3 bg-white text-[#1a1b2a] font-bold text-sm uppercase tracking-wider hover:bg-[#f0b429] transition-[background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0b429] active:scale-[0.98] transition-transform"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <button
              onClick={() => signInWithGitHub()}
              className="w-full flex items-center gap-3 px-4 py-3 bg-[#24292e] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#f0b429] hover:text-[#1a1b2a] transition-[background-color,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0b429] active:scale-[0.98]"
            >
              <GitHubIcon />
              Continue with GitHub
            </button>

            <div className="relative flex items-center gap-3 py-1">
              <div className="flex-1 h-px bg-[#f0b429]/15" />
              <span className="text-[10px] uppercase tracking-widest text-[#e2e2e2]/75 font-sans">or</span>
              <div className="flex-1 h-px bg-[#f0b429]/15" />
            </div>

            {emailSent ? (
              <p className="text-xs text-[#f0b429] text-center font-sans py-3 leading-relaxed">
                Check your email — we sent a magic link to <strong>{email}</strong>.
              </p>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-[#1a1b2a] border border-[#f0b429]/30 text-[#e2e2e2] text-sm placeholder:text-[#e2e2e2]/25 focus:outline-none focus:border-[#f0b429] transition-[border-color] duration-200"
                />
                <button
                  type="submit"
                  disabled={emailLoading}
                  className="w-full px-4 py-3 bg-[#f0b429]/10 border border-[#f0b429]/40 text-[#f0b429] font-bold text-sm uppercase tracking-wider hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0b429] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {emailLoading ? 'Sending…' : 'Send Magic Link'}
                </button>
              </form>
            )}

            <p className="text-[10px] text-[#e2e2e2]/75 text-center font-sans pt-2 leading-relaxed">
              By signing in you agree to our terms of service.
              <br />
              Your cart will be saved across devices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
