import p1 from "./assets/project-7.png";
import p2 from "./assets/project-2.png";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-8.png";
import p5 from "./assets/project-5.png";
import p6 from "./assets/project-6.png";

export const filters = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Dashboard",
    id: "dashboard",
  },
  {
    name: "Website",
    id: "website",
  },
];

export const projects = [
  {
    name: "Ecommerce Using Redux-Toolkit",
    image: p1,
    tags: ["dashboard", "mobile-app"],
    url: "https://spiffy-hamster-4a2c84.netlify.app/",
  },
  {
    name: "Drag n Drop",
    image: p2,
    tags: ["dashboard", "website"],
    url: "https://dnd-kanban.netlify.app/",
  },
  {
    name: "Tesla UI Clone",
    image: p3,
    tags: ["mobile-app"],
    url: "https://tsla-ui.netlify.app/",
  },
  {
    name: "Feeds Clone",
    image: p4,
    tags: ["mobile-app","website"],
    url: "https://feeds-app-three.vercel.app/",
  },
];

export const achievements = [
  {
    id: 1,
    year: 8,
    description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
  },
  {
    id: 2,
    year: 3.5,
    description: "YEARS OF<br />EXPERIENCE",
  },
  {
    id: 3,
    year: 7,
    description: "TECHNOLOGIES",
  },
];
