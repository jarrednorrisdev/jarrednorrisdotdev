import React from "react";
import { DownloadIcon, MailIcon } from "lucide-react";
import {
  TypographyMuted,
  TypographyP,
} from "~/components/typography/typography";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { BorderBeam } from "~/components/magicui/border-beam";

export function MainHero() {
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
    <Card className="group relative">
      <BorderBeam className="opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
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
            <DownloadIcon />
            CV
          </Button>
          <Button className="flex gap-2">
            <MailIcon />
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
