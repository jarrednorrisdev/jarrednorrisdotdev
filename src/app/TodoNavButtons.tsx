import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function TodoNavButtons({
  className,
  links,
}: {
  className?: string;
  links: { label: string; icon: React.ReactNode; href: string }[];
}) {
  return (
    <div className={cn("flex flex-grow flex-wrap gap-4", className)}>
      {links.map((link, index) => (
        <Button
          asChild
          variant="secondary"
          size="lg"
          className={cn("flex flex-grow gap-2 p-8 text-center")}
          key={link.label}
        >
          <Link
            href={link.href} // className={cn(
          >
            <h2>{link.label}</h2>
            {link.icon}
          </Link>
        </Button>
      ))}
    </div>
  );
}
