import { getOtherUserImages } from "~/server/queries";
import {
  GalleryTitle,
  ImageGallery,
} from "~/app/gallery/_components/image-gallery";

export async function PublicImageGallery() {
  const images = await getOtherUserImages();
  return (
    <ImageGallery
      images={images}
      galleryTitle={<GalleryTitle>Public Images</GalleryTitle>}
    />
  );
}
