import { type TimelineEntry } from "~/components/jnd/experience";

export const educationTimelineData: TimelineEntry[] = [
  {
    title: "Games Computing",
    location: "University of Lincoln",
    date: "2018 - 2021",
    extra: "BSc (Hons)",
    content: `
		I studied Games Computing at the University of Lincoln, where I developed a strong foundation in computer science and software engineering. I gained experience in game development, artificial intelligence, computer graphics, and web development. I also developed a range of technical skills, including programming, software design, and project management.`,
    badges: [
      { name: "Game Dev", variant: "primaryNoHover" },
      { name: "3D Graphics", variant: "primaryNoHover" },
      { name: "Virtual Reality", variant: "primaryNoHover" },
      { name: "Web Dev", variant: "tertiaryNoHover" },
      { name: "Project Management", variant: "secondaryNoHover" },
    ],
  },
  {
    title: "Politics and International Relations",
    location: "University of Lincoln",
    date: "2017 - 2018",
    extra: "CertHE",
    content: `
    I studied Politics and International Relations at the University of Lincoln, where I aquired a range of skills in research, analysis, and communication.`,
    badges: [
      { name: "Research", variant: "secondaryNoHover" },
      { name: "Analysis", variant: "secondaryNoHover" },
      { name: "Communication", variant: "secondaryNoHover" },
    ],
  },
  {
    title: "A-Levels",
    location: "Presdales Academy",
    date: "2015 - 2017",
    content: `
    I studied Mathematics, Biology, and Politics at Presdales Academy, I gained experience in problem solving, critical thinking, and research.`,
    badges: [
      { name: "Mathematics", variant: "secondaryNoHover" },
      { name: "Biology", variant: "secondaryNoHover" },
      { name: "Politics", variant: "secondaryNoHover" },
    ],
  },
];
