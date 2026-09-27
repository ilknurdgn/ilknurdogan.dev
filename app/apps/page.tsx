import type { Metadata } from "next";
import AppCard from "@/components/AppCard";
import EmptyState from "@/components/EmptyState";
import SectionHeader from "@/components/SectionHeader";
import { apps } from "@/lib/content";

export const metadata: Metadata = { title: "Apps" };

export default function AppsPage() {
  return (
    <section className="flex flex-col gap-6 pt-8 pb-16 md:pt-16 md:pb-22">
      <SectionHeader prompt="$ ls ~/apps" title="Apps" />
      {apps.length === 0 ? (
        <EmptyState message="no apps yet · coming soon" />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.url} app={app} />
          ))}
        </div>
      )}
    </section>
  );
}
