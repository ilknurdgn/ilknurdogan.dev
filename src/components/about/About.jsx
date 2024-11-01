import React, { useRef, useEffect } from "react";
import styles from "./about.module.css";
import { IoDocumentText } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Typed from "typed.js";

const About = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Durdu Ilknur Dogan", "Web Developer"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="about" className={styles["about-section"]}>
      <div  className={styles["about-container"]}>
      <div className={styles["about-content"]}>
        <div className={styles["about-text"]}>
          <h1>
            Hi there, <br />
            I'm <span ref={typedRef}></span>{" "}
          </h1>
          <p>
            I'm a 3rd year Computer Engineering student at Pamukkale University.
            I continue to improve myself in the field of web development,
            especially focusing on backend technologies.
          </p>
        </div>
        <div className={styles["about-contact"]}>
          <a title="CV" href="/doc/DurduIlknurDogan_CV.pdf" target="_blank">
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
    </div>
  );
};

export default About;
