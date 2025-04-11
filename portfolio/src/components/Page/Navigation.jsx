"use client";
import React, { useState } from "react";
import pfp from "../../assets/profile.jpg"
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineContacts,
} from "react-icons/ai";
import { BsJournalText } from "react-icons/bs";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navItems = [
    { name: "About", icon: <AiOutlineHome /> },
    { name: "Projects", icon: <AiOutlineProject /> },
    { name: "Contact", icon: <AiOutlineContacts /> },
    { name: "Journey", icon: <BsJournalText /> },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.profile}>
          <img
            src={pfp}
            alt="Ayushkant Behera"
            className={styles.profileImage}
          />
          <span className={styles.profileName}>Ayushkant Behera</span>
        </div>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item.name}
              className={styles.navButton}
              onClick={() => handleSectionClick(item.name.toLowerCase())}
              style={{
                color:
                  activeSection === item.name.toLowerCase() ? "#fff" : "#aaa",
              }}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};


export default Navigation;