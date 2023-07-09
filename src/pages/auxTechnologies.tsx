import React from "react";
import Technologies from "../views/Technologies";
import { Box } from "@chakra-ui/react";

const auxTechnologies = () => {
  return (
    <>
      <Box bg="blue" w="100" h="100vh"></Box>
      <Technologies />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxTechnologies;
