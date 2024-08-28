import { Effect } from "effect";
import { GalleryImagesList } from "~/components/jnd/gallery/GalleryImagesList";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { StyledPage } from "~/components/jnd/StyledPage";
import { ScrollArea } from "~/components/ui/scroll-area";
import { getAccountByUserId, getUserById } from "~/server/auth/live";
import { getImagesByUserId } from "~/server/gallery/live";

export default async function GalleryUserPage({
  params: { id: userId },
}: {
  params: { id: string };
}) {
  const galleryUser = await Effect.runPromise(getUserById(userId));

  if (!galleryUser) {
    return <div>User not found</div>;
  }

  const galleryAccount = await Effect.runPromise(
    getAccountByUserId(galleryUser.id),
  );

  // if (!galleryAccount) {
  // 	return <div>Account not found</div>;
  // }

  const username = galleryAccount?.username ?? "id:" + galleryUser.id;
  const Images = await Effect.runPromise(getImagesByUserId(userId));

  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "User" },
    { label: username },
  ];

  return (
    <>
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />
      <ScrollArea type="always">
        <StyledPage>
          <div className="p-4">
            {Images ? (
              <GalleryImagesList images={Images} />
            ) : (
              <div>There are no Images to display</div>
            )}
          </div>
        </StyledPage>
      </ScrollArea>
    </>
  );
}
