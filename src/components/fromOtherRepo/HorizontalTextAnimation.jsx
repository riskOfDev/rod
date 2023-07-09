import React, { useEffect, useState } from "react";

const titleStyle = {
  fontFamily: "var(--font-primary)",
  color: "black",
  fontSize: "36px",
  zIndex: 1,
  margin: 0,
  whiteSpace: "nowrap",
  marginTop: "auto",
  transition: "transform 0.3s ease-in-out",
};

const HorizontalTextAnimation = ({
  text,
  defaultDirection = "right",
  defaultOffset = 0,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [translateX, setTranslateX] = useState(defaultOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      let newTranslateX;
      if (defaultDirection === "right") {
        newTranslateX = translateX + (scrollPosition - currentPosition) * 0.5;
      } else {
        newTranslateX = translateX - (scrollPosition - currentPosition) * 0.5;
      }
      setTranslateX(newTranslateX);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, translateX, defaultDirection]);

  return (
    <div>
      <div style={{ position: "sticky", top: 0 }}>
        <h1 style={{ ...titleStyle, transform: `translateX(${translateX}px)` }}>
          {text}
        </h1>
      </div>
    </div>
  );
};

export default HorizontalTextAnimation;
