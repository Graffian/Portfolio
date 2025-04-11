import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./ContactInfo.module.css";

const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/Graffian" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ayushkant-behera-18a860279/" },
  { name: "Twitter", icon: <FaTwitter />, url: "https://x.com/ayushh4506" },
];

const ContactInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.contactDetails}>
        <h3 className={styles.infoTitle}>Contact Info</h3>
        <div className={styles.contactList}>
          <p>
            <MdEmail className={styles.contactIcon} />{" "}
            rudrabehera2006@gmail.com
          </p>
          <p>
            <MdPhone className={styles.contactIcon} /> +91 9124706434
          </p>
          <p>
            <MdLocationOn className={styles.contactIcon} /> Bhubaneswar, India
          </p>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <h3 className={styles.infoTitle}>Social Links</h3>
        <div className={styles.socialButtons}>
          {socialLinks.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className={styles.socialButton}
              aria-label={platform.name}
            >
              {platform.icon}
              <span className={styles.socialText}>{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
