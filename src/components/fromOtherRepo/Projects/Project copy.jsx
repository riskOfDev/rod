import React, { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import emojis from "./readmos/emojis";

import ProjectsStyle from "../../styles/Projects.module.css";
import styles from "../../styles/Project.module.css";

import Image from "next/image";

const Project = ({ type, name, thumbnail, links, number }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setOpen(!open);
  };

  return (
    <div
      style={
        number % 2
          ? { display: "flex", padding: "30px" }
          : { display: "flex", padding: "30px", flexDirection: "row-reverse" }
      }
    >
      {/* Thumbnail */}

      <Image
        width={900}
        height={900}
        alt={name}
        style={{ borderRadius: "10px" }}
        src={`/thumbnails/${thumbnail}`}
      />

      <div className={styles.textContent}>
        {/* Name and type */}

        <div>
          <h1>{type}</h1>
          <h2>{name}</h2>
        </div>

        {/* Links */}

        <div className={styles.links}>
          {Object.keys(links).map((link, index) => {
            if (link === "github") {
              return (
                <a
                  key={name}
                  href={links[link]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={60}
                    height={60}
                    alt="github"
                    src="/icons/github.svg"
                  />
                  Github
                </a>
              );
            }
            if (link === "demo") {
              return (
                <a
                  key={name}
                  href={links[link]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={60}
                    height={60}
                    alt="demo"
                    src="/icons/web-2.svg"
                  />
                  Live
                </a>
              );
            }
            if (link === "behance") {
              return (
                <a
                  key={name}
                  href={links[link]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={60}
                    height={60}
                    alt="behance"
                    src="/icons/behance.svg"
                  />
                  Behance
                </a>
              );
            }
            if (link === "figma") {
              return (
                <a
                  key={name}
                  href={links[link]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={60}
                    height={60}
                    alt="figma"
                    src="/icons/figma.svg"
                  />
                  Figma
                </a>
              );
            }
            return null; // Return null for other cases
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
