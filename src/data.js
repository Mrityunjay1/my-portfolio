import p1 from "./assets/project-1.png";
import p2 from "./assets/project-2.png";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-4.png";
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
    url: "https://creative-halva-8e9695.netlify.app/",
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
    name: "Tic-Tac-Toe",
    image: p4,
    tags: ["mobile-app"],
    url: "https://tic-tac-toe-js123.netlify.app/",
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
