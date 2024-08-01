import { liveGetCurrentUser } from "~/server/auth/queries/getCurrentUser";
import { Separator } from "~/components/ui/separator";
import { GalleryUploadPageBreadcrumb } from "./_components/GalleryUploadPageBreadcrumb";
import { GalleryNav } from "~/components/jnd/gallery/GalleryNav";
import { ImageUploadCard } from "~/components/jnd/gallery/ImageUploadCard";
import { Effect } from "effect";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const user = await Effect.runPromise(liveGetCurrentUser());

  return (
    <div className="container flex h-full flex-shrink-0 flex-col gap-4 py-4">
      <GalleryUploadPageBreadcrumb />
      <Separator />
      <div className="flex flex-grow gap-8">
        <GalleryNav userId={user.id}></GalleryNav>
        <main className="flex flex-grow flex-col gap-2">
          <ImageUploadCard />
        </main>
      </div>
    </div>
  );
}
