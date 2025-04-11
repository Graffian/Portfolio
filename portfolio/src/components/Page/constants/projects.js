import project1 from "../../../assets/project1.png";
import project2 from "../../../assets/project2.png";


export const projects = [
  {
    id: 1,
    title: "Customer Churn",
    description:"Helps businesses proactively retain customers by predicting churn using AI-driven insights through a user-friendly web app.",
    technologies: ["React", "Python", "FastApi"],
    image: project1,
    githubUrl: "https://github.com/Graffian/Customer-Churn",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Learn Sphere",
    description:
      "Empowers students to instantly hire tutors for full courses or specific concepts using an Uber-like platform, making personalized learning accessible and on-demand.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: project2,
    githubUrl: "https://github.com/Graffian/learn-sphere-hackjmi",
    liveUrl: "https://learn-sphere-pearl.vercel.app/",
  },
];
