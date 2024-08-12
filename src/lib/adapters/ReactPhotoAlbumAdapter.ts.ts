import { type Photo } from "react-photo-album";
import { type Image } from "~/server/db/schema";
import probe, { type ProbeResult } from "probe-image-size";
// Assuming default width and height values for the photos
const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;

// Example drizzle table type

const IMAGE_HREF_PREFIX = "/gallery/img/";

// Function to transform drizzle photo array to Photo array
export async function transformDrizzlePhotosToPhotos(
  images: Image[],
): Promise<Photo[]> {
  const imageSizes: ProbeResult[] = await Promise.all(
    images.map(async (image) => {
      return await probe(image.url);
    }),
  );

  return images.map((image, index) => ({
    src: image.url,
    width: imageSizes[index]?.width ?? DEFAULT_WIDTH,
    height: imageSizes[index]?.height ?? DEFAULT_HEIGHT,
    key: image.id.toString(),
    alt: image.name,
    title: image.name,
    href: `${IMAGE_HREF_PREFIX}${image.id}`,
    label: `Photo by user ${image.userId}`,
    // Assuming srcSet can be derived from some logic if needed, otherwise it can be omitted
    srcSet: [],
  }));
}
