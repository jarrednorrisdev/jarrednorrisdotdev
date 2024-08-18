import React from "react";
import { GallerySideNavContents } from "~/components/jnd/gallery/GallerySideNavContents";

export default async function GalleryLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-grow overflow-hidden">
      <GallerySideNavContents className="hidden bg-card lg:visible lg:flex lg:border-r" />
      <div className="flex h-full flex-grow flex-col">{children}</div>

      {modal}
      <div id="modal-root" />
    </div>
  );
}
