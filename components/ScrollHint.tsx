"use client";

import { useScrolled } from "@/lib/useScrolled";

/**
 * At the top: "scroll ↓", jumps to the terminal. Once scrolled: "↑ top", back to the top.
 * Smoothness comes from `scroll-behavior` in globals.css (off for reduced motion).
 */
export default function ScrollHint() {
  const scrolled = useScrolled(40);
  const className =
    "absolute bottom-6 flex cursor-pointer flex-col items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-accent";

  return scrolled ? (
    <button type="button" onClick={() => window.scrollTo({ top: 0 })} aria-label="Back to top" className={className}>
      <span aria-hidden="true">↑</span>
      top
    </button>
  ) : (
    <a href="#terminal" aria-label="Scroll to terminal" className={`${className} animate-bounce`}>
      scroll
      <span aria-hidden="true">↓</span>
    </a>
  );
}
