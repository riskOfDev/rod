import React from "react";
import Integrant from "../components/Integrants/Integrant";

const Integrants = () => {
  const integrants = [
    {
      name: "Axel René Romero Esquivel",
      position: "Senior Fullstack Developer",
      thumbnail: "axel.jpg",
      generalLink: "https://www.github.com/axelromero99",
      links: {
        github: "https://www.github.com/axelromero99",
        portfolio: "https://arrecode.vercel.app/#/",
      },
    },
    {
      name: "Axel René Romero Esquivel",
      position: "Senior Fullstack Developer",
      thumbnail: "axel.jpg",
      generalLink: "https://www.github.com/axelromero99",
      links: {
        github: "https://www.github.com/axelromero99",
        portfolio: "https://arrecode.vercel.app/#/",
      },
    },
    {
      name: "Axel René Romero Esquivel",
      position: "Senior Fullstack Developer",
      thumbnail: "axel.jpg",
      generalLink: "https://www.github.com/axelromero99",
      links: {
        github: "https://www.github.com/axelromero99",
        portfolio: "https://arrecode.vercel.app/#/",
      },
    },
  ];

  return (
    <>
      {integrants.map((project, index) => (
        <Integrant
          key={index}
          position={project.position}
          name={project.name}
          thumbnail={project.thumbnail}
          links={project.links}
          generalLink={project.generalLink}
        />
      ))}
    </>
  );
};

export default Integrants;
