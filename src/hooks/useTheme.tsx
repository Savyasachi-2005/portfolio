import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type ThemeName = 'cyber' | 'pro';

interface ThemeContextValue {
  theme: ThemeName;
  toggleTheme: () => void;
  setTheme: (t: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = 'theme';
const THEME_CLASS_PREFIX = 'theme-';

function applyThemeClass(theme: ThemeName) {
  const root = document.documentElement;
  // Remove any existing theme-* classes first
  root.classList.forEach(cls => {
    if (cls.startsWith(THEME_CLASS_PREFIX)) root.classList.remove(cls);
  });
  root.classList.add(`${THEME_CLASS_PREFIX}${theme}`);
}

function getInitialTheme(): ThemeName {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName | null;
    if (stored === 'cyber' || stored === 'pro') return stored;
  } catch { /* ignore */ }
  return 'cyber';
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeName>(() => getInitialTheme());

  useEffect(() => {
    applyThemeClass(theme);
    try { localStorage.setItem(THEME_STORAGE_KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  // Sync across tabs
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY && (e.newValue === 'cyber' || e.newValue === 'pro')) {
        setThemeState(e.newValue);
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const setTheme = (t: ThemeName) => setThemeState(t);
  const toggleTheme = () => setThemeState(prev => prev === 'cyber' ? 'pro' : 'cyber');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
