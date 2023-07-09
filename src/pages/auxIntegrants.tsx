import React from "react";
import Integrants from "../views/Integrants";
import { Box } from "@chakra-ui/react";

const auxIntegrants = () => {
  return (
    <>
      <Box bg="blue" w="100" h="100vh"></Box>
      <Integrants />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxIntegrants;
