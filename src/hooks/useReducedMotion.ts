import { useEffect, useState } from "react";

/**
 * Hook to detect and respect user's prefers-reduced-motion preference.
 * Returns true if user prefers reduced motion (accessibility).
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return prefersReduced;
}
