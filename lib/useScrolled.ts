import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** True once the page is scrolled past `threshold` px (false during server render). */
export function useScrolled(threshold = 0) {
  return useSyncExternalStore(subscribe, () => window.scrollY > threshold, () => false);
}
