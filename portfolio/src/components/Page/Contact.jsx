import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Get In Touch</h2>
      <div className={styles.contactContainer}>
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
