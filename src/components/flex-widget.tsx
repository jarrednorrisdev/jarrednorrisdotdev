import Image from "next/image";
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function FlexWidget({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-grow flex-wrap gap-8 rounded-lg border p-8 ",
        className
      )}
    >
      {children}
    </div>
  );
}
