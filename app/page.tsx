import Image from "next/image";
import ScrollHint from "@/components/ScrollHint";
import SocialLinks from "@/components/SocialLinks";
import Terminal from "@/components/Terminal";
import { site } from "@/lib/content";

export default function Home() {
  const subtitle = [site.role, site.location].filter(Boolean).join(" · ");
  return (
    <>
      {/* Fills the first screen below the sticky nav (≈96px tall on mobile, 76px from md; keep in sync with components/Nav.tsx). */}
      <section className="relative flex min-h-[calc(100svh-96px)] flex-col items-center justify-center pb-20 text-center md:min-h-[calc(100svh-76px)]">
        <Image
          src="/images/avatar.jpg"
          alt={site.name}
          width={112}
          height={112}
          priority
          className="size-24 rounded-full object-cover ring-4 ring-card sm:size-28"
        />
        <h1 className="mt-5 text-[32px] leading-[1.1] font-bold tracking-[-0.8px] sm:mt-6 sm:text-[44px] sm:tracking-[-1.2px]">
          {site.name}
        </h1>
        {subtitle && <p className="mt-2 text-base text-muted sm:text-lg">{subtitle}</p>}
        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.7] text-muted sm:mt-6 sm:text-base">{site.bio}</p>
        <SocialLinks className="mt-6 justify-center" />
        <ScrollHint />
      </section>
      <section id="terminal" className="scroll-mt-[104px] md:scroll-mt-[84px] pt-6 pb-16 md:pb-24">
        <Terminal />
      </section>
    </>
  );
}
