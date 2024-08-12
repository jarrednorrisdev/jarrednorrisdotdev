"use client";
import { SignedIn } from "@clerk/nextjs";
import { UploadButton, UploadDropzone } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export function ImageGalleryUpload() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2">
      <SignedIn>
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
						router.push(`/gallery/user/${res[0]?.serverData?.uploadedBy}`);
						router.refresh();
          }}
        ></UploadDropzone>
      </SignedIn>
    </div>
  );
}
