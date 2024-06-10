import Image from "next/image";
import Link from "next/link";
import { getCurrentUserImages } from "~/server/queries";

export async function ImageGallery() {
  const images = await getCurrentUserImages();
  return (
    <div className="container flex flex-grow flex-col items-center justify-center gap-12 border px-2 py-4">
      <div>Images</div>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-32 flex-col gap-4">
            <Link href={`gallery/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                width={256}
                height={256}
                className="rounded-lg"
              />
            </Link>
            <div className="text-lg">{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
