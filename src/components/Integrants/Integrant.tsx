import React, { useState } from "react";
import Image from "next/image";
import { Box, Flex, Heading, Link, chakra } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/IntegrantDef.module.css";
import IntegrantReadmos from "./readmos/IntegrantReadmos";

// Create a motion component using Chakra UI's Box component
const MotionBox = chakra(motion.div);
const MotionFlex = chakra(motion.div);

const Integrant = ({
  type,
  name,
  thumbnail,
  links,
  number,
  generalLink,
}: any) => {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const handleClick = () => {
    console.log("clicked");
    setOpen(!open);
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Flex
      ref={ref}
      direction={number % 2 ? "row" : "row-reverse"}
      padding="30px"
      alignItems="center"
    >
      {/* Thumbnail */}
      <MotionBox
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.7 } },
        }}
      >
        <IntegrantReadmos link={generalLink} thumbnail={thumbnail} />
      </MotionBox>

      <Box ml={number % 2 ? "30px" : "0px"} className="textContent">
        {/* Name and type */}
        <MotionBox
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.9 } },
          }}
        >
          <Box className={styles.titles}>
            <Heading as="h1" fontSize="5xl">
              {type}
            </Heading>
            <Heading as="h2" fontSize="5xl" mt={1} color="#9E9E9E">
              {name}
            </Heading>
          </Box>
        </MotionBox>

        {/* Links */}
        <Flex mt={4}>
          {Object.keys(links).map((link, index) => {
            return (
              <MotionBox
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { delay: 1.1 + index * 0.2 },
                  },
                }}
                key={link}
                className={links}
              >
                {link === "github" && (
                  <Link
                    href={links[link]}
                    target="_blank"
                    rel="noopener noreferrer"
                    display="flex"
                    alignItems="center"
                    mr={4}
                    _hover={{ color: "blue.500" }}
                    className={styles.linkItem}
                  >
                    <Image
                      src="/icons/github.svg"
                      alt="github"
                      width={30}
                      height={30}
                      className={styles.linkImage}
                    />
                    <span className={styles.nameLinks}>Github</span>
                  </Link>
                )}
                {link === "portfolio" && (
                  <Link
                    href={links[link]}
                    target="_blank"
                    rel="noopener noreferrer"
                    display="flex"
                    alignItems="center"
                    mr={4}
                    _hover={{ color: "blue.500" }}
                  >
                    <Image
                      src="/icons/web-2.svg"
                      alt="demo"
                      width={30}
                      height={30}
                      className={styles.linkImage}
                    />
                    <span className={styles.nameLinks}>Live</span>
                  </Link>
                )}
              </MotionBox>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Integrant;
