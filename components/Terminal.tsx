"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { apps, experience, site } from "@/lib/content";
import { formatRange } from "@/lib/dates";
import { getTheme, setTheme } from "@/lib/theme";

type Line = { id: number; content: ReactNode };

const PAGES = ["experience", "apps", "writing", "photos", "contact"];

const HELP: [string, string][] = [
  ["whoami", "who is this?"],
  ["cat whoami.json", "print my profile"],
  ["ls", "list pages"],
  ["cd <page>", "open a page"],
  ["apps", "list projects"],
  ["experience", "work history"],
  ["contact", "how to reach me"],
  ["theme", "switch light / dark"],
  ["echo <text>", "print text"],
  ["date", "current date"],
  ["clear", "clear the screen"],
];

const COMMANDS = ["help", "whoami", "cat", "ls", "cd", "apps", "experience", "contact", "theme", "echo", "date", "clear"];

const Str = ({ children }: { children: string }) => <span className="text-syntax-string">&quot;{children}&quot;</span>;

const ExtLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target={href.startsWith("mailto:") ? undefined : "_blank"}
    rel="noopener noreferrer"
    className="text-accent underline-offset-2 hover:underline"
  >
    {children}
  </a>
);

const Key = ({ children }: { children: string }) => <span className="text-ink">&quot;{children}&quot;</span>;

/** `cat whoami.json | jq .` output. */
function WhoamiJson() {
  const fields: [string, ReactNode][] = [
    ["name", <Str key="name">{site.name}</Str>],
    ["role", <Str key="role">{site.role}</Str>],
    ...(site.location ? ([["location", <Str key="location">{site.location}</Str>]] as [string, ReactNode][]) : []),
    [
      "stack",
      <span key="stack">
        {"{"}
        {Object.entries(site.stack).map(([group, items], gi, groups) => (
          <span key={group}>
            {"\n    "}
            <Key>{group}</Key>: [
            {items.map((item, i) => (
              <span key={item}>
                {i > 0 && ", "}
                <Str>{item}</Str>
              </span>
            ))}
            ]{gi < groups.length - 1 && ","}
          </span>
        ))}
        {"\n  }"}
      </span>,
    ],
  ];
  return (
    <>
      {"{"}
      {fields.map(([key, value], i) => (
        <span key={key}>
          {"\n  "}
          <Key>{key}</Key>: {value}
          {i < fields.length - 1 && ","}
        </span>
      ))}
      {"\n}"}
    </>
  );
}

const Prompt = () => (
  <span className="mr-[1ch] select-none">
    <span className="text-accent">{site.handle}@dev</span> <span className="text-muted">~ %</span>
  </span>
);

/** Turns "~/apps/", "/apps", "apps" into "apps"; "~" or "" into "". */
const normalizePath = (arg: string) => arg.replace(/^~\/?/, "").replace(/^\/|\/$/g, "");

