import React from "react";
import { cn } from "~/lib/utils";
import { FilmIcon, ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { TypographyH3, TypographyP } from "~/components/typography";
import { ProjectsListItem } from "~/components/projects/ProjectsList";

export function ProjectsCard({ className }: { className?: string }) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <Carousel className="flex h-full flex-grow items-center justify-center">
          <CarouselPrevious />
          <CarouselContent className="flex h-full flex-grow">
            <JNDGalleryCarouselItem />
            <ProjectRecsCarouselItem />
          </CarouselContent>

          <CarouselNext className="flex" />
        </Carousel>
      </CardContent>
    </Card>
  );
}

function JNDGalleryCarouselItem() {
  return (
    <CarouselItem className="flex flex-grow flex-col">
      <ProjectsListItem
        projectTitle={
          <TypographyH3 className="text-center">jnd-gallery</TypographyH3>
        }
        projectImage={<ImageIcon size={64} className="text-primary" />}
        projectDescription={"a basic public image hosting service"}
        href="/gallery"
      />
    </CarouselItem>
  );
}

function ProjectRecsCarouselItem() {
  return (
    <CarouselItem>
      <ProjectsListItem
        projectTitle={
          <TypographyH3 className="text-center">project-recs</TypographyH3>
        }
        projectImage={<FilmIcon size={64} className="text-primary" />}
        projectDescription={
          "A social media style review and reccomendation platform."
        }
        href="https://project-recs.vercel.app/"
        disabled
      />
      <TypographyP className="select-none text-center text-primary">
        Coming Soon
      </TypographyP>
    </CarouselItem>
  );
}
