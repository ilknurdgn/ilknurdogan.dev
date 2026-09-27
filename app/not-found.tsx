import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col gap-5 pt-8 pb-16 md:pt-16 md:pb-24">
      <span className="font-mono text-sm text-accent">$ cd ~/this-page</span>
      <h1 className="text-[38px] leading-[1.1] font-bold tracking-[-1px] sm:text-[52px] sm:tracking-[-1.5px]">404</h1>
      <p className="font-mono text-sm text-muted">no such file or directory</p>
      <Link href="/" className="font-mono text-sm font-semibold text-accent">
        cd ~ →
      </Link>
    </section>
  );
}
