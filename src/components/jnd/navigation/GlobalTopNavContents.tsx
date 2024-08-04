"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "~/components/theme-toggle";
import { TypographyH3 } from "~/components/typography/typography";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export function GlobalTopNavContents({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-grow justify-between", className)}>
      <div className="flex flex-grow items-center justify-start gap-4">
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
