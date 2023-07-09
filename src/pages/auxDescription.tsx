import React from "react";
import Footer from "../components/views/Description";
import { Box } from "@chakra-ui/react";

const auxDescription = () => {
  return (
    <>
      <Box bg="blue" w="100" h="100vh"></Box>
      <Footer />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxDescription;
