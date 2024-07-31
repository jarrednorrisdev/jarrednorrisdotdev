"use client";

import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function GalleryNav({ userId }: { userId: string }) {
  const currentPath = usePathname();
  return (
    <nav className="flex flex-col gap-1 text-nowrap pr-4">
      <Link
        href="/gallery"
        className={`font-semibold ${currentPath === "/gallery" ? "" : "text-muted-foreground"}`}
      >
        Public Images
      </Link>
      <SignedIn>
        <Link
          href={`/gallery/user/${userId}`}
          className={
            currentPath === `/gallery/user/${userId}`
              ? ""
              : "text-muted-foreground"
          }
        >
          My Images
        </Link>
        <Link
          href="/gallery/upload"
          className={
            currentPath === "/gallery/upload" ? "" : "text-muted-foreground"
          }
        >
          Upload Images
        </Link>
      </SignedIn>
    </nav>
  );
}
