import React from "react";
import styles from "./utils.module.css";

const Nav = () => {
  return (
    <div className={styles["nav"]}>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Resume</li>
      </ul>
    </div>
  );
};

export default Nav;
