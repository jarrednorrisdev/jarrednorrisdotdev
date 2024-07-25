import { MainHero } from "~/app/_components/main-hero";
import { BackgroundGradient } from "~/components/animated-border";
import { ExperienceCard } from "./_components/_experience/experience-card";
import { ProjectsCard } from "./_components/_projects/projects-card";
import { BorderBeam } from "~/components/magicui/border-beam";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="container grid h-full grid-cols-1 justify-stretch gap-4 p-4 lg:grid-cols-5 ">
      <div className="flex flex-grow flex-col gap-4 lg:col-span-3">
        <MainHero />
        
        <ExperienceCard />
      </div>
      <ProjectsCard />
    </main>
  );
}
