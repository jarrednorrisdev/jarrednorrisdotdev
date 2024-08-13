import { Effect } from "effect";
import { liveGetUserImagesById } from "~/server/gallery/queries";
import { liveGetUserById } from "~/server/auth/queries/getUserById";
import { GalleryImagesList } from "~/components/jnd/gallery/GalleryImagesList";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { StyledPage } from "~/components/jnd/StyledPage";

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
    <StyledPage>
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />
      {/* <NavBarTop className="z-25 sticky flex justify-between py-2">
        <div className="flex gap-2 text-orange-500">TODO: add image filters</div>
      </NavBarTop> */}

      <main className="flex flex-grow flex-col overflow-auto">
        <GalleryImagesList images={images} />
      </main>
    </StyledPage>
  );
}
