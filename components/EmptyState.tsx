/** Placeholder for a section that has no content yet. */
export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-line px-6 py-14 text-center font-mono text-sm text-muted">
      {message}
    </div>
  );
}
