import NextImage from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";
import { type Image } from "~/server/db/schema";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { transformDrizzlePhotosToPhotos } from "~/lib/adapters/ReactPhotoAlbumAdapter.ts";


export async function GalleryImagesList({
  images,
  className,
}: {
  images: Image[];
  className?: string;
}) {
	const photos = await transformDrizzlePhotosToPhotos(images);
	
	

  return (
    // <div className={cn("flex flex-wrap justify-around gap-4", className)}>
    //   {images.map((image) => {
    //     // todo: add a toggle for image rendering
    //     return (
    //       <Link href={`/gallery/img/${image.id}`} key={image.id}>
    //         <NextImage
    //           src={image.url}
    //           alt={image.name}
    //           width={256}
    //           height={256}
    //           className="rounded-lg"
    //         />
    //       </Link>
    //     );
    //   })}
    // </div>

    <RowsPhotoAlbum photos={photos} />
  );
}
