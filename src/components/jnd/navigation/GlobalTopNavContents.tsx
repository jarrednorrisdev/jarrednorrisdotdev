import { MenuIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "~/components/theme-toggle";
import { TypographyH3 } from "~/components/typography";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { NavSheet } from "~/components/jnd/navigation/NavSheet";
import { DynamicSideNav } from "~/components/jnd/navigation/DynamicSideNav";
import { SignOutForm } from "~/components/auth/signout-form";
import { Effect } from "effect";
import { getCurrentUserId } from "~/server/auth/live";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";



export async function GlobalTopNavContents({
  className,
}: {
  className?: string;
}) {
  const userId = await Effect.runPromise(getCurrentUserId());
  return (
    <div className={cn("flex flex-grow justify-between", className)}>
      <div className="flex flex-grow items-center justify-start gap-4">
        <NavSheet
          buttonChildren={<MenuIcon />}
          buttonSize="icon"
          buttonVariant="outline"
          buttonClassName="lg:hidden"
        >
          <DynamicSideNav userId={userId} />
        </NavSheet>

        <Link href="/">
          <TypographyH3>
            <span className="">jn</span>
            <span className="text-primary">d</span>
          </TypographyH3>
        </Link>
      </div>
      <div className="flex flex-grow items-center justify-end gap-4">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <UserIcon className="text-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {userId ? (
              <SignOutForm />
            ) : (
              <>
                <DropdownMenuItem>
                  <Link
                    className="flex flex-row items-center gap-2"
                    href="/signin"
                  >
                    <p>Sign In</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="flex flex-row items-center gap-2"
                    href="/signup"
                  >
                    <p>Sign Up</p>
                  </Link>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
