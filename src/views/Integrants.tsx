import React from "react";
import Integrant from "../components/Integrants/Integrant";

const Integrants = () => {
  const integrants = [
    {
      title: "Axel René Romero Esquivel",
      position: "Tech Lead & Senior Web Developer",
      image: "axel",
      githubUsername: "axelromero99",
    },
    {
      title: "Gastón Chifflets",
      position: "SSR Web Developer",
      image: "chifflets",
      githubUsername: "LuchoQQ",
    },
    {
      title: "Luciano Sanchez",
      position: "SSR Web Developer",
      image: "luchito",
      githubUsername: "LuchoQQ",
    },
  ];

  return (
    <div>
      {integrants.map((integrant, index) => (
        <Integrant
          key={index}
          title={integrant.title}
          position={integrant.position}
          image={integrant.image}
          githubUsername={integrant.githubUsername}
        ></Integrant>
      ))}
    </div>
  );
};

export default Integrants;
