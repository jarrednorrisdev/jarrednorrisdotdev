import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function TodoNavButtons(props) {
  return (
    <div className="flex flex-grow flex-col flex-wrap gap-4">
      {props.sectionLinks.map((link, index) => (
        <Button
          asChild
          variant="outline"
          className={cn("flex flex-grow gap-2 p-12 text-center")}
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
