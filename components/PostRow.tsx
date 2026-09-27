import type { Post } from "@/lib/content";

export default function PostRow({ post }: { post: Post }) {
  const body = (
    <>
      <div className="flex min-w-0 flex-col gap-1.5">
        <h2 className="text-[17px] font-semibold transition-colors group-hover:text-accent sm:text-lg">{post.title}</h2>
        <span className="font-mono text-xs text-muted">
          #{post.tag} · {post.readTime}
        </span>
      </div>
      <time dateTime={post.date} className="font-mono text-[13px] whitespace-nowrap text-muted">
        {post.date}
      </time>
    </>
  );
  const className = "flex items-center justify-between gap-6 border-t border-line py-[22px] text-ink first:border-t-0";

  return post.url ? (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className={`${className} group`}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}
