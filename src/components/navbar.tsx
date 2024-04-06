

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import NavMenu from "./nav-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Ban, StopCircle } from "lucide-react";

export default async function Navbar({ className }: { className?: string }) {
  return (
    <nav className={cn("border-b transition-all duration-300 ", className)}>
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className="flex items-center gap-8">
          <h1 className="transition-hover cursor-pointer font-semibold hover:opacity-75">
            <Link href="/">
              <h1 className="inline text-2xl font-extrabold tracking-tight lg:text-2xl ">
                jarrednorris
              </h1>
              {/* <h1 className="text-2xl lg:text-2xl font-extrabold tracking-tight inline text-slate-500">
							.
						</h1> */}
              <h1 className=" inline text-2xl font-extrabold tracking-tight text-primary lg:text-2xl">
                dev
              </h1>
            </Link>
          </h1>
          <div className="flex">
            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline">Projects</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="flex gap-2 ">
                    <Ban className="text-primary" />
                    <p>Under Construction</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider> */}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* <NavMenu /> */}
        </div>
      </div>
    </nav>
  );
}
