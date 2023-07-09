import React from "react";
import Description from "../views/Description";
import { Box } from "@chakra-ui/react";

const auxDescription = () => {
  return (
    <>
      <Box bg="blue" w="100" h="100vh"></Box>
      <Description />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxDescription;
