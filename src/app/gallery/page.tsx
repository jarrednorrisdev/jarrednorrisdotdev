import { PublicImageGallery } from "~/components/jnd/gallery/public-image-gallery";
import { liveGetCurrentUserAction } from "~/server/auth/queries/getCurrentUser";
import { Separator } from "~/components/ui/separator";
import { GalleryPageBreadcrumb } from "./_components/GalleryPageBreadcrumb";

import { GalleryNav } from "../../components/jnd/gallery/GalleryNav";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const user = await liveGetCurrentUserAction();

  return (
    <div className="container flex h-full flex-shrink-0 flex-col gap-4 py-4">
      <GalleryPageBreadcrumb />
      <Separator />
      <div className="flex flex-grow gap-8">
        <GalleryNav userId={user.id}></GalleryNav>
        <main className="flex flex-grow flex-col gap-2">
          <PublicImageGallery />
        </main>
      </div>
    </div>
  );
}
