import { BackgroundBeams } from "~/components/background-beams";
import MainHero from "~/components/hero/main-hero";
import { PreviousExperienceShowcase } from "./_components/PreviousExperienceShowcase";
import { ImageGallery } from "./gallery/_components/ImageGallery";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="flex flex-grow flex-wrap gap-4 p-4 md:container md:mx-auto md:overflow-auto ">
      <BackgroundBeams />
      <MainHero />
      <PreviousExperienceShowcase />
    </main>
  );
}
