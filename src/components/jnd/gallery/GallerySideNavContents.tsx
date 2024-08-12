"use client";

import { HomeIcon, UploadIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";

import { cn } from "~/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

interface NavLink {
  label: string;
  href: string;
  icon: JSX.Element;
  requiresAuth?: boolean;
}

export function GallerySideNavContents({
  userId = undefined,
  className,
}: {
  userId?: string | undefined;
  className?: string;
}) {
  const currentPath = usePathname();

  const navLinks: NavLink[] = [
    {
      label: "Gallery Home",
      href: "/gallery",
      icon: <HomeIcon />,
      requiresAuth: false,
    },
    {
      label: "My Images",
      href: `/gallery/user/${userId}`,
      icon: <UserIcon />,
      requiresAuth: true,
    },
    {
      label: "Upload Images",
      href: "/gallery/upload",
      icon: <UploadIcon />,
      requiresAuth: true,
    },
  ];

  return (
    <nav className={cn("flex flex-col gap-2 text-nowrap p-4", className)}>
      {navLinks.map((link) =>
        userId ?? !link.requiresAuth ? (
          <Button
            key={link.label}
            variant="ghost"
            className="flex justify-start gap-2"
            asChild
          >
            <Link
              href={link.href}
              className={
                currentPath == link.href
                  ? "flex gap-2 font-semibold text-primary"
                  : "flex gap-2 font-semibold text-muted-foreground"
              }
            >
              {link.icon}
              {link.label}
            </Link>
          </Button>
        ) : (
          <TooltipProvider key={link.label}>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="ghost"
                  className="flex justify-start gap-2"
                  disabled
                >
                  {link.icon}
                  {link.label}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary">
                <p className="text-primary">Please sign in to access</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
      )}
    </nav>
  );
}
