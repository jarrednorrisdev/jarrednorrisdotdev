import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ImageGalleryUpload } from "~/components/jnd/gallery/ImageGalleryUpload";
import { cn } from "~/lib/utils";

export function ImageUploadCard({ className }: { className?: string }) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Upload an image</CardTitle>
      </CardHeader>
      <CardContent>
        <ImageGalleryUpload />
      </CardContent>
    </Card>
  );
}
