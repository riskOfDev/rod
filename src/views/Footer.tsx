import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.box}>
          <h2 className={styles.boxHeader}>Company Name</h2>
          <p>
            Your company description, address, or any other useful information.
          </p>
        </div>
        <div className={styles.box}>
          <h2 className={styles.boxHeader}>Contact Us</h2>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className={styles.box}>
          <h2 className={styles.boxHeader}>Follow Us</h2>
          <p>Social media links or icons can go here.</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
