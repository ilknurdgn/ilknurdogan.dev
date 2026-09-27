import { site } from "@/lib/content";

export default function Footer() {
  const credit = [site.builtWith && `built with ${site.builtWith}`, site.location].filter(Boolean).join(" · ");
  return (
    <footer className="mt-auto flex flex-col gap-2 py-10 font-mono text-[13px] text-muted sm:flex-row sm:justify-between">
      <span>© {[site.name, site.version].filter(Boolean).join(" · ")}</span>
      {credit && <span>{credit}</span>}
    </footer>
  );
}
