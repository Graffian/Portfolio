import React from "react";
import styles from "./Timeline.module.css";

const timelineData = [
  {
    period: "2022 - 2023",
    content:
      "Mastered core web technologies (HTML, CSS, JavaScript) and built responsive websites. Started exploring backend development with Node.js.",
  },
  {
    period: "2023 - 2024",
    content:
      "Developed full-stack applications using React, Node.js, and Express. Implemented real-time features with Firebase and PostgreSQL databases.",
  },
  {
    period: "2024 - 2025",
    content:
      "Won multiple hackathons at prestigious institutions. Created innovative solutions using modern tech stacks and APIs.",
  },
  {
    period: "2025 - PRESENT",
    content:
      "Diving deep into Machine Learning with Python, Jupyter Notebooks, and FastAPI. Working on data analysis and AI model development.",
  },
];

const Timeline = () => {
  return (
    <section id="journey" className={styles.timelineSection}>
      <h2 className={styles.sectionTitle}>Learning Journey</h2>
      <div className={styles.timelineContainer}>
        {timelineData.map((item, index) => (
          <div
            key={item.period}
            className={styles.timelineItem}
            style={{
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
            }}
          >
            <div className={styles.timelineContent}>
              <h3 className={styles.period}>{item.period}</h3>
              <p className={styles.description}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
