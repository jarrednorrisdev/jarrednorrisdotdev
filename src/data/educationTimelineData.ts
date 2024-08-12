import { TimelineEntry } from "~/components/jnd/experience";

export const educationTimelineData: TimelineEntry[] = [
  {
    title: "Games Computing",
    location: "University of Lincoln",
    date: "2018 - 2021",
    extra: "BSc (Hons)",
    content: `
		I studied Games Computing at the University of Lincoln, where I developed a strong foundation in computer science and software engineering.
		I gained experience in game development, artificial intelligence, and computer graphics.
		I also developed a range of technical skills, including programming, software design, and project management.`,
  },
  {
    title: "Politics and International Relations",
    location: "University of Lincoln",
    date: "2017 - 2018",
    extra: "CertHE",
    content: `
    I studied Politics and International Relations at the University of Lincoln,
		where I aquired a range of skills in research, analysis, and communication.`,
  },
  {
    title: "A-Levels",
    location: "Presdales Academy",
    date: "2015 - 2017",
    content: `
    I studied Mathematics, Biology, and Politics at Presdales Academy,
		I gained experience in problem solving, critical thinking, and research.`,
    badges: [
      { name: "Mathematics", variant: "secondaryNoHover" },
      { name: "Biology", variant: "secondaryNoHover" },
      { name: "Politics", variant: "secondaryNoHover" },
    ],
  },
];
