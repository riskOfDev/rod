import React, { useEffect, useState, useRef } from "react";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import emojis from "./emojis";
import TiltImage from "@/components/TiltImage";
import Modal from "@/components/Modal";
import IntegrantsStyle from "@/styles/Integrants.module.css";
import IntegrantReadmosStyles from "@/styles/IntegrantReadmos.module.css";

interface ModalHandles {
  openModal: () => void;
  closeModal: () => void;
}

const IntegrantReadmos = ({
  username,
  repoName,
  name,
  description,
  link,
  thumbnail,
}: any) => {
  const [clean, setClean] = useState("");
  const [open, setOpen] = useState(false);
  const modalRef = useRef<ModalHandles>(null);

  useEffect(() => {
    const emojisObject = emojis;

    const username2 = "axelromero99";
    const userURL = `https://api.github.com/users/${username2}/repos`;

    getRepos(userURL);

    async function getRepos(userURL: string) {
      const response = await fetch(userURL);
      const result = await response.json();

      let rawURL = result[0].html_url + "/master/README.md";
      rawURL = [rawURL.slice(0, 8), "raw.", rawURL.slice(8)].join("");
      rawURL = rawURL.replace("github", "githubusercontent");

      fetchReadme(rawURL);
    }

    async function fetchReadme(url: string) {
      1;
      const response = await fetch(url);
      const text = await response.text();

      let dirty = marked.parse(text);
      dirty = replaceIcons(dirty);

      // console.log(dirty);
      let clean = DOMPurify.sanitize(dirty);

      setClean(clean);
    }

    function replaceIcons(dirty: string) {
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
        // Compare if the emoji syntax is on the emojis
        if (Object.keys(emojis).includes(word)) {
          let emojiHTML = `<img style="width: 1em; display: inline" src="${emojis[word]}"></img>`;

          dirtyCopy = dirtyCopy.replace(/\:[a-zA-Z_]*\:/, emojiHTML);
        }
      }

      return dirtyCopy;
    }
  }, []);

  const handleClick = () => {
    modalRef.current?.openModal(); // Using optional chaining to ensure that current is not null or undefined
    setOpen(!open);
  };

  return (
    <div className={IntegrantsStyle.markdownbody}>
      <button onClick={handleClick} style={{ border: "none" }}>
        <img src={`/thumbnails/${thumbnail}`}></img>
      </button>
      {/* Result */}

      {open && (
        <>
          <Modal onClose={() => setOpen(false)}>
            <div
              dangerouslySetInnerHTML={{
                __html: clean,
              }}
              className={IntegrantReadmosStyles.markdownbody}
            />
          </Modal>
        </>
      )}
    </div>
  );
};

export default IntegrantReadmos;
