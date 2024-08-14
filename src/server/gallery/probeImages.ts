import "server-only";
import { type Image } from "~/server/db/schema";
import probe, { type ProbeResult } from "probe-image-size";

export async function probeImages(images: Image[]): Promise<ProbeResult[]> {
  const imageData: ProbeResult[] = await Promise.all(
    images.map(async (image) => {
      return await probe(image.url);
    }),
  );

  return imageData;
}
