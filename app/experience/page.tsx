import type { Metadata } from "next";
import ExperienceCard from "@/components/ExperienceCard";
import SectionHeader from "@/components/SectionHeader";
import { experience, type Experience, type Tone } from "@/lib/content";
import { toneClasses } from "@/lib/tones";

export const metadata: Metadata = { title: "Experience" };

const groups: { type: Experience["type"]; label: string; tone: Tone }[] = [
  { type: "work", label: "# work", tone: "lavender" },
  { type: "community", label: "# community", tone: "butter" },
  { type: "education", label: "# education", tone: "sky" },
];

/** Consecutive entries at the same org become one company card (e.g. intern → full-time). */
function groupByOrg(items: Experience[]): Experience[][] {
  const out: Experience[][] = [];
  for (const item of items) {
    const last = out.at(-1);
    if (last && last[0].org === item.org) last.push(item);
    else out.push([item]);
  }
  return out;
}

export default function ExperiencePage() {
  return (
    <section className="flex flex-col gap-6 pt-8 pb-16 md:pt-16 md:pb-22">
      <SectionHeader prompt="$ git log ~/experience" title="Experience" />
      {groups.map(({ type, label, tone }) => {
        const items = experience.filter((e) => e.type === type);
        if (items.length === 0) return null;
        return (
          <div key={type} className={`flex flex-col gap-3 rounded-3xl border p-5 sm:p-7 ${toneClasses[tone].frame}`}>
            <h2
              className={`self-start rounded-full px-3 py-1.5 font-mono text-xs font-medium ${toneClasses[tone].bg} ${toneClasses[tone].strong}`}
            >
              {label}
            </h2>
            <div>
              {groupByOrg(items).map((roles) => (
                <ExperienceCard key={`${roles[0].org}-${roles[0].start}`} roles={roles} tone={tone} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
