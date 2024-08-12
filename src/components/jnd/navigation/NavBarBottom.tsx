import { cn } from "~/lib/utils";

export async function NavBarBottom({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <nav
      className={cn(
        "sticky bottom-0 z-50 flex items-center border-b bg-card px-4 py-2 transition-all duration-300",
        className,
      )}
    >
      {children}
    </nav>
  );
}
