import React, { useEffect, useState, useRef } from "react";
import HoverEffect from "../components/HoverEffect";
import styles from "../styles/Description.module.css";
import { motion } from "framer-motion";

const textVariants = {
  active: {
    fontSize: "2rem",
    color: "#ff4500",
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

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textPosition = textRef.current.getBoundingClientRect();
      const isMid =
        window.innerHeight / 2 > textPosition.top &&
        window.innerHeight / 2 < textPosition.bottom;
      setIsCentered(isMid);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={textRef}
      className={styles.text}
      initial="inactive"
      animate={isCentered ? "active" : "inactive"}
      variants={textVariants}
    >
      {text}
    </motion.div>
  );
};

const Description = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <HoverEffect />
      <div className={styles.container}>
        <AnimatedText text="We believe that innovation is a synonymum of solution" />
        <AnimatedText text="Using the most optimized and secure technologies" />
        <AnimatedText text="Escalability, design and user centered software" />
      </div>
    </div>
  );
};

export default Description;
