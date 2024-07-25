import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ExperienceShowcase } from "./experience-showcase";
import { BorderBeam } from "~/components/magicui/border-beam";

export function ExperienceCard() {
  return (
    <Card className="group relative flex-grow  ">
      <BorderBeam className="opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <ExperienceShowcase />
      </CardContent>
    </Card>
  );
}
