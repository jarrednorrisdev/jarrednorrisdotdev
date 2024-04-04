"use client";

import React, { use } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

type Props = {};

export default function NavMenu({}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          <span className="sr-only">Site Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => {}}>Home</DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>Settings</DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>About the Site</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
