import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ProjectsList, ProjectsListItem } from "./projects-list";
import { FilmIcon, ImageIcon } from "lucide-react";

export function ProjectsCard() {
  const projectRecsDescription = `
	A media recommendation platform that allows users to share reccomendations for movies, tv shows, games.
	Where only the ratings and recommendations of those in their circle are counted.
	Built with NextJS, Postgres, and Drizzle
	`;

  return (
    <Card className="group relative rounded-xl border transition-all lg:col-span-2 lg:col-start-4 mb-2">
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <ProjectsList>
          <ProjectsListItem
            projectName="Project-Recs"
            projectImage={<FilmIcon size={128} />}
            projectDescription={projectRecsDescription}
            href="https://project-recs.vercel.app"
          />
          <ProjectsListItem
            projectName="Image Gallery"
            projectImage={<ImageIcon size={128} />}
            projectDescription={"a basic public image hosting service"}
            href="/gallery"
          />
        </ProjectsList>
      </CardContent>
    </Card>
  );
}
