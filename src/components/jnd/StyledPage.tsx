import { cn } from "~/lib/utils";

export async function StyledPage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("max-w-full", className)}>{children}</div>;
}
