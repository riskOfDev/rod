import React from "react";
import Console from "../components/Console";

const Technologies = () => {
  const techLogos = [
    { name: "NextJS", logo: "nextjs" },
    { name: "ReactJS", logo: "reactjs" },
    { name: "NodeJS", logo: "nodejs" },
    { name: "Express", logo: "express" },
    { name: "NestJS", logo: "nestjs" },
    { name: "MongoDB", logo: "mongodb" },
    { name: "Amazon Web Services", logo: "aws" },
  ];

  return (
    <div style={{ height: "100vh" }}>
      <div>What we do</div>
      <div>
        {techLogos.map((item, index) => {
          return (
            <img
              key={index}
              src={`./techs/${item.logo}.png`}
              alt={item.name}
            ></img>
          );
        })}
      </div>
      <div>
        We are specialized in NextJS, ReactJS, NodeJS with Express, NestJS,
        MongoDB, Amazon Web Services
      </div>
      <Console />
    </div>
  );
};

export default Technologies;
