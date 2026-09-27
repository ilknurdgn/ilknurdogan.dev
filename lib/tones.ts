import type { Tone } from "@/lib/content";

type ToneClasses = { bg: string; strong: string; border: string; fill: string; frame: string; tint: string };

// Full class names so Tailwind can detect them.
export const toneClasses: Record<Tone, ToneClasses> = {
  lavender: {
    bg: "bg-lavender",
    strong: "text-lavender-strong",
    border: "border-lavender-strong",
    fill: "bg-lavender-strong",
    frame: "border-lavender-strong/35 bg-lavender-tint",
    tint: "bg-lavender-tint",
  },
  mint: {
    bg: "bg-mint",
    strong: "text-mint-strong",
    border: "border-mint-strong",
    fill: "bg-mint-strong",
    frame: "border-mint-strong/35 bg-mint-tint",
    tint: "bg-mint-tint",
  },
  peach: {
    bg: "bg-peach",
    strong: "text-peach-strong",
    border: "border-peach-strong",
    fill: "bg-peach-strong",
    frame: "border-peach-strong/35 bg-peach-tint",
    tint: "bg-peach-tint",
  },
  sky: {
    bg: "bg-sky",
    strong: "text-sky-strong",
    border: "border-sky-strong",
    fill: "bg-sky-strong",
    frame: "border-sky-strong/35 bg-sky-tint",
    tint: "bg-sky-tint",
  },
  butter: {
    bg: "bg-butter",
    strong: "text-butter-strong",
    border: "border-butter-strong",
    fill: "bg-butter-strong",
    frame: "border-butter-strong/35 bg-butter-tint",
    tint: "bg-butter-tint",
  },
};

export const toneOrder: Tone[] = ["lavender", "mint", "peach", "sky", "butter"];
