import React from "react";
import styles from "../styles/Hero.module.css";
import Navbar from "@/components/Navbar";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <video
          className={styles.video}
          src="/hero-background/2.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div>
          <p>
            we are <span className={styles.not}>!(not)</span>
          </p>
          <p>another javascript joke</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
