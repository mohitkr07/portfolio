import React from "react";
import styles from "./utils.module.css";

const Lander = () => {
  return (
    <div className={styles["lander-container"]}>
      <div className={styles["lander-left"]}>
        <div>
          <h1>Hi!</h1>
          <h2>I'm Mohit</h2>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div className={styles["lander-right"]}>
        <div className={styles["profile-pic"]}>
          <img src="/images/mumbai.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Lander;
