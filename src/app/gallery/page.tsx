import { MyImageGallery } from "~/app/gallery/_components/my-image-gallery";
import { TypographyH1, TypographyH3 } from "~/components/typography/typography";
import { ImageGalleryUpload } from "./_components/ImageGalleryUpload";
import { PublicImageGallery } from "./_components/public-image-gallery";
import { SignedIn } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="container flex h-full flex-grow flex-col flex-wrap items-stretch gap-4 p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Gallery</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <SignedIn>
        <Card className="flex flex-col gap-4">
          <CardHeader>
            <CardTitle>Upload an image</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageGalleryUpload />
          </CardContent>
        </Card>
      </SignedIn>
      <div className="flex gap-4">
        <SignedIn>
          <MyImageGallery />
        </SignedIn>
        <PublicImageGallery />
      </div>
    </main>
  );
}
