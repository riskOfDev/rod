import React from "react";
import Services from "../views/Services";
import { Box } from "@chakra-ui/react";

const auxServices = () => {
  return (
    <>
      <Box bg="blue" w="100" h="100vh"></Box>
      <Services />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxServices;
