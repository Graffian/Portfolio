import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./constants/projects";
import styles from "./ProjectGrid.module.css";

const ProjectGrid = () => {
  return (
    <section id="projects" className={styles.projectSection}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
