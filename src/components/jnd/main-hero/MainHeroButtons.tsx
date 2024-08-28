import React from "react";
import { DownloadIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { EmailButton } from "~/components/jnd/main-hero/EmailButton";

export function CvButton() {
  return (
    <Button className="flex gap-2" size="sm" asChild>
      <Link href="/cv.pdf" download={true} target="_blank">
        CV
        <DownloadIcon />
      </Link>
    </Button>
  );
}

export function LinkedInButton() {
  return (
    <Button className="flex gap-2" size="icon_xs" asChild>
      <Link
        href="https://www.linkedin.com/in/jarred-norris/"
        download={true}
        target="_blank"
      >
        <LinkedinIcon />
      </Link>
    </Button>
  );
}

export function GithubButton() {
  return (
    <Button className="flex gap-2" size="icon_xs" asChild>
      <Link
        href="https://github.com/jarrednorrisdev/jarrednorrisdotdev"
        download={true}
        target="_blank"
      >
        <GithubIcon />
      </Link>
    </Button>
  );
}

export function MainHeroButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <EmailButton />
      <CvButton />
      <LinkedInButton />
      <GithubButton />
    </div>
  );
}
