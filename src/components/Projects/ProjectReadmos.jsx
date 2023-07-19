import React, { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import emojis from "./readmos/emojis";
import ProjectsStyle from "../../styles/Projects.module.css";

// old
import Image from "next/image";
import { Box, Flex, Heading, Link, chakra } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TiltImage from "./TiltImage";
import styles from "../../styles/ProjectDef.module.css";

// Create a motion component using Chakra UI's Box component
const MotionBox = chakra(motion.div);
const MotionFlex = chakra(motion.flex);

const ProjectReadmos = ({
  username,
  repoName,
  // old
  type,
  name,
  thumbnail,
  links,
  number,
}) => {
  const [clean, setClean] = useState("");
  const [open, setOpen] = useState(false);

  // old
  // const [open, setOpen] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // end old

  useEffect(() => {
    const emojisObject = emojis;

    const userURL = `https://api.github.com/users/${username}/repos`;

    getRepos(userURL);

    async function getRepos(userURL) {
      const response = await fetch(userURL);
      const result = await response.json();

      let rawURL = result[0].html_url + "/master/README.md";
      rawURL = [rawURL.slice(0, 8), "raw.", rawURL.slice(8)].join("");
      rawURL = rawURL.replace("github", "githubusercontent");

      fetchReadme(rawURL);
    }

    async function fetchReadme(url) {
      const response = await fetch(url);
      const text = await response.text();

      let dirty = marked.parse(text);
      dirty = replaceIcons(dirty);

      // console.log(dirty);
      let clean = DOMPurify.sanitize(dirty);

      setClean(clean);
    }

    function replaceIcons(dirty) {
      const regexp = RegExp(":[a-zA-Z1-9_+-]*:", "g");
      let dirtyCopy = dirty;
      let word;
      let ocurrency;

      while ((ocurrency = regexp.exec(dirty)) !== null) {
        console.log(
          `Found ${ocurrency[0]} start=${ocurrency.index} end=${regexp.lastIndex}.`
        );

        // Delete the : of the word
        word = ocurrency[0].slice(1, -1);
        console.log("word", word);
        console.log(emojis);
        // Compare if the emoji syntax is on the emojis
        if (Object.keys(emojis).includes(word)) {
          let emojiHTML = `<img style="width: 1em; display: inline" src="${emojis[word]}"></img>`;

          dirtyCopy = dirtyCopy.replace(/\:[a-zA-Z_]*\:/, emojiHTML);

          console.log("dirtyCopy,dirtyCopy", dirtyCopy);
        }
      }

      return dirtyCopy;
    }
  }, []);

  const handleClick = () => {
    console.log("clicked");
    setOpen(!open);
  };

  return (
    <>
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
          onClick={handleClick}
        >
          <TiltImage image={`/thumbnails/${thumbnail}`}></TiltImage>
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
                  {link === "demo" && (
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
                  {link === "behance" && (
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
                        src="/icons/behance.svg"
                        alt="behance"
                        width={30}
                        height={30}
                        className={styles.linkImage}
                      />
                      <span className={styles.nameLinks}>Behance</span>
                    </Link>
                  )}
                  {link === "figma" && (
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
                        src="/icons/figma.svg"
                        alt="figma"
                        width={30}
                        height={30}
                        className={styles.linkImage}
                      />
                      <span className={styles.nameLinks}>Figma</span>
                    </Link>
                  )}
                </MotionBox>
              );
            })}
          </Flex>
        </Box>
      </Flex>

      {/* READMOS */}

      <div className={ProjectsStyle.markdownbody}>
        {/* <button onClick={handleClick}>Readme</button> */}
        {/* Result */}

        {open && (
          <div
            dangerouslySetInnerHTML={{
              __html: clean,
            }}
            className="markdownbody"
          />
        )}
      </div>
    </>
  );
};

export default ProjectReadmos;
