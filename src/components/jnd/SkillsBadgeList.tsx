import React from "react";
import { TypographyMuted } from "~/components/typography/typography";
import { Badge } from "~/components/ui/badge";

export function SkillsBadgeList() {
  const frameworks = {
    webdev: ["React", "Next.js", "TailwindCSS", "Effect"],
    other: ["Unity", "Unreal", "Godot", "Bevy"],
  };
  const languages = {
    webdev: ["Javascript", "Typescript", "HTML", "CSS"],
    other: ["C#", "Java", "Python", "Rust", "C++"],
  };
  const badgeListClasses =
    "flex flex-grow flex-wrap items-center  gap-2";

  return (
    <div className="flex flex-shrink-0 flex-grow flex-col gap-2">
      <TypographyMuted>Languages:</TypographyMuted>
      <div className={badgeListClasses}>
        <div className="flex justify-between gap-2">
          {languages.other.map((skill) => (
            <Badge key={skill} className="bg-primary hover:bg-primary">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between gap-2">
          {languages.webdev.map((skill) => (
            <Badge key={skill} className="bg-tertiary hover:bg-tertiary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <TypographyMuted>Technologies:</TypographyMuted>
      <div className={badgeListClasses}>
        <div className="flex justify-between gap-2">
          {frameworks.other.map((skill) => (
            <Badge key={skill} className="bg-primary hover:bg-primary">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between gap-2">
          {frameworks.webdev.map((skill) => (
            <Badge key={skill} className="bg-tertiary hover:bg-tertiary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
