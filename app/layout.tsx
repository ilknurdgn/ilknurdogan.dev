import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ilknurdogan.dev"),
  title: { default: site.tabTitle, template: `%s · ${site.tabTitle}` },
  description: site.bio,
  openGraph: {
    title: site.name,
    description: site.bio,
    url: "/",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
};

// Runs before first paint: stored choice wins, otherwise follow the OS setting.
const themeScript = `(function(){var d=document.documentElement,m=matchMedia('(prefers-color-scheme: dark)');function s(){try{return localStorage.getItem('theme')}catch(e){return null}}function a(){d.dataset.theme=s()||(m.matches?'dark':'light')}a();m.addEventListener('change',function(){if(!s())a()})})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${jetbrains.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg font-sans text-ink antialiased">
        {/* Full-width dot grid behind the first screen of every page. */}
        <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-x-0 top-0 -z-10 h-[100svh]" />
        <div className="mx-auto flex min-h-dvh w-full max-w-[992px] flex-col px-4">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
