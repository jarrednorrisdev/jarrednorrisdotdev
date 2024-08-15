import { type TimelineEntry } from "~/components/jnd/experience";

export const workTimelineData: TimelineEntry[] = [
  {
    title: "Full-Stack Web Developer",
    location: "Megasets LTD",
    date: "2023",
    content: `
		In 2023 I transitioned into a Web Development role at Megasets and took over responsibility of the customer platform that empowered users to customize their unique configurations for data set generation.

		This included working with technologies such as React, Gatsby and Chakra UI, and implementing a wide range of features; page routing, complex data manipulation, front-end to back-end interoperability and much more.
		
		I later championed the transition of the platform to NextJS, which resulted in a significant performance boost and opened up new possibilities for the platform. Further contributions include building a custom sensor editor with Three.js and a custom map view with Leaflet.js.`,
    badges: [
      { name: "React", variant: "tertiaryNoHover" },
      { name: "NextJS", variant: "tertiaryNoHover" },
      { name: "Chakra UI", variant: "tertiaryNoHover" },
      { name: "Gatsby", variant: "tertiaryNoHover" },
      { name: "Leaflet.js", variant: "tertiaryNoHover" },
      { name: "Three.js", variant: "primaryNoHover" },
    ],
  },
  {
    title: "Simulation Developer",
    location: "Megasets LTD",
    date: "2022",
    content: `
		As a Simulation Developer at Megasets, I helped develop a cutting-edge traffic simulation and rendering pipeline used to generate various types of synthetic data.
		
		Leveraging my expertise in Unity Engine, I contributed to the creation of a dynamically generated world environment through which synthetic data can be captured in configurable simulations.

		Furthermore, I helped develop the simulation runner which could produce frame data from a varied range of virtual sensors. This involved harnessing Unity's scriptable render pipelines to generate visual data, utilizing Unity animation tools to create realistic agent behaviour, and ensuring a seamless user experience within our tools.`,
    badges: [
      { name: "Unity Engine", variant: "primaryNoHover" },
      { name: "C#", variant: "primaryNoHover" },
      { name: "Python", variant: "primaryNoHover" },
    ],
  },
  {
    title: "Admin and Marketing Assistant",
    location: "Robson Analytics LTD",
    date: "2021",
    content: `
		As an admin and marketing assistant at Robson Analytics, I was responsible for managing the company's social media presence - creating engaging content, and developing marketing strategies to increase brand awareness. I also assisted with administrative tasks such as data entry.`,
    badges: [
      { name: "Social Media", variant: "secondaryNoHover" },
      { name: "Marketing", variant: "secondaryNoHover" },
      { name: "Content Creation", variant: "secondaryNoHover" },
      { name: "Data Entry", variant: "secondaryNoHover" },
    ],
  },
];
