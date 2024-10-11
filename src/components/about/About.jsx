import React, { useRef, useEffect } from "react";
import styles from "./about.module.css";
import { IoDocumentText } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Typewriter from "typewriter-effect/dist/core";

const About = () => {
  // const typewriterRef = useRef(null);

  // useEffect(() => {
  //   const typewriter = new Typewriter(typewriterRef.current, {
  //     loop: true,
  //     delay: 200,
  //   });

  //   typewriter
  //     .typeString("Backend Developer")
  //     .pauseFor(1000)
  //     .deleteAll()
  //     .start();
  // }, []);

  return (
    <div id="about" className={styles["about-section"]}>
      <div className={styles["about-content"]}>
        <div className={styles["about-text"]}>
          <h1>Durdu Ilknur Dogan</h1>
          {/* <h2 ref={typewriterRef}></h2> */}
          <p>
            3rd grade Computer Engineering Student at Pamukkale University and
            core-team member of PauSiber. I'm interested in Web Development and
            especially working on backend technologies.
          </p>
        </div>
        <div className={styles["about-contact"]}>
          <a title="CV" href="/doc/cv_Durdu_İlknur_Doğan.pdf" target="_blank">
            <IoDocumentText />
          </a>
          <a
            title="email"
            href="mailto:ilknurddogan265@gmail.com"
            target="_blank"
          >
            <IoMdMail />
          </a>
          <a title="Github" href="https://github.com/ilknurdgn" target="_blank">
            <FaGithub />
          </a>
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/ilknurdogan/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a title="X" href="https://x.com/ddilknurdgn" target="_blank">
            <FaXTwitter />
          </a>
          <a
            title="Instagram"
            href="https://www.instagram.com/ilknur.ddogan_/"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className={styles["about-image"]}>
        <img src="/images/me.jpg" alt="" />
      </div>
    </div>
  );
};

export default About;
