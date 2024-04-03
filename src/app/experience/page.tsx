import React, { useState } from "react";
import { BriefcaseIcon, Gamepad, PersonStanding } from "lucide-react";
import FlexWidget from "@/components/flex-widget";
import MainHero from "@/components/hero/main-hero";
import { Button } from "@/components/ui/button";

export default function Experience() {
  return (
    <main className="flex flex-col items-center p-12">
      <div className="flex flex-grow flex-wrap gap-4">
        <h2>Experience</h2>\
        <p>
          As a Simulation Developer at Megasets, I played a vital role in the
          development and rendering of a cutting-edge traffic simulation
          pipeline used to generate various flavours of synthetic data.
          Leveraging my expertise in Unity Engine, I contributed to the creation
          of a dynamic world environment in which vehicle simulations can be
          run, capturing frames from a diverse range of virtual sensors. This
          involved harnessing the power of Unity&apos;s graphics pipeline,
          animation tools, and ensuring a seamless user experience.
        </p>
      </div>
    </main>
  );
}
