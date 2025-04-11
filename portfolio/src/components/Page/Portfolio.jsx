"use client";
import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Timeline from "./Timeline";
import TechStack from "./TechStack";
import ProjectGrid from "./ProjectGrid";
import Contact from "./Contact";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <Navigation />
      <Hero />
      <Timeline />
      <TechStack />
      <ProjectGrid />
      <Contact />
    </div>
  );
};

export default Portfolio;
