import React, { useState } from "react";
import styles from "../styles//Navbar.module.css";
import { FaHome, FaUser, FaServicestack, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <button onClick={toggleNavbar} className={styles.toggleButton}>
        {isOpen ? "Close" : "Open"}
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <FaUser /> About
            </a>
          </li>
          <li>
            <a href="#">
              <FaServicestack /> Services
            </a>
          </li>
          <li>
            <a href="#">
              <FaEnvelope /> Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
