import { getCurrentUserImages } from "~/server/queries";
import {
  GalleryTitle,
  ImageGallery,
} from "~/app/gallery/_components/image-gallery";

export async function MyImageGallery() {
  const images = await getCurrentUserImages();
  return (
    <ImageGallery
      images={images}
      galleryTitle={<GalleryTitle>My Images</GalleryTitle>}
    />
  );
}
