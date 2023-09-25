import React from "react";
import HoverEffect from "../components/HoverEffect";
import styles from "../styles/Description.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Description = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Adjust as needed. 0.5 means 50% of the item should be in view.
  });

  const textVariants = {
    active: {
      fontSize: "2rem", // Adjust as needed.
      color: "#ff4500", // Change to the desired color.
      transition: {
        duration: 0.5,
      },
    },
    inactive: {
      fontSize: "1.5rem",
      color: "white",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <HoverEffect />
      <div className={styles.container}>
        <div className={styles.text}>
          We believe that innovation is a synonymum of solution
        </div>
        <motion.div
          ref={inViewRef}
          className={styles.text}
          initial="inactive"
          animate={inView ? "active" : "inactive"}
          variants={textVariants}
        >
          Using the most optimized and secure technologies
        </motion.div>
        <div className={styles.text}>
          Escalability, design and user centered software
        </div>
      </div>
    </div>
  );
};

export default Description;
