import Link from "next/link";
import { TypographyH3, TypographyP } from "~/components/typography/typography";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

export function ProjectsList({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-flow-row grid-cols-1 gap-4 transition-all ">
      {children}
    </div>
  );
}

export function ProjectsListItem({
  className,
  projectName,
  projectImage,
  projectDescription,
  href,
}: {
  className?: string;
  projectName: string;
  projectImage?: React.ReactNode;
  projectDescription?: string;
  href: string;
}) {
  return (
    <Button
      variant="outline"
      className={cn(
        "flex h-max flex-grow flex-col items-center gap-2 px-4 py-2",
        className,
      )}
      asChild
    >
      <Link href={href}>
        {projectImage}
        <Separator />
        <TypographyH3 className="text-center uppercase ">
          {projectName}
        </TypographyH3>
        <TypographyP className="items-start text-wrap text-justify">
          {projectDescription}
        </TypographyP>
      </Link>
    </Button>
  );
}
