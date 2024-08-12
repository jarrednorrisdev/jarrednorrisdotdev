import { cn } from "~/lib/utils";

export default async function StyledPage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-grow flex-col overflow-y-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
