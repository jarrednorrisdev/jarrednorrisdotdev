"use client";
import { SignedIn } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export function ImageGalleryUpload() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2">
      <SignedIn>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={() => {
            router.refresh();
          }}
        />
      </SignedIn>
    </div>
  );
}
