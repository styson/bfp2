import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Person, ShoppingBag, Logout } from '@mui/icons-material';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  if (!user) return null;

  const displayName = user.user_metadata?.full_name ?? user.user_metadata?.name ?? user.email?.split('@')[0] ?? 'User';
  const avatarUrl = user.user_metadata?.avatar_url as string | undefined;
  const initials = displayName.slice(0, 2).toUpperCase();

  const handleSignOut = async () => {
    setOpen(false);
    await signOut();
  };

  return (
    <div ref={menuRef} className="relative">
      {/* Avatar button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-center h-10 w-10 border border-[#f0b429]/40 hover:border-[#f0b429] transition-[border-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0b429]"
        aria-label="Account menu"
        aria-expanded={open}
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={displayName}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="w-7 h-7 bg-[#f0b429] text-[#1a1b2a] text-xs font-black flex items-center justify-center">
            {initials}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-[#13141f] border border-[#f0b429]/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] z-50">
          {/* User info */}
          <div className="px-4 py-3 border-b border-[#f0b429]/20">
            <p className="text-xs font-black uppercase tracking-wider text-[#f0b429] truncate">
              {displayName}
            </p>
            <p className="text-[10px] text-[#e2e2e2]/40 font-sans truncate mt-0.5">
              {user.email}
            </p>
          </div>

          {/* Menu items */}
          <div className="py-1">
            <button
              onClick={() => { setOpen(false); navigate('/account'); }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#e2e2e2] hover:bg-[#f0b429]/10 hover:text-[#f0b429] transition-[background-color,color] duration-150 text-left"
            >
              <Person fontSize="small" />
              My Account
            </button>
            <button
              onClick={() => { setOpen(false); navigate('/account?tab=orders'); }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#e2e2e2] hover:bg-[#f0b429]/10 hover:text-[#f0b429] transition-[background-color,color] duration-150 text-left"
            >
              <ShoppingBag fontSize="small" />
              Order History
            </button>
          </div>

          <div className="border-t border-[#f0b429]/20 py-1">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#e2e2e2]/50 hover:bg-red-500/10 hover:text-red-400 transition-[background-color,color] duration-150 text-left"
            >
              <Logout fontSize="small" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
