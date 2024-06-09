"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "~/components/theme-toggle";
import { cn } from "~/lib/utils";

export default function TopNav({ className }: { className?: string }) {


  return (
    <nav className={cn("border-b transition-all duration-300 ", className)}>
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className="flex items-center gap-4">
          <a href="/">Home</a>
          <a href="/gallery">Image Gallery</a>
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
