import React, { useEffect, useRef, useState } from "react";
import HoverEffect from "../components/HoverEffect";
import styles from "../styles/Description.module.css";

const Description = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case "text1":
                setIsActive1(true);
                break;
              case "text2":
                setIsActive2(true);
                break;
              case "text3":
                setIsActive3(true);
                break;
              default:
                break;
            }
          }
        });
      },
      {
        rootMargin: "-25% 0% -25% 0%",
        threshold: 0.5,
      }
    );

    observer.observe(ref1.current);
    observer.observe(ref2.current);
    observer.observe(ref3.current);

    return () => {
      observer.unobserve(ref1.current);
      observer.unobserve(ref2.current);
      observer.unobserve(ref3.current);
    };
  }, []);

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <HoverEffect />
      <div className={styles.container}>
        <div
          ref={ref1}
          id="text1"
          className={`${styles.text} ${isActive1 ? styles.active : ""}`}
        >
          We believe that innovation is a synonym of solution
        </div>
        <div
          ref={ref2}
          id="text2"
          className={`${styles.text} ${isActive2 ? styles.active : ""}`}
        >
          Using the most optimized and secure technologies
        </div>
        <div
          ref={ref3}
          id="text3"
          className={`${styles.text} ${isActive3 ? styles.active : ""}`}
        >
          Escalability, design, and user-centered software
        </div>
      </div>
    </div>
  );
};

export default Description;
