import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { cn } from "~/lib/utils";

export type BreadcrumbLink = { label: string; href?: string };

export function DynamicBreadcrumb({
  breadcrumbLinks,
  className,
}: {
  breadcrumbLinks: BreadcrumbLink[];
  className?: string;
}) {
  return (
    breadcrumbLinks && (
      <Breadcrumb>
        <BreadcrumbList
          className={cn("flex min-w-0 flex-nowrap text-nowrap", className)}
        >
          {breadcrumbLinks.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem className="truncate">
                {item.href ? (
                  <BreadcrumbLink href={item.href} className="hover:underline">
                    {item.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage
                    className={cn(
                      "max-w-40 truncate",
                      index === breadcrumbLinks.length - 1
                        ? "text-foreground"
                        : "text-primary",
                    )}
                  >
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < breadcrumbLinks.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    )
  );
}
