import { type Photo } from "react-photo-album";
import { type Image } from "~/app/server/db/schema";
import { type ProbeResult } from "probe-image-size";
// Assuming default width and height values for the photos
const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;

// Example drizzle table type

const IMAGE_HREF_PREFIX = "/gallery/img/";

// Function to transform drizzle photo array to Photo array
export function schemaImagesToReactPhotoAlbum(
  images: Image[],
  imageProbeResults: ProbeResult[],
): Photo[] {
  return images.map((image, index) => ({
    src: image.url,
    width: imageProbeResults[index]?.width ?? DEFAULT_WIDTH,
    height: imageProbeResults[index]?.height ?? DEFAULT_HEIGHT,
    key: image.id.toString(),
    alt: image.name,
    title: image.name,
    href: `${IMAGE_HREF_PREFIX}${image.id}`,
    label: `Photo by user ${image.userId}`,
    // Assuming srcSet can be derived from some logic if needed, otherwise it can be omitted
    srcSet: [],
  }));
}
