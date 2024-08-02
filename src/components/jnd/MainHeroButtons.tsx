import React from "react";
import { DownloadIcon, MailIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { cn } from "~/lib/utils";

export function MainHeroButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-2", className)}>
      <Button className="flex gap-2" size="sm" asChild>
        <a
          href="mailto:jarred.norris1@gmail.com"
          download={true}
          target="_blank"
        >
          <MailIcon />
          Contact
        </a>
      </Button>
      <Button className="flex gap-2" size="sm" asChild>
        <Link href="/cv.pdf" download={true} target="_blank">
          <DownloadIcon />
          CV
        </Link>
      </Button>
    </div>
  );
}
