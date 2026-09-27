import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-6 pt-8 pb-16 md:pt-16 md:pb-22">
      <SectionHeader prompt={`$ ping ${site.handle}`} title="Let's talk" />
      <p className="max-w-[520px] text-base leading-[1.7] text-muted">{site.contactText}</p>
      <div className="flex flex-col items-start gap-6">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-accent px-6 py-3 font-mono text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
        >
          send an email ↗
        </a>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs text-muted">or find me on</span>
          <SocialLinks email={false} />
        </div>
      </div>
    </section>
  );
}
