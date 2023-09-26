import React from "react";
import Projects from "../views/Projects";
import { Box } from "@chakra-ui/react";

const auxProjects = () => {
  return (
    <>
      <Projects />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxProjects;
