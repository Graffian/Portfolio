import React from "react";
import { FiDownload } from "react-icons/fi";
import { BsAward } from "react-icons/bs";
import styles from "./Hero.module.css";
import pfp from "../../assets/profile.jpg"

const Hero = () => {
  return (
    <section id="about" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Hey there! I'm Ayushkant Behera</h1>
          <p className={styles.description}>
            A passionate full-stack developer specializing in modern web
            technologies and machine learning. With expertise in JavaScript,
            Python, and various frameworks, I build scalable web applications
            and explore the fascinating world of AI. My journey from web
            development to machine learning has been driven by curiosity and a
            desire to solve complex problems through technology.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              <FiDownload className={styles.buttonIcon} />
              Download Resume
            </button>
            <button className={styles.secondaryButton}>
              <BsAward className={styles.buttonIcon} />
              See Certifications
            </button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={pfp}
            alt="Profile"
            className={styles.heroImage}
          />
          <div className={styles.decorativeShape} />
        </div>
      </div>
    </section>
  );
};
export default Hero;