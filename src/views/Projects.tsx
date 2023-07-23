import React from "react";
import ProjectReadmos from "../components/Projects/ProjectReadmos";
import styles from "../styles/ProjectsDef.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      username: "riskOfDev",
      repoName: "portfolioFL",
      type: "WEB",
      name: '"Portfolio FL"',
      thumbnail: "portfoliofl.png",
      links: {
        github: "https://github.com/riskOfDev/portfolioFL",
        demo: "https://portfolio-fl.vercel.app/",
        figma:
          "https://www.figma.com/file/2UfMk8uEUHJ11zWJAF3Mtx/PORTFOLIO?node-id=2%3A27&t=Vy6OlGx5xmLxUhoI-1",
      },
    },
    {
      username: "riskOfDev",
      repoName: "portfolioFL_public",
      type: "WEB",
      name: '"riskOfDev"',
      thumbnail: "riskofdev.png",
      links: {
        github: "https://github.com/riskOfDev/rod",
        demo: "https://riskofdev.com",
        figma:
          "https://www.figma.com/file/2UfMk8uEUHJ11zWJAF3Mtx/PORTFOLIO?node-id=2%3A27&t=Vy6OlGx5xmLxUhoI-1",
      },
    },
    {
      username: "riskOfDev",
      repoName: "portfolioFL_public",
      type: "WEB APPLICATION",
      name: '"IphoneShop"',
      thumbnail: "iphoneshop.png",
      links: {
        demo: "https://www.iphoneshop.com",
        figma:
          "https://www.figma.com/file/v9PO9HeB6eD8jJR4stFTlZ/IS-REDESIGN-2023?type=design&node-id=0-1&mode=design",
      },
    },
    {
      username: "LuchoQQ",
      repoName: "armoniface",
      type: "Web Aplication",
      name: '"armoniface"',
      thumbnail: "armoniface.png",
      links: {
        github: "https://github.com/LuchoQQ/armoniface",
        demo: "https://www.armoniface.com",
        figma:
          "https://www.figma.com/file/Ij6k9Hlrcu2XXDzo87dTJX/Untitled?type=design&node-id=0%3A1&mode=design&t=XFyDwklVf33KxeEB-1",
      },
    },
    {
      username: "riskOfDev",
      repoName: "portfolioFL_public",
      type: "WEB APPLICATION - E-COMMERCE",
      name: '"PaseTicket"',
      thumbnail: "ta-da.png",
      links: {
        demo: "https://paseticket.com/",
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
        <ProjectReadmos
          key={index}
          username={project.username}
          repoName={project.repoName}
          number={index + 1}
          type={project.type}
          name={project.name}
          thumbnail={project.thumbnail}
          links={project.links}
        />
      ))}
    </>
  );
};

export default Projects;
