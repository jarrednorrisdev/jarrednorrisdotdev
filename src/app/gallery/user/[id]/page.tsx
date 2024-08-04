import { Separator } from "~/components/ui/separator";
import { GalleryUserPageBreadcrumb } from "./_components/GalleryUserPageBreadcrumb";
import { liveGetCurrentUser } from "~/server/auth/queries/getCurrentUser";
import { Effect } from "effect";
import { liveGetUserImagesById } from "~/server/gallery/queries";
import { liveGetUserById } from "~/server/auth/queries/getUserById";
import { GalleryImagesList } from "~/components/jnd/gallery/GalleryImagesList";
import { NavBarBottom } from "~/components/jnd/NavBarBottom";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";

export const dynamic = "force-dynamic";

export default async function GalleryUserPage({
  params: { id: userId },
}: {
  params: { id: string };
}) {
  const galleryUser = await Effect.runPromise(liveGetUserById(userId));
  const images = await Effect.runPromise(liveGetUserImagesById(userId));
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "User" },
    { label: galleryUser.username ?? galleryUser.fullName ?? galleryUser.id },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />

      <main className="flex flex-grow flex-col gap-2 overflow-y-auto p-4">
        <GalleryImagesList images={images} />
      </main>
    </div>
  );
}
