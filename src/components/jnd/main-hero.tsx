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
import Link from "next/link";
import { cn } from "~/lib/utils";

export function MainHero({ className }: { className?: string }) {
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
    <Card className={cn("group relative", className)}>
      <BorderBeam
        className="opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
        duration={3}
      />
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
          <Button className="flex gap-2" asChild>
            <Link href="/cv.pdf" download={true} target="_blank">
              <DownloadIcon />
              CV
            </Link>
          </Button>
          <Button className="flex gap-2" asChild>
            <a
              href="mailto:jarred.norris1@gmail.com"
              download={true}
              target="_blank"
            >
              <MailIcon />
              Contact
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
