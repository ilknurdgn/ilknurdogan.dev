import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";
import PostRow from "@/components/PostRow";
import SectionHeader from "@/components/SectionHeader";
import { posts } from "@/lib/content";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  return (
    <section className="flex flex-col gap-6 pt-8 pb-16 md:pt-16 md:pb-22">
      <SectionHeader prompt="$ cat ~/writing/*.md" title="Writing" />
      {posts.length === 0 ? (
        <EmptyState message="no posts yet · the first one is on its way" />
      ) : (
        <div className="rounded-3xl bg-card px-5 py-2 sm:px-7">
          {posts.map((post, i) => (
            <PostRow key={`${post.date}-${i}`} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
