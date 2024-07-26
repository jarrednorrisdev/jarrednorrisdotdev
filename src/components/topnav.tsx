"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggle } from "~/components/theme-toggle";
import { TypographyH3 } from "~/components/typography/typography";
import { cn } from "~/lib/utils";

export default function TopNav({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        " flex items-center border-b transition-all duration-300 ",
        className,
      )}
    >
      <div className="container flex justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <TypographyH3>
              <span>jarrednorris</span>
              <span className="text-primary">dev</span>
            </TypographyH3>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
