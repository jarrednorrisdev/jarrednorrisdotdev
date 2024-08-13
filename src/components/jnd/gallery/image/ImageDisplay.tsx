import { cn } from "~/lib/utils";
import { type Image } from "~/server/db/schema";
import NextImage from "next/image";
import { ImageDetails } from "~/components/jnd/gallery/image/ImageDetails";

export function ImageDisplay({
  image,
  className,
}: {
  image: Image;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-grow flex-col lg:flex-row", className)}>
      <div className="flex flex-grow p-4">
        <div className="relative min-w-[200px] flex-grow items-center">
          <NextImage
            src={image.url}
            alt={image.name}
            fill={true}
            objectFit="contain"
            objectPosition="top"
            sizes="(min-width: 900px) 60vw, 100vw"
          />
        </div>
      </div>

      <ImageDetails
        image={image}
        className="max-w-[500px] border-0 border-l bg-transparent"
      />
    </div>
  );
}
