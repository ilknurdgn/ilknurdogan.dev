import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className={styles["navbar-section"]}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            <h3>DID</h3>
          </Link>
        </div>

        <div className={styles.navContent}>
          <ul className={styles.navList}>
            <li className={styles.li}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
              >
                <span>About</span>
              </Link>
            </li>
            {/* <li className={styles.li}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={400}
              >
                <span>Skills</span>
              </Link>
            </li> */}

            <li className={styles.li}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                // offset={-100}
                duration={400}
              >
                <span>Projects</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
