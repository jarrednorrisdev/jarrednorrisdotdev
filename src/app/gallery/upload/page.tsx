import { liveGetCurrentUser } from "~/server/auth/queries/getCurrentUser";

import { ImageUploadCard } from "~/components/jnd/gallery/ImageUploadCard";
import { Effect } from "effect";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";

export const dynamic = "force-dynamic";

const breadcrumbLinks = [{ label: "Home", href: "/" }, { label: "Upload" }];

export default async function GalleryPage() {
  return (
    <div className="flex h-full flex-grow flex-col overflow-y-auto">
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />

      <main className="flex flex-grow flex-col gap-2 overflow-y-auto p-4">
        <ImageUploadCard className="" />
      </main>
    </div>
  );
}

//
