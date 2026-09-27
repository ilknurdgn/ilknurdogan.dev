import type { Metadata } from "next";
import EmptyState from "@/components/EmptyState";
import PhotoGrid from "@/components/PhotoGrid";
import SectionHeader from "@/components/SectionHeader";
import { photos } from "@/lib/content";

export const metadata: Metadata = { title: "Photos" };

export default function PhotosPage() {
  return (
    <section className="flex flex-col gap-6 pt-8 pb-16 md:pt-16 md:pb-22">
      <SectionHeader prompt="$ open ~/photos" title="Photo gallery" />
      {photos.length === 0 ? (
        <EmptyState message="no photos yet · coming soon" />
      ) : (
        <PhotoGrid photos={photos} />
      )}
    </section>
  );
}
