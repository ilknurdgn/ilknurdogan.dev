"use client";

import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/content";
import { toneOrder } from "@/lib/tones";

const sunX = [210, 90, 160, 230, 120, 190];

function Placeholder({ index }: { index: number }) {
  const tone = toneOrder[index % toneOrder.length];
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 240"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ background: `var(--${tone})` }}
    >
      <circle cx={sunX[index % sunX.length]} cy="80" r="26" style={{ fill: "var(--sun)" }} />
      <path
        d="M0 170 C 60 150, 120 185, 180 165 S 260 155, 300 170 L300 240 L0 240 Z"
        style={{ fill: `var(--${tone}-hill)` }}
      />
    </svg>
  );
}

function Caption({ photo }: { photo: Photo }) {
  return (
    <figcaption className="absolute bottom-3.5 left-3.5 rounded-full bg-icon-bg px-3 py-1.5 font-mono text-xs font-medium text-ink">
      {photo.caption} · {photo.place}
    </figcaption>
  );
}

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const viewable = photos.map((p, i) => (p.src ? i : -1)).filter((i) => i >= 0);

  function step(dir: 1 | -1) {
    setOpen((cur) => {
      if (cur === null) return cur;
      const pos = viewable.indexOf(cur);
      return viewable[(pos + dir + viewable.length) % viewable.length];
    });
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) dialog.showModal();
    if (open === null && dialog.open) dialog.close();
  }, [open]);

  const current = open !== null ? photos[open] : null;

  return (
    <>
      <div className="grid auto-rows-[240px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <figure key={`${photo.caption}-${i}`} className="relative m-0 overflow-hidden rounded-3xl bg-card">
            {photo.src ? (
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Open ${photo.alt || photo.caption}`}
                className="block size-full cursor-zoom-in"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </button>
            ) : (
              <Placeholder index={i} />
            )}
            <Caption photo={photo} />
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-4 backdrop:bg-black/80"
      >
        {current && (
          <figure className="m-0 flex flex-col items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[80dvh] max-w-[min(92vw,1100px)] rounded-3xl object-contain"
            />
            <figcaption className="flex items-center gap-2 font-mono text-xs text-white/85">
              {viewable.length > 1 && (
                <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="cursor-pointer rounded-full px-3 py-2 hover:bg-white/10">
                  ←
                </button>
              )}
              <span>
                {current.caption} · {current.place}
              </span>
              {viewable.length > 1 && (
                <button type="button" onClick={() => step(1)} aria-label="Next photo" className="cursor-pointer rounded-full px-3 py-2 hover:bg-white/10">
                  →
                </button>
              )}
              <button type="button" onClick={() => setOpen(null)} aria-label="Close" className="cursor-pointer rounded-full px-3 py-2 hover:bg-white/10">
                esc ✕
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
