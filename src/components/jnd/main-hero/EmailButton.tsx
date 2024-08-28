"use client";

import { ClipboardIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";

export function EmailButton() {
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("jarred.norris1@gmail.com")
      .then(() => {
        toast({
          title: "Email copied!",
          description: "The email address has been copied to your clipboard.",
        });
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
        toast({
          title: "Copy failed",
          description:
            "There was an error copying the email. Please try again.",
          variant: "destructive",
        });
      });
  };

  return (
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
        onClick={handleCopyEmail}
      >
        <ClipboardIcon className="size-4" />
      </Button>
    </div>
  );
}
