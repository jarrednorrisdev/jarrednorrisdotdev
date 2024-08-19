"use client";

import { MenuIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "~/components/theme-toggle";
import { TypographyH3 } from "~/components/typography";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { NavSheet } from "~/components/jnd/navigation/NavSheet";
import { DynamicSideNav } from "~/components/jnd/navigation/DynamicSideNav";
import { usePathname } from "next/navigation";
import { getCurrentUserId } from "~/server/auth/live";
import { SignOutForm } from "~/components/auth/signout-form";

export const validSideNavRoutes = ["/gallery"];

function getMatchedPath(
  pathname: string,
  validRoutes: string[],
): [boolean, string?] {
  for (const route of validRoutes) {
    if (pathname.includes(route)) {
      return [true, route];
    }
  }
  return [false];
}

export function GlobalTopNavContents({
  userId,
  className,
}: {
  userId?: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-grow justify-between", className)}>
      <div className="flex flex-grow items-center justify-start gap-4">
        {getMatchedPath(pathname, validSideNavRoutes)[0] && (
          <a className="lg:hidden">
            <NavSheet
              buttonChildren={<MenuIcon />}
              buttonSize="icon"
              buttonVariant="backgroundSecondary"
            >
              <DynamicSideNav userId={userId} />
            </NavSheet>
          </a>
        )}
        <Link href="/">
          <TypographyH3>
            <span className="">jn</span>
            <span className="text-primary">d</span>
          </TypographyH3>
        </Link>
      </div>
      <div className="flex flex-grow items-center justify-end gap-4">
        <ThemeToggle />
				{!userId && <Button asChild variant="outline">
					<Link className="flex flex-row items-center gap-2" href="/signin">
						<p>Sign In</p>
						<UserIcon className="text-primary" />
					</Link>
				</Button>}
        {userId && <SignOutForm />}
      </div>
    </div>
  );
}
