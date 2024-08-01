import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import { FilmIcon, ImageIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import {
  ProjectsList,
  ProjectsListItem,
} from "~/components/projects/projects-list";
import { TypographyH3 } from "~/components/typography/typography";

export function ProjectsCard({ className }: { className?: string }) {
  // const projectRecsDescription = `
  // A media recommendation platform that allows users to share reccomendations for movies, tv shows, games.
  // Where only the ratings and recommendations of those in their circle are counted.
  // Built with NextJS, Postgres, and Drizzle
  // `;

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <ProjectsList>
          {/* <ProjectsListItem
            projectTitle={
              <TypographyH3 className="text-center">cherry-recs</TypographyH3>
            }
            projectImage={<FilmIcon size={128} className="text-primary" />}
            projectDescription={projectRecsDescription}
            href="https://project-recs.vercel.app"
          /> */}
          <ProjectsListItem
            projectTitle={
              <TypographyH3 className="text-center">jnd-gallery</TypographyH3>
            }
            projectImage={<ImageIcon size={128} className="text-primary" />}
            projectDescription={"a basic public image hosting service"}
            href="/gallery"
          />
        </ProjectsList>
      </CardContent>
    </Card>
  );
}
