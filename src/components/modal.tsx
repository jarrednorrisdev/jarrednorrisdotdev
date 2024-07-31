"use client";

import { cn } from "~/lib/utils";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogOverlay } from "~/components/ui/dialog";

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
