import { Effect } from "effect";
import { GallerySideNavContents } from "~/components/jnd/gallery/GallerySideNavContents";
import { getCurrentUserId } from "~/server/auth/live";

export default async function GalleryLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const userId = await Effect.runPromise(getCurrentUserId());

  return (
    <div className="flex h-full flex-grow overflow-hidden">
      <GallerySideNavContents
        userId={userId}
        className="hidden bg-card lg:visible lg:flex lg:border-r"
      />
      <div className="flex h-full flex-grow flex-col">{children}</div>
      {modal}
      <div id="modal-root" />
    </div>
  );
}
