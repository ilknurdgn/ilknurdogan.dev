import type { App } from "@/lib/content";
import { toneClasses } from "@/lib/tones";

export default function AppCard({ app }: { app: App }) {
  const tone = toneClasses[app.tone];
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col gap-3.5 rounded-3xl p-6 text-ink transition-transform hover:-translate-y-0.5 sm:p-7 ${tone.bg}`}
    >
      <div className="flex items-start justify-between">
        <div className={`flex size-[52px] items-center justify-center rounded-2xl bg-icon-bg text-[22px] font-bold ${tone.strong}`}>
          {app.name.charAt(0)}
        </div>
        <span className="rounded-full bg-icon-bg px-3 py-1.5 font-mono text-xs font-medium text-muted">{app.platform}</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="text-[19px] font-bold">{app.name}</h2>
        <p className="text-[15px] leading-[1.55] text-muted">{app.description}</p>
        <span className="mt-1 font-mono text-xs text-muted">{app.meta}</span>
      </div>
    </a>
  );
}
