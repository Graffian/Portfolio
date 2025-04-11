import React from "react";
import {
  SiJavascript,
  SiPython,
  SiJupyter,
  SiNodedotjs,
  SiPostgresql,
  SiFirebase,
  SiReact,
  SiFastapi,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv,
} from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import styles from "./TechStack.module.css";

const technologies = [
  { name: "JavaScript", icon: <SiJavascript className={styles.jsIcon} /> },
  { name: "Python", icon: <SiPython className={styles.pythonIcon} /> },
  {
    name: "Jupyter Notebook",
    icon: <SiJupyter className={styles.jupyterIcon} />,
  },
  { name: "Node.js", icon: <SiNodedotjs className={styles.nodeIcon} /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className={styles.postgresIcon} />,
  },
  { name: "Firebase", icon: <SiFirebase className={styles.firebaseIcon} /> },
  { name: "React", icon: <SiReact className={styles.reactIcon} /> },
  { name: "FastAPI", icon: <SiFastapi className={styles.fastapiIcon} /> },
  { name: "Machine Learning", icon: <BiBrain className={styles.mlIcon} /> },
  { name: "NumPy", icon: <SiNumpy className={styles.numpyIcon} /> },
  { name: "Pandas", icon: <SiPandas className={styles.pandasIcon} /> },
  {
    name: "Scikit-learn",
    icon: <SiScikitlearn className={styles.scikitIcon} />,
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow className={styles.tensorflowIcon} />,
  },
  { name: "OpenCV", icon: <SiOpencv className={styles.opencvIcon} /> },
];

const TechStack = () => {
  return (
    <section className={styles.techSection}>
      <h2 className={styles.sectionTitle}>Tech Stack</h2>
      <div className={styles.techGrid}>
        {technologies.map((tech) => (
          <div key={tech.name} className={styles.techCard}>
            <div className={styles.iconWrapper}>{tech.icon}</div>
            <p className={styles.techName}>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
