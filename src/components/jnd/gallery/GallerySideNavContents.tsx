"use client";

import { SignedIn } from "@clerk/nextjs";
import { HomeIcon, UploadIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";

export function GallerySideNavContents({
  userId = undefined,
  className,
}: {
  userId?: string | undefined;
  className?: string;
}) {
  const currentPath = usePathname();

  const navLinks = [
    { label: "Gallery Home", href: "/gallery", icon: <HomeIcon /> },
  ];

  const authedNavLinks = [
    { label: "My Images", href: `/gallery/user/${userId}`, icon: <UserIcon /> },
    { label: "Upload Images", href: "/gallery/upload", icon: <UploadIcon /> },
  ];

  return (
    <nav className={cn("flex flex-col gap-2 text-nowrap p-4", className)}>
      {navLinks.map((link) => (
        <Button variant="ghost" className="justify-start" asChild>
          <Link
            href={link.href}
            className={`flex gap-2 font-semibold ${link.href === currentPath ? "" : "text-muted-foreground"}`}
          >
            {link.icon}
            {link.label}
          </Link>
        </Button>
      ))}
      {authedNavLinks.map((link) => (
        <Button
          variant="ghost"
          className="justify-start"
          asChild={userId != undefined}
          disabled={userId == undefined}
        >
          {userId ? (
            <Link
              href={link.href}
              className={`flex gap-2 font-semibold ${link.href === currentPath ? "" : "text-muted-foreground"}`}
            >
              {link.icon}
              {link.label}
            </Link>
          ) : (
            link.label
          )}
        </Button>
      ))}

      <SignedIn></SignedIn>
    </nav>
  );
}
