import styles from "../../styles/TiltImage.module.css";
import React, { useState } from "react";
import Image from "next/image";

const TiltImage = ({ image }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top; //y position within the element.
    const yRotation = 10 * (x / rect.width - 0.3);
    const xRotation = -10 * (y / rect.height - 0.3);
    setRotation({ x: xRotation, y: yRotation });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const tiltStyle = {
    transform: `perspective(500px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    filter: "drop-shadow(0 0 1.75rem rgb(237 201 255))",
  };

  return (
    <div
      className={styles.tiltContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        width="900"
        height="900"
        src={image}
        alt="Tilt"
        className={styles.tilt}
        style={tiltStyle}
      />
    </div>
  );
};

export default TiltImage;
