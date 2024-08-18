"use client";

import { usePathname } from "next/navigation";
import { GallerySideNavContents } from "~/components/jnd/gallery/GallerySideNavContents";

export function DynamicSideNav() {
  const pathname = usePathname();
	


  if (pathname === "/") {
    return;
  } else if (pathname.includes("/gallery")) {
    return <GallerySideNavContents />;
  }
}

export default DynamicSideNav;
