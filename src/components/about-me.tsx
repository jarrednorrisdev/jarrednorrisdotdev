import Image from "next/image";
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

function MainHeroText() {
  return (
    <div>
      <div className="mx-auto w-full max-w-lg">
        <p>Software Engineer, Web Designer, Game Developer</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex items-center gap-4 max-[479px]:flex-wrap">
      <Button variant={"outline"}>Experience</Button>

      <Button variant={"outline"}>
        <Download className="mr-2 h-4 w-4" />
        CV
      </Button>
    </div>
  );
}

export default function AboutMe({}: Props) {
  return (
    <>
      <div>
        <Image
          src="/images/portrait.jpg"
          width={128}
          height={128}
          alt="Failed to retreive image of Jarred Norris"
          className="inline-block max-w-full rounded-lg"
        />
      </div>
      <div className="flex flex-grow  flex-col  items-start  gap-4">
        <div className="flex flex-col ">
          <div>
            <h1 className="inline scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl ">
              About Me
            </h1>
          </div>
          <MainHeroText></MainHeroText>
        </div>
        <Buttons />
      </div>
    </>
  );
}
