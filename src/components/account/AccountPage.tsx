import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { useAuthStore } from '../../store/authStore';
import { OrderHistory } from './OrderHistory';
import { ProfileForm } from './ProfileForm';

type Tab = 'orders' | 'profile';

export const AccountPage = () => {
  const { user, loading } = useAuthStore();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState<Tab>((searchParams.get('tab') as Tab) ?? 'orders');

  // Redirect guests to home
  useEffect(() => {
    if (!loading && !user) navigate('/', { replace: true });
  }, [user, loading, navigate]);

  // Sync tab with URL
  const switchTab = (t: Tab) => {
    setTab(t);
    setSearchParams(t === 'orders' ? {} : { tab: t });
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[#1a1b2a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#f0b429]/30 border-t-[#f0b429] rounded-full animate-spin" />
      </div>
    );
  }

  const displayName =
    user.user_metadata?.full_name ??
    user.user_metadata?.name ??
    user.email?.split('@')[0] ??
    'User';

  return (
    <div className="min-h-screen bg-[#1a1b2a] pt-20">
      {/* Page header */}
      <div className="bg-[#13141f] border-b border-[#f0b429]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#e2e2e2]/40 hover:text-[#f0b429] transition-[color] duration-200 mb-6"
          >
            <ArrowBack fontSize="small" />
            Back to store
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-[#f0b429]">
            My Account
          </h1>
          <p className="text-sm text-[#e2e2e2]/40 font-sans mt-1">
            {displayName} · {user.email}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-10">
        {/* Tabs */}
        <div className="flex gap-0 border-b border-[#f0b429]/20 mb-8">
          {(['orders', 'profile'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => switchTab(t)}
              className={`px-6 py-3 text-xs font-black uppercase tracking-widest border-b-2 transition-[color,border-color] duration-200 ${
                tab === t
                  ? 'border-[#f0b429] text-[#f0b429]'
                  : 'border-transparent text-[#e2e2e2]/40 hover:text-[#e2e2e2]'
              }`}
            >
              {t === 'orders' ? 'Order History' : 'Profile'}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === 'orders' && <OrderHistory />}
        {tab === 'profile' && <ProfileForm />}
      </div>
    </div>
  );
};
