import project1 from "../../../assets/project1.png";
import project2 from "../../../assets/project2.png";
import project3 from "../../../assets/project3.png";
import project4 from "../../../assets/project4.png";


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
  {
    id: 3,
    title: "Emotion Recognition",
    description:
      "Emotion-Recog is an AI-powered web application designed to assist therapists by recognizing patient emotions in real-time through facial expression analysis. It features secure login for patients using credentials provided by their therapist",
    technologies: ["React", "FastAPI", "SQLITE3"],
    image: project3,
    githubUrl: "https://github.com/Graffian/Emotion-Recog",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "RakthVeer",
    description:
      "Rakthveer is an AI-powered blood donation platform focused on security, smart recommendations, and efficient donor management. It combines modern machine learning and computer vision to make blood donation easier, faster, and safer.",
    technologies: ["React", "FastAPI", "Keras" , "Tensorflow" , "numpy"],
    image: project4,
    githubUrl: "https://github.com/Graffian/RakthVeer",
    liveUrl: "#",
  },
];
