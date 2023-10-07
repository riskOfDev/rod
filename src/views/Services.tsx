import React, { useState } from "react";
import styles from "../styles/Services.module.css";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExpandClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.services}>
      <img
        src="/services/1.png"
        alt="Service"
        className={`${styles.image} ${isModalOpen ? styles.hide : ""}`}
        onClick={handleExpandClick}
      />
      {isModalOpen && (
        <div className={styles.modal} onClick={handleCloseClick}>
          <img
            src="/services/1.png"
            alt="Service"
            className={styles.modalImage}
          />
        </div>
      )}
    </div>
  );
};

export default Services;
