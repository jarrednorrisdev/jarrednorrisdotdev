import { cn } from "~/lib/utils";

export async function NavBarTop({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <nav
      className={cn(
        "sticky z-50 flex items-center border-b  px-4 py-2 transition-all duration-300",
        className,
      )}
    >
      {children}
    </nav>
  );
}
