import {
  TypographyH1,
  TypographyH3,
  TypographyMuted,
  TypographyP,
} from "~/components/typography/typography";
import {
  HireMeHero,
  HeroButtons,
  HeroSkills,
  HeroSubtitle,
  HeroTitle,
} from "~/app/_components/person-hero";
import { Download, Film, ImageIcon, Mail } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { Separator } from "~/components/ui/separator";
import { ExperienceShowcase } from "./_components/_experience/experience-showcase";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { BackgroundGradient } from "~/components/animated-border";
import { Badge } from "~/components/ui/badge";
import Link from "next/link";
import { type Url } from "next/dist/shared/lib/router/router";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "C#",
    "Unity",
    "Unreal",
    "Git",
    "Rust",
    "Python",
  ];

  return (
    <main className="container grid h-full grid-cols-1 justify-stretch gap-4 overflow-auto p-4 lg:grid-cols-5 ">
      <div className="flex flex-grow flex-col gap-4 lg:col-span-3">
        <BackgroundGradient
          containerClassName="border rounded-xl"
          backgroundClassName="rounded-xl opacity-0 group-hover:opacity-80 transition-opacity"
        >
          <Card className="border-0">
            <CardHeader>
              <CardTitle>Jarred Norris</CardTitle>
              <TypographyMuted>
                Software Engineer, Web Designer, Game Developer
              </TypographyMuted>
              <div className="flex flex-wrap items-center gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} className="hover:bg-primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <TypographyP>
                Hi I&apos;m Jarred. I like finding creative solutions to complex
                problems. From crafting immersive virtual worlds in Unity to
                architecting scalable web applications in React.
              </TypographyP>
              <div className="flex items-center gap-4">
                <Button className="flex gap-2">
                  <Download />
                  CV
                </Button>
                <Button className="flex gap-2">
                  <Mail />
                  Contact
                </Button>
              </div>
              {/* <HireMeHero
                className=""
                heroTitle={<HeroTitle>Jarred Norris</HeroTitle>}
                heroSubtitle={
                  <HeroSubtitle>
                    Software Engineer, Web Designer, Game Developer
                  </HeroSubtitle>
                }
                heroSkills={
                  <HeroSkills>
                    {skills.map((skill) => (
                      <Badge key={skill} className="hover:bg-primary">
                        {skill}
                      </Badge>
                    ))}
                  </HeroSkills>
                }
                heroButtons={
                  <HeroButtons>
                    <Button className="flex gap-2">
                      <Download />
                      CV
                    </Button>
                    <Button className="flex gap-2">
                      <Mail />
                      Contact
                    </Button>
                  </HeroButtons>
                }
              >
                <TypographyP>
                  Hi I&apos;m Jarred. I like finding creative solutions to
                  complex problems. From crafting immersive virtual worlds in
                  Unity to architecting scalable web applications in React.
                </TypographyP>
              </HireMeHero> */}
            </CardContent>
          </Card>
        </BackgroundGradient>

        <Card className="flex-grow  ">
          <ExperienceShowcase />
        </Card>
      </div>
      <Card className="rounded-xl border transition-all lg:col-span-2 lg:col-start-4 lg:overflow-auto">
        <ProjectsList></ProjectsList>
      </Card>
    </main>
  );
}

function ProjectsList() {
  const projectRecsDescription = `
	A media recommendation platform that allows users to share reccomendations for movies, tv shows, games.
	Where only the ratings and recommendations of those in their circle are counted.
	Built with NextJS, Postgres, and Drizzle
	`;
  return (
    <div className="flex h-full flex-grow flex-col gap-4 transition-all ">
      <TypographyH1>PROJECTS</TypographyH1>
      <div className="grid grid-flow-row grid-cols-1 gap-4 transition-all ">
        <ProjectsListItem
          projectName="Project-Recs"
          projectImage={<Film size={128} />}
          projectDescription={projectRecsDescription}
          href="https://project-recs.vercel.app"
        />
        <ProjectsListItem
          projectName="Image Gallery"
          projectImage={<ImageIcon size={128} />}
          projectDescription={"a basic public image hosting service"}
          href="/gallery"
        />
      </div>
    </div>
  );
}

function ProjectsListItem({
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
  href: Url;
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
