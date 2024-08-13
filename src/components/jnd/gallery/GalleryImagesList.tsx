import "server-only";

import React from "react";
import { cn } from "~/lib/utils";
import { type Image } from "~/server/db/schema";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { transformDrizzlePhotosToPhotos } from "~/lib/adapters/ReactPhotoAlbumAdapter.ts";
import { ScrollArea } from "~/components/ui/scroll-area";

export async function GalleryImagesList({
  images,
  className,
}: {
  images: Image[];
  className?: string;
}) {
  const photos = await transformDrizzlePhotosToPhotos(images);

  return (
    <RowsPhotoAlbum
      photos={photos}
      rowConstraints={{ singleRowMaxHeight: 512, maxPhotos: 50 }}
      breakpoints={[200, 600, 1200, 1600]}
    />
  );
}
