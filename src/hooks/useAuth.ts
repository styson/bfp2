import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';

export const useAuth = () => {
  const { user, loading } = useAuthStore();

  const signInWithGoogle = () =>
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    });

  const signInWithGitHub = () =>
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: window.location.origin },
    });

  const signInWithFacebook = () =>
    supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: { redirectTo: window.location.origin },
    });

  const signInWithEmail = (email: string) =>
    supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin },
    });

  const signOut = () => supabase.auth.signOut();

  return { user, loading, signInWithGoogle, signInWithGitHub, signInWithFacebook, signInWithEmail, signOut };
};
