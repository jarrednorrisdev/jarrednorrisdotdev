import { Effect } from "effect";
import { liveGetUserImagesById } from "~/server/gallery/queries";
import { liveGetUserById } from "~/server/auth/queries/getUserById";
import { GalleryImagesList } from "~/components/jnd/gallery/GalleryImagesList";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { StyledPage } from "~/components/jnd/StyledPage";
import { ScrollArea } from "~/components/ui/scroll-area";


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
    <>
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />
      <ScrollArea type="always">
        <StyledPage>
          <div className="p-4">
            <GalleryImagesList images={images} />
          </div>
        </StyledPage>
      </ScrollArea>
    </>
  );
}
