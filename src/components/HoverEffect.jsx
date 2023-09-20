import React, { useEffect, useRef } from "react";
import styles from "../styles/HoverEffect.module.css";

const HoverEffect = () => {
  const containerRef = useRef(null);
  const cursorPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // const onMouseMove = (event) => {
    //   if (containerRef.current) {
    //     const rect = containerRef.current.getBoundingClientRect();
    //     const x = event.clientX - rect.left;
    //     // Subtract the window's scrollY offset from the y position
    //     const y = event.clientY - rect.top - window.scrollY;
    //     containerRef.current.style.setProperty("--x", `${x}px`);
    //     containerRef.current.style.setProperty("--y", `${y}px`);
    //   }
    // };

    // const onScroll = () => {
    //   const x = cursorPosRef.current.x + window.pageXOffset;
    //   const y = cursorPosRef.current.y + window.pageYOffset;
    //   containerRef.current.style.setProperty("--x", `${x}px`);
    //   containerRef.current.style.setProperty("--y", `${y}px`);
    // };
    const onMouseMove = (event) => {
      cursorPosRef.current = { x: event.clientX, y: event.clientY };
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        containerRef.current.style.setProperty("--x", `${x}px`);
        containerRef.current.style.setProperty("--y", `${y}px`);
      }
    };

    const onScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = cursorPosRef.current.x - rect.left;
        const y = cursorPosRef.current.y - rect.top;
        containerRef.current.style.setProperty("--x", `${x}px`);
        containerRef.current.style.setProperty("--y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      style={{ position: "absolute", zIndex: -1 }}
    >
      <div className={styles.backgroundOneHover}>
        <div className={styles.backgroundOne} />
      </div>
      <div className={styles.backgroundTwoHover}>
        <div className={styles.backgroundTwo}>
          <video autoPlay loop muted className={styles.video}>
            {/* <source src="/hero-background/pexels2.mp4" type="video/mp4" /> */}
            <source src="/hero-background/1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HoverEffect;
