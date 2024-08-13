"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { LogInIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "~/components/theme-toggle";
import { TypographyH3 } from "~/components/typography";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { NavSheet } from "~/components/jnd/navigation/NavSheet";
import { DynamicSideNav } from "~/components/jnd/navigation/DynamicSideNav";
import { usePathname } from "next/navigation";

export const validSideNavRoutes = ["/gallery"];

function getMatchedPath(
  pathname: string,
  validRoutes: string[],
): [boolean, string?] {
  for (const route of validRoutes) {
    if (pathname.includes(route)) {
      return [true, route];
    }
  }
  return [false];
}

export function GlobalTopNavContents({
  className,
  userId,
}: {
  className?: string;
  userId?: string;
}) {
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-grow justify-between", className)}>
      <div className="flex flex-grow items-center justify-start gap-4">
        {getMatchedPath(pathname, validSideNavRoutes)[0] && (
          <a className="md:hidden">
            <NavSheet
              buttonClassName="flex flex-grow bg-transparent"
              buttonChildren={<MenuIcon />}
              buttonSize={"icon"}
              buttonVariant={"outline"}
            >
              <DynamicSideNav userId={userId} />
            </NavSheet>
          </a>
        )}
        <Link href="/">
          <TypographyH3>
            <span className="">jn</span>
            <span className="text-primary">d</span>
          </TypographyH3>
        </Link>
      </div>
      <div className="flex flex-grow items-center justify-end gap-4">
        <ThemeToggle />
        <SignedOut>
          <Button size="icon" variant="outline">
            <SignInButton>
              <LogInIcon />
            </SignInButton>
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
