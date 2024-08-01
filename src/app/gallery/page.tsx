import { PublicImageGallery } from "~/components/jnd/gallery/public-image-gallery";
import { liveGetCurrentUser } from "~/server/auth/queries/getCurrentUser";
import { Separator } from "~/components/ui/separator";
import { GalleryPageBreadcrumb } from "./_components/GalleryPageBreadcrumb";

import { GalleryNav } from "../../components/jnd/gallery/GalleryNav";
import { Effect } from "effect";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const user = await Effect.runPromise(liveGetCurrentUser());

  return (
    <div className="container flex h-full flex-shrink-0 flex-col gap-4 py-4">
      <GalleryPageBreadcrumb />
      <Separator />
      <div className="flex flex-grow flex-wrap gap-8 sm:flex-nowrap">
        <GalleryNav userId={user.id}></GalleryNav>
        <main className="flex flex-grow flex-col gap-2">
          <PublicImageGallery />
        </main>
      </div>
    </div>
  );
}
