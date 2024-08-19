import { Effect, Option } from "effect";
import { GalleryImagesList } from "~/components/jnd/gallery/GalleryImagesList";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { StyledPage } from "~/components/jnd/StyledPage";
import { ScrollArea } from "~/components/ui/scroll-area";
import { getAccountByUserId, getUserById } from "~/server/auth/live";
import { getAllImages } from "~/server/gallery/live";

export default async function GalleryUserPage({
  params: { id: userId },
}: {
  params: { id: string };
}) {
  const user = Option.getOrThrow(
    await Effect.runPromise(getUserById(userId))
  );
	const account = Option.getOrThrow(await Effect.runPromise(getAccountByUserId(user.id)));
  const username = account.username ?? "id:" + user.id;
  const maybeImages = await Effect.runPromise(
    getAllImages(),
  );

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
            {Option.match(maybeImages, {
              onNone: () => <div>There are no Images to display</div>,
              onSome: (images) => <GalleryImagesList images={images} />,
            })}
          </div>
        </StyledPage>
      </ScrollArea>
    </>
  );
}
