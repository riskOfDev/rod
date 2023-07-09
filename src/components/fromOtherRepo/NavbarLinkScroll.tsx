import { Box, Text, useTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Link } from "react-scroll";

type Props = {
  path: string;
  text: string;
  size?: string;
  onClose?: () => void; // add this prop
};

const NavbarLinkScroll: React.FC<Props> = ({ path, text, size, onClose }) => {
  const theme = useTheme();
  return (
    <Box
      as={Link}
      to={path}
      spy={true}
      smooth={true}
      duration={500}
      cursor="pointer"
      position="relative"
      _hover={{ textDecoration: "none" }}
      onClick={onClose} // close the menu on click
    >
      <Text
        as="span"
        display="block"
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          bottom: "0",
          left: "0",
          height: "4px",
          width: "0%",
          backgroundColor: "#8F00FF",
          transition: "width 0.3s",
        }}
        _hover={{
          _after: {
            width: "100%",
          },
        }}
        fontSize={size}
        fontWeight="bold"
        transition="0.15s ease"
      >
        {text}
      </Text>
    </Box>
  );
};

export default NavbarLinkScroll;
