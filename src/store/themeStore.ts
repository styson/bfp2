import { create } from 'zustand';

type Theme = 'dark' | 'light';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

const getInitialTheme = (): Theme => {
  try {
    return (localStorage.getItem('bfp-theme') as Theme) ?? 'dark';
  } catch {
    return 'dark';
  }
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () =>
    set((s) => {
      const next = s.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('bfp-theme', next); } catch { /* noop */ }
      return { theme: next };
    }),
}));
