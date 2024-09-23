import React from "react";
import styles from "./skills.module.css";
export const Skills = () => {
  return (
    <div className={styles["skills-section"]}>
      <div className={styles["skills-title"]}>
        <h1>SKILLS</h1>
      </div>
      <div className={styles["skills-content"]}>
        <div className={styles.skill}>
          <img src="/images/html.png" alt="HTML" title="HTML" />
        </div>
        <div className={styles.skill}>
          <img src="/images/css.png" alt="CSS" title="CSS" />
        </div>
        <div className={styles.skill}>
          <img src="/images/js.png" alt="JavaScript" title="JavaScript" />
        </div>
        <div className={styles.skill}>
          <img src="/images/react-js.png" alt="React.js" title="React.js" />
        </div>
        <div className={styles.skill}>
          <img src="/images/node-js.png" alt="Node.js" title="Node.js" />
        </div>
        <div className={styles.skill}>
          <img
            src="/images/express-js.png"
            alt="Express.js"
            title="Express.js"
          />
        </div>
        <div className={styles.skill}>
          <img src="/images/java.png" alt="Java" title="Java" />
        </div>
        <div className={styles.skill}>
          <img src="/images/spring.png" alt="Spring" title="Spring" />
        </div>
        <div className={styles.skill}>
          <img src="/images/mongodb.png" alt="MongoDB" title="MongoDB" />
        </div>
        <div className={styles.skill}>
          <img
            src="/images/postgresql.png"
            alt="PostgreSQL"
            title="PostgreSQL"
          />
        </div>
      </div>
    </div>
  );
};
