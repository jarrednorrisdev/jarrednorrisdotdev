import React from "react";
import { cn } from "~/lib/utils";
import { MenuIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

export function GalleryNavSheet({
  children,
  contentClassName,
  buttonClassName,
}: {
  children: React.ReactNode;
  contentClassName?: React.ComponentProps<"div">["className"];
  buttonClassName?: React.ComponentProps<"div">["className"];
}) {
  return (
    <Sheet>
      <Button
        className={cn("flex", buttonClassName)}
        size="icon_xs"
        variant="ghost"
        asChild
      >
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
      </Button>

      <SheetContent side="left" className={cn("", contentClassName)}>
        {children}
      </SheetContent>
    </Sheet>
  );
}
