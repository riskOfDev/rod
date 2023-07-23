import React, { useState, useEffect } from "react";
import Image from "next/image";
import { marked } from "marked";
import emojis from "../Projects/readmos/emojis";
import ProjectsStyle from "../../styles/Projects.module.css";
import DOMPurify from "isomorphic-dompurify";

const Integrant = ({ title, position, image, githubUsername }) => {
  const [clean, setClean] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const userURL = `https://raw.githubusercontent.com/${githubUsername}/${githubUsername}/main/README.md`;

    // getRepos(userURL);
    fetchReadme(userURL);

    async function getRepos(userURL) {
      const response = await fetch(userURL);

      console.log(response);

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

      let clean = DOMPurify.sanitize(dirty);

      console.log("clean", clean);
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
    <div>
      {/* <Image width="30" height="30" alt={title} src={image} /> */}
      <div>{title}</div>
      <div>{position}</div>
      <button onClick={handleClick}>Accionar</button>
      {/* READMOS */}

      <div className={ProjectsStyle.markdownbody}>
        {open && (
          <div
            dangerouslySetInnerHTML={{
              __html: clean,
            }}
            className="markdownbody"
          />
        )}
      </div>
    </div>
  );
};

export default Integrant;
