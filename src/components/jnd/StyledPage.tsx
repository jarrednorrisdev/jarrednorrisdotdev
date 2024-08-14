import { cn } from "~/lib/utils";

export async function StyledPage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex flex-col max-w-full h-full", className)}>{children}</div>;
}
