"use client";

import * as React from "react";

export type Theme = "editorial" | "classic";

const STORAGE_KEY = "lan-theme";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "editorial";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "editorial" || stored === "classic") return stored;
  return "editorial";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("editorial");
  const mounted = React.useRef(false);

  React.useEffect(() => {
    setThemeState(getStoredTheme());
    mounted.current = true;
  }, []);

  React.useEffect(() => {
    if (!mounted.current) return;
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = React.useCallback((next: Theme) => {
    setThemeState(next);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
