import React from "react";

export default function GalleryLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="h-full">
      {children}
      {modal}
      <div id="modal-root" />
    </div>
  );
}
