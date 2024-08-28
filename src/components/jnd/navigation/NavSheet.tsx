import React from "react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

export function NavSheet({
  children,
  buttonVariant,
  buttonChildren,
  contentClassName,
  buttonClassName,
  side = "left",
  buttonSize = "icon",
}: {
  children: React.ReactNode;
  buttonChildren?: React.ReactNode;
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
  buttonSize?: React.ComponentProps<typeof Button>["size"];
  buttonClassName?: React.ComponentProps<typeof Button>["className"];
  contentClassName?: React.ComponentProps<typeof SheetContent>["className"];
  side?: React.ComponentProps<typeof SheetContent>["side"];
}) {
  return (
    <Sheet>
      <Button
        className={cn("flex", buttonClassName)}
        size={buttonSize}
        variant={buttonVariant}
        asChild
      >
        <SheetTrigger>{buttonChildren}</SheetTrigger>
      </Button>

      <SheetContent
        side={side}
				className={cn("flex flex-col w-min px-4 py-2 pr-8", contentClassName)}
				
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
