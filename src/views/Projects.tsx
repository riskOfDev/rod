import React from "react";
import ProjectReadmos from "../components/Projects/ProjectReadmos";
import Project from "../components/Projects/Project";
import styles from "../styles/ProjectsDef.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      type: "WEB",
      name: '"riskOfDev"',
      thumbnail: "riskofdev.png",
      generalLink: "",
      links: {
        github: "https://www.google.com",
        demo: "https://www.google.com",
        behance: "https://www.google.com",
        figma: "https://www.google.com",
      },
    },
    {
      type: "WEB APPLICATION",
      name: '"IphoneShop"',
      thumbnail: "ta-da.png",
      generalLink: "",
      links: {
        github: "https://www.google.com",
        demo: "https://www.google.com",
        behance: "https://www.google.com",
        figma: "https://www.google.com",
      },
    },
    {
      type: "WEB APPLICATION - LMS",
      name: '"Armonyface"',
      thumbnail: "ta-da.png",
      generalLink: "",
      links: {
        github: "https://www.google.com",
        demo: "https://www.google.com",
        behance: "https://www.google.com",
        figma: "https://www.google.com",
      },
    },
    {
      type: "PaseTicket - E-Commerce",
      name: '"Armonyface"',
      thumbnail: "ta-da.png",
      generalLink: "",
      links: {
        github: "https://www.google.com",
        demo: "https://www.google.com",
        behance: "https://www.google.com",
        figma: "https://www.google.com",
      },
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div
        ref={ref}
        className={styles.titles}
        style={{
          textAlign: "center",
          fontSize: "36px",
          paddingBottom: "60px",
        }}
        id="projects"
      >
        <motion.h1
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          MY PROJECTS
        </motion.h1>
        <motion.h2
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          CHECK OUT MY WORK
        </motion.h2>
      </div>
      {projects.map((project, index) => (
        <Project
          key={index}
          number={index + 1}
          type={project.type}
          name={project.name}
          thumbnail={project.thumbnail}
          links={project.links}
          generalLink={project.generalLink}
        />
      ))}
    </>
  );
};

export default Projects;
