import React from "react";
import Footer from "../views/Footer";
import { Box } from "@chakra-ui/react";

const auxFooter = () => {
  return (
    <>
      <Box bg="blue" w="100" h="100vh"></Box>
      <Footer />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxFooter;
