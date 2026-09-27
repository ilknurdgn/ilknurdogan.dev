import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { site } from "@/lib/content";

// Keyed by the `label` field in content/site.json socials.
const icons: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  instagram: FaInstagram,
};

const buttonClass =
  "flex size-11 items-center justify-center rounded-full bg-card text-ink transition-colors hover:text-accent";

export default function SocialLinks({ className = "", email = true }: { className?: string; email?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {site.socials.map(({ label, url }) => {
        const Icon = icons[label];
        return (
          <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={buttonClass}>
            {Icon ? <Icon size={18} aria-hidden="true" /> : <span className="font-mono text-xs">{label}</span>}
          </a>
        );
      })}
      {email && (
        <a href={`mailto:${site.email}`} aria-label="email" title="email" className={buttonClass}>
          <FaEnvelope size={17} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
