"use client";

import { cn } from "~/lib/utils";
import { Dialog, DialogOverlay, DialogContent } from "./ui/dialog";
import { useRouter } from "next/navigation";

export function Modal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  const handleOpenChange = () => {
    router.back();
  };
  return (
    <Dialog defaultOpen open onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className={cn(className, "")}>{children}</DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
