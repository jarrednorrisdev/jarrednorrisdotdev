import { cn } from "~/lib/utils";

export async function StyledPage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-grow flex-col overflow-y-scroll", className)}>
      {children}
    </div>
  );
}
