import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
}) => {
  return (
    <article className={styles.projectCard}>
      <img
        className={styles.projectImage}
        src={image}
        alt={`${title} preview`}
      />
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.techTags}>
          {technologies.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          <a
            href={githubUrl}
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.linkIcon} />
            View on GitHub
          </a>
          <a
            href={liveUrl}
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLinkExternal className={styles.linkIcon} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
