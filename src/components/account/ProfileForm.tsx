import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../store/authStore';

export const ProfileForm = () => {
  const { user } = useAuthStore();
  const [displayName, setDisplayName] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load profile on mount
  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const { data } = await supabase
        .from('profiles')
        .select('display_name')
        .eq('id', user.id)
        .single();
      if (data?.display_name) setDisplayName(data.display_name);
    };
    load();
  }, [user?.id]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    setError(null);
    setSaved(false);

    const { error: err } = await supabase
      .from('profiles')
      .upsert({ id: user.id, display_name: displayName.trim() });

    setSaving(false);
    if (err) {
      setError(err.message);
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    }
  };

  return (
    <form onSubmit={handleSave} className="max-w-md space-y-6">
      {/* Email (read-only) */}
      <div>
        <label className="block text-[10px] font-black uppercase tracking-widest text-[#f0b429] mb-2">
          Email
        </label>
        <input
          type="text"
          value={user?.email ?? ''}
          disabled
          className="w-full bg-[#0f1018] border border-[#f0b429]/10 px-4 py-3 text-sm text-[#e2e2e2]/30 font-sans cursor-not-allowed"
        />
        <p className="text-[10px] text-[#e2e2e2]/25 font-sans mt-1">
          Managed by your sign-in provider.
        </p>
      </div>

      {/* Display name */}
      <div>
        <label
          htmlFor="display-name"
          className="block text-[10px] font-black uppercase tracking-widest text-[#f0b429] mb-2"
        >
          Display Name
        </label>
        <input
          id="display-name"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Your name"
          maxLength={60}
          className="w-full bg-[#0f1018] border border-[#f0b429]/20 px-4 py-3 text-sm text-[#e2e2e2] font-sans placeholder:text-[#e2e2e2]/20 focus:outline-none focus:border-[#f0b429] transition-[border-color] duration-200"
        />
      </div>

      {/* Mailing list placeholder */}
      <div className="border border-[#f0b429]/10 bg-[#0f1018] px-4 py-3">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#e2e2e2]/30">
          Mailing List
        </p>
        <p className="text-xs text-[#e2e2e2]/20 font-sans mt-1">
          Email preferences coming soon.
        </p>
      </div>

      {/* Error */}
      {error && (
        <p className="text-xs text-red-400 font-sans">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={saving}
        className="px-8 py-3 bg-[#f0b429] text-[#1a1b2a] text-xs font-black uppercase tracking-widest hover:bg-[#f0b429]/80 transition-[background-color] duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f0b429] active:scale-[0.98]"
      >
        {saving ? 'Saving…' : saved ? 'Saved ✓' : 'Save Changes'}
      </button>
    </form>
  );
};
