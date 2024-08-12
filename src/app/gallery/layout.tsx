import { Effect } from "effect";
import React from "react";
import { GallerySideNavContents } from "~/components/jnd/gallery";
import { liveGetCurrentUser } from "~/server/auth/queries/getCurrentUser";

export default async function GalleryLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const user = await Effect.runPromise(liveGetCurrentUser());

  return (
    <div className="flex flex-grow overflow-auto">
      <GallerySideNavContents
        userId={user?.id}
        className="hidden bg-card md:visible md:flex md:border-r"
      />
      <div className="flex flex-grow flex-col overflow-auto">{children}</div>

      {modal}
      <div id="modal-root" />
    </div>
  );
}
