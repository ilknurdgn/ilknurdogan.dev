import type { Experience, Tone } from "@/lib/content";
import { formatRange } from "@/lib/dates";
import { toneClasses } from "@/lib/tones";

const meta = (...parts: (string | undefined)[]) => parts.filter(Boolean).join(" · ");

function OrgName({ item }: { item: Experience }) {
  return item.url ? (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
      {item.org}
    </a>
  ) : (
    item.org
  );
}

function Details({ item }: { item: Experience }) {
  return (
    <>
      {item.description && <p className="mt-1 text-[15px] leading-[1.55] text-muted">{item.description}</p>}
      {item.highlights.length > 0 && (
        <ul className="mt-1 flex flex-col gap-1 text-[15px] leading-[1.55] text-muted">
          {item.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span aria-hidden="true" className="font-mono text-accent">›</span>
              {h}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

/** One role inside a company, drawn on a timeline (line runs first dot → last dot). */
function RoleItem({ item, tone }: { item: Experience; tone: Tone }) {
  const t = toneClasses[tone];
  const kind = meta(item.employment, item.team);
  return (
    <li className="relative pb-6 pl-7 before:absolute before:top-0 before:bottom-0 before:left-[5px] before:w-px before:bg-line first:before:top-3 last:pb-0 last:before:bottom-auto last:before:h-3 only:before:hidden">
      <span
        aria-hidden="true"
        className={`absolute top-[6.5px] left-0 size-[11px] rounded-full border-2 ${t.border} ${item.end ? t.tint : t.fill}`}
      />
      <div className="flex flex-col gap-1">
        <h4 className="text-base font-semibold">{item.role}</h4>
        {kind && <span className="text-sm text-ink/80">{kind}</span>}
        <span className="font-mono text-xs text-muted">
          {formatRange(item.start, item.end)}
        </span>
        <Details item={item} />
      </div>
    </li>
  );
}

/** One company, LinkedIn-style: org header (location), then its roles (newest first). */
export default function ExperienceCard({ roles, tone }: { roles: Experience[]; tone: Tone }) {
  const latest = roles[0];
  const locations = meta(...new Set(roles.map((r) => r.location)));

  return (
    <article className="flex flex-col border-t border-line py-7 first:border-t-0 first:pt-2">
      <h3 className="text-[17px] leading-6 font-semibold sm:text-lg">
        <OrgName item={latest} />
      </h3>
      {locations && <span className="mt-1 text-sm text-muted">{locations}</span>}
      <ol className="mt-5">
        {roles.map((r) => (
          <RoleItem key={`${r.role}-${r.start}`} item={r} tone={tone} />
        ))}
      </ol>
    </article>
  );
}
