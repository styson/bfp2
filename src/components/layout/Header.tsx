import { useState } from 'react';
import { ShoppingCart, Login } from '@mui/icons-material';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import { AuthModal } from '../auth/AuthModal';
import { UserMenu } from '../auth/UserMenu';

export const Header = () => {
  const { toggleCart, getItemCount } = useCartStore();
  const { user } = useAuthStore();
  const itemCount = getItemCount();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#13141f] text-[#e2e2e2] z-50 border-b border-[#f0b429]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl text-[#f0b429] tracking-wider uppercase">
                Bounding Fire
              </h1>
              <p className="text-xs tracking-widest uppercase text-[#e2e2e2]/50 font-sans">
                Productions
              </p>
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#products"
                className="text-sm font-semibold uppercase tracking-wider text-[#e2e2e2] hover:text-[#f0b429] transition-colors duration-200"
              >
                Products
              </a>
              <a
                href="#parts"
                className="text-sm font-semibold uppercase tracking-wider text-[#e2e2e2] hover:text-[#f0b429] transition-colors duration-200"
              >
                Parts
              </a>
              <a
                href="#downloads"
                className="text-sm font-semibold uppercase tracking-wider text-[#e2e2e2] hover:text-[#f0b429] transition-colors duration-200"
              >
                Downloads
              </a>
              <a
                href="#about"
                className="text-sm font-semibold uppercase tracking-wider text-[#e2e2e2] hover:text-[#f0b429] transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold uppercase tracking-wider text-[#e2e2e2] hover:text-[#f0b429] transition-colors duration-200"
              >
                Contact
              </a>
            </nav>

            {/* Right side: auth + cart */}
            <div className="flex items-center gap-3">
              {user ? (
                <UserMenu />
              ) : (
                <button
                  onClick={() => setAuthModalOpen(true)}
                  className="flex items-center gap-2 h-10 px-4 border border-[#f0b429]/40 text-xs font-black uppercase tracking-wider text-[#e2e2e2] hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0b429]"
                  aria-label="Sign in"
                >
                  <Login fontSize="small" />
                  Sign In
                </button>
              )}

              {/* Cart */}
              <button
                onClick={toggleCart}
                className="relative h-10 w-10 flex items-center justify-center border border-[#f0b429]/40 text-[#e2e2e2] hover:bg-[#f0b429] hover:text-[#1a1b2a] hover:border-[#f0b429] transition-[background-color,color,border-color] duration-200"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#f0b429] text-[#1a1b2a] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
};
