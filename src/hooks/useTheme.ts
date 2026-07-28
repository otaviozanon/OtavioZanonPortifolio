import { useState, useEffect, useCallback } from "react";
import { THEME_KEY, DEFAULT_THEME } from "@/constants";
import type { Theme } from "@/types";

/**
 * Custom hook to manage theme state (light/dark)
 * - Persists theme preference in localStorage
 * - Respects system preference on first load
 * - Updates document class for Tailwind dark mode
 */
export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return DEFAULT_THEME === "dark";

    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    if (saved) {
      return saved === "dark";
    }

    // Respect system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const theme: Theme = isDark ? "dark" : "light";
    localStorage.setItem(THEME_KEY, theme);

    // Update document class for Tailwind dark mode
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return { isDark, toggleTheme };
}
