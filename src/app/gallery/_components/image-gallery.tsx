import NextImage from "next/image";
import Link from "next/link";
import React from "react";
import Card from "~/components/card";
import { TypographyH4 } from "~/components/typography/typography";
import { type Image } from "~/server/db/schema";

export async function ImageGallery({
  images,
  galleryTitle,
}: {
  images: Image[];
  galleryTitle: React.ReactNode;
}) {
  return (
    <Card className="flex flex-grow flex-col gap-4 ">
      {galleryTitle}
      <div className="flex flex-wrap gap-4">
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

              <div className="truncate text-lg">{image.name}</div>
            </Link>
          </Card>
        ))}
      </div>
    </Card>
  );
}

export function GalleryTitle({ children }: { children: React.ReactNode }) {
  return <TypographyH4>{children}</TypographyH4>;
}
