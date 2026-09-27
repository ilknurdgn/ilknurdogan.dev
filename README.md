# ilknurdogan.dev

Personal site — Next.js (App Router, TypeScript, Tailwind CSS v4), statically exported to `out/`.

## Scripts

```bash
npm run dev     # http://localhost:3000
npm run build   # static export → out/
npm run start   # serve out/ locally
npm run lint
```

## Content

Edit the JSON files in `content/` — no code changes needed:

| file | used on |
|---|---|
| `site.json` | home intro, terminal `whoami.json` (`stack` groups), socials, email, contact text, footer |
| `experience.json` | `/experience` — `type`: work · community · education; `employment` (e.g. Full-time, Internship) optional; dates `YYYY-MM` are shown as e.g. "Jun 2025"; empty `end` shows "Present", empty `team`/`location` are hidden; consecutive entries with the same `org` are shown as one company card (newest first) |
| `apps.json` | `/apps` — `tone`: lavender · mint · peach · sky · butter; empty list shows a "coming soon" message |
| `writing.json` | `/writing` — leave `url` empty for a non-linked row; empty list shows a "coming soon" message |
| `photos.json` | `/photos` — put images in `public/photos/` and set `src` to `/photos/<file>`; empty `src` shows a pastel placeholder; empty list shows a "coming soon" message |

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `out/` to GitHub Pages.
One-time setup: repo **Settings → Pages → Source: GitHub Actions**, and set the custom domain there.
