import React from "react";
import { DownloadIcon, MailIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export function MainHeroButtons() {
  return (
    <div className="flex flex-grow items-end gap-4">
      <Button className="flex gap-2" asChild>
        <Link href="/cv.pdf" download={true} target="_blank">
          <DownloadIcon />
          CV
        </Link>
      </Button>
      <Button className="flex gap-2" asChild>
        <a
          href="mailto:jarred.norris1@gmail.com"
          download={true}
          target="_blank"
        >
          <MailIcon />
          Contact
        </a>
      </Button>
    </div>
  );
}
