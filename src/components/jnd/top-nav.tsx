"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function TopNav({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 flex items-stretch justify-stretch border-b transition-all duration-300",
        className,
      )}
    >
      <div className="container flex justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            {/* <span>jarrednorris</span>
              <span className="text-primary">dev</span> */}
            <span className="">jn</span>
            <span className="text-primary">d</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
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
    </nav>
  );
}
