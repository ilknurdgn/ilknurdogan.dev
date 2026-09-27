import siteJson from "@/content/site.json";
import appsJson from "@/content/apps.json";
import writingJson from "@/content/writing.json";
import photosJson from "@/content/photos.json";
import experienceJson from "@/content/experience.json";

export type Tone = "lavender" | "mint" | "peach" | "sky" | "butter";

export type Site = {
  name: string;
  /** Browser tab title; subpages show "Apps · <tabTitle>". */
  tabTitle: string;
  handle: string;
  role: string;
  location: string;
  bio: string;
  /** Skill groups shown as `stack` in the home terminal's whoami.json. */
  stack: Record<string, string[]>;
  email: string;
  socials: { label: string; url: string }[];
  contactText: string;
  builtWith: string;
  version: string;
};

export type App = {
  name: string;
  platform: string;
  meta: string;
  description: string;
  url: string;
  tone: Tone;
};

export type Post = {
  title: string;
  tag: string;
  readTime: string;
  date: string;
  url: string;
};

/** `src` is a path under /public (e.g. "/photos/izmir.jpg"); empty renders a pastel placeholder. */
export type Photo = {
  src: string;
  alt: string;
  caption: string;
  place: string;
};

/** `end` empty means ongoing. Dates as "YYYY" or "YYYY-MM". Missing/empty `team`, `url`, `location` are hidden. */
export type Experience = {
  type: "work" | "community" | "education";
  role: string;
  /** e.g. "Full-time", "Internship"; empty is hidden. */
  employment: string;
  org: string;
  team?: string;
  url?: string;
  location?: string;
  start: string;
  end: string;
  description: string;
  highlights: string[];
};

export const site: Site = siteJson;
export const apps = appsJson as App[];
export const posts: Post[] = writingJson;
export const photos: Photo[] = photosJson;
export const experience = experienceJson as Experience[];
