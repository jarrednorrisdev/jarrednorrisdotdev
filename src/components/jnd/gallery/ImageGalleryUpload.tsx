"use client";

// import { SignedIn } from "@clerk/nextjs";
import { UploadDropzone } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export function ImageGalleryUpload({ userId }: { userId: string }) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          router.push(`/gallery/user/${res[0]?.serverData?.uploadedBy}`);
          router.refresh();
        }}
      />
    </div>
  );
}