export default function Terminal() {
  const router = useRouter();
  const nextId = useRef(5);
  const [lines, setLines] = useState<Line[]>(() => [
    {
      id: 0,
      content: (
        <>
          <Prompt />
          whoami
        </>
      ),
    },
    { id: 1, content: site.handle },
    {
      id: 2,
      content: (
        <>
          <Prompt />
          cat whoami.json | jq .
        </>
      ),
    },
    { id: 3, content: <WhoamiJson /> },
    {
      id: 4,
      content: (
        <span className="text-muted">
          {"# type "}
          <span className="text-accent">help</span>
          {" to explore"}
        </span>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const historyPos = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  function cd(target: string): ReactNode {
    const page = normalizePath(target);
    if (page === "") {
      router.push("/");
      return "already home";
    }
    if (!PAGES.includes(page)) return `cd: no such directory: ${target}`;
    router.push(`/${page}/`);
    return `opening /${page} …`;
  }

  function execute(raw: string): ReactNode | "clear" {
    const [cmd = "", ...args] = raw.trim().split(/\s+/);
    const arg = args.join(" ");

    switch (cmd.toLowerCase()) {
      case "":
        return null;
      case "help":
        return (
          <span className="grid grid-cols-[auto_1fr] gap-x-4">
            {HELP.map(([name, desc]) => (
              <span key={name} className="contents">
                <span className="text-accent">{name}</span>
                <span className="text-muted">{desc}</span>
              </span>
            ))}
          </span>
        );
      case "whoami":
        return site.handle;
      case "cat":
        // Also accepts the "cat whoami.json | jq ." form shown on load.
        if (arg === "" || arg.startsWith("whoami.json")) return <WhoamiJson />;
        return `cat: ${arg}: no such file`;
      case "ls":
        return (
          <span className="flex flex-wrap gap-x-4">
            {PAGES.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => run(`cd ${p}`)}
                className="cursor-pointer text-syntax-keyword hover:underline"
              >
                {p}/
              </button>
            ))}
            <span>whoami.json</span>
          </span>
        );
      case "cd":
      case "open":
        return cd(arg);
      case "apps":
        if (apps.length === 0) return <span className="text-muted">no apps yet · coming soon</span>;
        return apps.map((a, i) => (
          <span key={a.url}>
            {i > 0 && "\n"}
            <ExtLink href={a.url}>{a.name}</ExtLink>
            <span className="text-muted"> · {a.platform}</span>
          </span>
        ));
      case "experience":
        return experience.map((e, i) => (
          <span key={`${e.org}-${e.start}`}>
            {i > 0 && "\n"}
            <span className="text-muted">{formatRange(e.start, e.end)}</span> {e.role}
            <span className="text-muted"> @ {e.org}</span>
          </span>
        ));
      case "contact":
        return (
          <>
            mail: <ExtLink href={`mailto:${site.email}`}>{site.email}</ExtLink>
            {site.socials.map((s) => (
              <span key={s.label}>
                {"\n"}
                {s.label}: <ExtLink href={s.url}>{s.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</ExtLink>
              </span>
            ))}
          </>
        );
      case "theme": {
        const next = arg === "light" || arg === "dark" ? arg : getTheme() === "dark" ? "light" : "dark";
        if (arg && arg !== next) return "usage: theme [light|dark]";
        setTheme(next);
        return `theme set to ${next}`;
      }
      case "echo":
        return arg;
      case "date":
        return new Date().toString();
      case "clear":
        return "clear";
      case "sudo":
        return "permission denied: nice try";
      default:
        return (
          <>
            zsh: command not found: {cmd}
            <span className="text-muted">
              {" · try "}
              <span className="text-accent">help</span>
            </span>
          </>
        );
    }
  }

  function run(raw: string) {
    const output = execute(raw);
    if (raw.trim()) setHistory((h) => [...h, raw.trim()]);
    historyPos.current = null;
    setInput("");

    if (output === "clear") {
      setLines([]);
      return;
    }
    const echo: Line = {
      id: nextId.current++,
      content: (
        <>
          <Prompt />
          {raw}
        </>
      ),
    };
    const result: Line[] = output === null ? [] : [{ id: nextId.current++, content: output }];
    setLines((prev) => [...prev, echo, ...result]);
  }

  function complete(value: string): string {
    const [cmd, ...rest] = value.split(" ");
    if (rest.length === 0) {
      const matches = COMMANDS.filter((c) => c.startsWith(cmd));
      return matches.length === 1 ? `${matches[0]} ` : value;
    }
    const partial = rest.join(" ");
    const pool = cmd === "cd" || cmd === "open" ? PAGES : cmd === "cat" ? ["whoami.json"] : cmd === "theme" ? ["light", "dark"] : [];
    const matches = pool.filter((p) => p.startsWith(normalizePath(partial)));
    return matches.length === 1 ? `${cmd} ${matches[0]}` : value;
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      run(input);
    } else if (e.key === "Tab") {
      e.preventDefault();
      setInput(complete(input));
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      if (history.length === 0) return;
      e.preventDefault();
      const last = history.length - 1;
      const pos = historyPos.current;
      const next = e.key === "ArrowUp" ? (pos === null ? last : Math.max(0, pos - 1)) : pos === null ? null : pos + 1;
      historyPos.current = next !== null && next > last ? null : next;
      setInput(historyPos.current === null ? "" : history[historyPos.current]);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  }

  return (
    <div
      className="min-w-0 overflow-hidden rounded-3xl bg-card"
      onClick={() => {
        // Keep text selectable: only focus the prompt when the user isn't selecting output.
        if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
      }}
    >
      <div className="relative flex items-center justify-center border-b border-line px-[18px] py-3.5">
        <span className="absolute left-[18px] flex gap-2">
          <span className="size-3 rounded-full bg-dot-a" />
          <span className="size-3 rounded-full bg-dot-b" />
          <span className="size-3 rounded-full bg-dot-c" />
        </span>
        <span className="font-mono text-[13px] text-muted">
          {site.handle} — zsh<span className="hidden sm:inline"> — 80×24</span>
        </span>
      </div>
      <div
        ref={scrollRef}
        className="max-h-[720px] min-h-[340px] cursor-text overflow-y-auto [scrollbar-color:var(--line)_transparent] [scrollbar-width:thin] px-5 pt-5 pb-4 font-mono text-[13px] leading-[1.8] sm:px-6 sm:text-sm"
      >
        <div aria-live="polite">
          {lines.map((line) => (
            <div key={line.id} className="break-words whitespace-pre-wrap">
              {line.content}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <Prompt />
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Terminal command"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="send"
            className="min-w-0 flex-1 bg-transparent text-base text-ink caret-accent outline-none focus-visible:outline-none sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}
