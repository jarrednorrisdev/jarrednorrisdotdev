import React from "react";
import {
  ClipboardIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { cn } from "~/lib/utils";

export function MainHeroButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <div className="flex">
        <Button
          className="flex gap-2 rounded-r-none"
          size="sm"
          variant="default"
          asChild
        >
          <a
            href="mailto:jarred.norris1@gmail.com"
            download={true}
            target="_blank"
          >
            Email
          </a>
        </Button>
        <Button
          className="flex gap-2 rounded-l-none border-l-4"
          size="icon_xs"
          variant="default"
        >
          <ClipboardIcon className="size-4" />
        </Button>
      </div>

      <Button className="flex gap-2" size="sm" asChild>
        <Link href="/cv.pdf" download={true} target="_blank">
          CV
          <DownloadIcon />
        </Link>
      </Button>
      <div className="flex gap-2">
        <Button className="flex gap-2" size="icon_xs" asChild>
          <Link
            href="https://www.linkedin.com/in/jarred-norris/"
            download={true}
            target="_blank"
          >
            <LinkedinIcon />
          </Link>
        </Button>
        <Button className="flex gap-2" size="icon_xs" asChild>
          <Link
            href="https://github.com/jarrednorrisdev/jarrednorrisdotdev"
            download={true}
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
}
