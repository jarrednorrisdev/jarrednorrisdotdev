import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ImageGalleryUpload } from "~/components/jnd/gallery/ImageGalleryUpload";

export function ImageUploadCard() {
  return (
    <Card className="flex flex-col gap-4">
      <CardHeader>
        <CardTitle>Upload an image</CardTitle>
      </CardHeader>
      <CardContent>
        <ImageGalleryUpload />
      </CardContent>
    </Card>
  );
}
