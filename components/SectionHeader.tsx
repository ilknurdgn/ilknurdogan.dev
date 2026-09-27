/** Page header: just the shell prompt. The title stays in the DOM for screen readers and SEO. */
export default function SectionHeader({ prompt, title }: { prompt: string; title: string }) {
  return (
    <div>
      <span className="font-mono text-[13px] text-accent">{prompt}</span>
      <h1 className="sr-only">{title}</h1>
    </div>
  );
}
