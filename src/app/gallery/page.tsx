import React from "react";
import { Effect, Option } from "effect";

import { GalleryImagesList } from "~/components/jnd/gallery/GalleryImagesList";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { StyledPage } from "~/components/jnd/StyledPage";
import { ScrollArea } from "~/components/ui/scroll-area";
import { GalleryService, GalleryServiceLive } from "~/server/gallery";
import { getAllImages } from "~/server/gallery/live";

const breadcrumbLinks = [{ label: "Home", href: "/" }, { label: "Gallery" }];

export const dynamic = "force-dynamic";

export default async function GalleryHomePage() {
  const maybeImages = await Effect.runPromise(
    getAllImages(),
  );

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
