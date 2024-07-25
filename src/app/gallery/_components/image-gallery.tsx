import NextImage from "next/image";
import Link from "next/link";
import React from "react";
import { TypographyH4 } from "~/components/typography/typography";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { type Image } from "~/server/db/schema";

export async function ImageGallery({
  images,
  galleryTitle,
}: {
  images: Image[];
  galleryTitle: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap justify-around gap-4">
      {images.map((image) => (
        <Card key={image.id} className="flex w-64 flex-col gap-4 p-2">
          <Link href={`gallery/img/${image.id}`}>
            
              <NextImage
                src={image.url}
                alt={image.name}
                width={256}
                height={256}
                className="rounded-lg"
              />
          </Link>
        </Card>
      ))}
    </div>
  );
}

export function GalleryTitle({ children }: { children: React.ReactNode }) {
  return <TypographyH4>{children}</TypographyH4>;
}
