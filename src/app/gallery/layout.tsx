import { Effect } from "effect";
import React from "react";
import { NavBarBottom } from "~/components/jnd/NavBarBottom";
import { GalleryNavSheet } from "~/components/jnd/gallery/GalleryNavSheet";
import { GallerySideNavContents } from "~/components/jnd/gallery/GallerySideNavContents";
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
    <div className="flex h-full">
      <GallerySideNavContents
        userId={user?.id}
        className="hidden bg-card md:visible md:flex md:border-r"
      />
      <div className="flex flex-grow flex-col">
        {children}
        <NavBarBottom className="border-t md:hidden">
          <GalleryNavSheet buttonClassName="flex flex-grow">
            <GallerySideNavContents userId={user?.id} className="flex" />
          </GalleryNavSheet>
        </NavBarBottom>
      </div>

      {modal}
      <div id="modal-root" />
    </div>
  );
}
