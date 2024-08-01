import { Separator } from "~/components/ui/separator";
import { GalleryUserPageBreadcrumb } from "./_components/GalleryUserPageBreadcrumb";
import { UserImageGallery } from "~/components/jnd/gallery/user-image-gallery";
import { GalleryNav } from "~/components/jnd/gallery/GalleryNav";

export const dynamic = "force-dynamic";

export default async function GalleryUserPage({
  params: { id: userId },
}: {
  params: { id: string };
}) {
  return (
    <div className="container flex h-full flex-shrink-0 flex-col gap-4 py-4">
      <GalleryUserPageBreadcrumb userId={userId} />
      <Separator />
      <div className="flex flex-grow gap-8">
        <GalleryNav userId={userId} />
        <main className="flex flex-grow flex-col gap-2">
          <UserImageGallery userId={userId} />
        </main>
      </div>
    </div>
  );
}
