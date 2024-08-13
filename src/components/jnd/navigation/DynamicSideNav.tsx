"use client";

import { usePathname } from "next/navigation";
import { GallerySideNavContents } from "~/components/jnd/gallery/GallerySideNavContents";

export function DynamicSideNav({ userId }: { userId?: string }) {
  const pathname = usePathname();

  if (pathname === "/") {
    return;
  } else if (pathname.includes("/gallery")) {
    return <GallerySideNavContents userId={userId} />;
  }
}

export default DynamicSideNav;
