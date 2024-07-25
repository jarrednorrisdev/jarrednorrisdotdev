import { getAllImages, getOtherUserImages } from "~/server/queries";
import {
  GalleryTitle,
  ImageGallery,
} from "~/app/gallery/_components/image-gallery";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { auth } from "@clerk/nextjs/server";

export async function PublicImageGallery() {
  const user = auth();
  const images = !!user.userId
    ? await getOtherUserImages()
    : await getAllImages();
  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle>Public Images</CardTitle>
      </CardHeader>
      <CardContent>
        <ImageGallery
          images={images}
          galleryTitle={<GalleryTitle>My Images</GalleryTitle>}
        />
      </CardContent>
    </Card>
  );
}
