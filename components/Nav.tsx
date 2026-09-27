"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { useScrolled } from "@/lib/useScrolled";
import { site } from "@/lib/content";

const links = ["/experience", "/apps", "/writing", "/photos", "/contact"];

export default function Nav() {
  const pathname = usePathname().replace(/\/$/, "");
  const scrolled = useScrolled(4);

  return (
    <header
      className={`sticky top-0 z-50 flex flex-wrap items-center justify-between gap-y-0 py-2 transition-[background-color,box-shadow] duration-200 md:py-4 ${
        // Transparent at the top so the home backdrop shows through; once scrolled, a full-bleed
        // translucent bar (the box-shadow + clip-path trick extends it past the content column).
        scrolled
          ? "bg-bg/85 shadow-[0_0_0_100vmax_color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur-md [clip-path:inset(0_-100vmax)]"
          : ""
      }`}
    >
      <Link href="/" className="flex items-center gap-0.5 font-mono text-[17px] font-semibold text-ink">
        <span className="text-accent">~/</span>
        {site.handle}
        <span aria-hidden="true" className="ml-1 inline-block h-[19px] w-[9px] animate-blink rounded-[2px] bg-accent" />
      </Link>
      <nav className="order-last flex w-full flex-wrap justify-between gap-x-2 md:order-none md:ml-auto md:w-auto md:justify-start md:gap-1">
        {links.map((href) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`py-2 font-mono text-[13px] font-medium transition-colors hover:text-accent sm:text-sm md:px-3.5 ${
                active ? "text-accent" : "text-muted"
              }`}
            >
              {href}
            </Link>
          );
        })}
      </nav>
      <ThemeToggle className="md:ml-3" />
    </header>
  );
}
