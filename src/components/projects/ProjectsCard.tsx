import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import { FilmIcon, ImageIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { ProjectsListItem } from "~/components/projects/ProjectsList";
import { TypographyH3 } from "~/components/typography";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

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
      <CardContent className="flex justify-center">
        <Carousel className="max-w-[75%]">
          <CarouselContent>
            <CarouselItem>
              <ProjectsListItem
                projectTitle={
                  <TypographyH3 className="text-center">
                    jnd-gallery
                  </TypographyH3>
                }
                projectImage={<ImageIcon size={64} className="text-primary" />}
                projectDescription={"a basic public image hosting service"}
                href="/gallery"
              />
            </CarouselItem>
            <CarouselItem>
              <ProjectsListItem
                projectTitle={
                  <TypographyH3 className="text-center">
                    project-recs
                  </TypographyH3>
                }
                projectImage={<FilmIcon size={64} className="text-primary" />}
                projectDescription={`
									A media recommendation platform where only the recommendations of those in your circle matter.
									`}
								href="https://project-recs.vercel.app/"
								disabled
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
}
