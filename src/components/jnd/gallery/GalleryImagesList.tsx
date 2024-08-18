import "server-only";

import { type Image } from "~/app/server/db/schema";
import { schemaImagesToReactPhotoAlbum } from "~/app/server/gallery/schemaPhotosToReactPhotoAlbum";
import { probeImages } from "~/app/server/gallery/probeImages";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

export async function GalleryImagesList({ images }: { images: Image[] }) {
  const imageProbeData = await probeImages(images);
  const photos = schemaImagesToReactPhotoAlbum(images, imageProbeData);

  return (
    <RowsPhotoAlbum
      photos={photos}
      rowConstraints={{ singleRowMaxHeight: 512, maxPhotos: 50 }}
      breakpoints={[200, 600, 1200, 1600]}
    />
  );
}
