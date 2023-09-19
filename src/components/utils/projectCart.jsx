import { useEffect, useState } from "react";
import styles from "./utils.module.css";

const ProjectCard = (props) => {
  const points = props.points;
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-img"]}>
        <img src={props.imgLocation} />
      </div>
      <div className={styles["project-description"]}>
        <div className={styles["title"]}>
          <p
            style={{ fontSize: "250%", marginBottom: "5px" }}
            className={styles["neonText"]}
          >
            {props.title}
          </p>
          <span className={`${styles["redirect-link"]}`}>
            <a href={props.github} target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>

            <a href={props.live} target="_blank">
              <i className={`fa-solid fa-arrow-up-right-from-square`}></i>
            </a>
          </span>
        </div>
        <p
          style={{ fontSize: "90%", fontStyle: "italic", marginBottom: "10px" }}
        >
          {props.belowTitle}
        </p>
        <ul style={{ fontSize: "88%" }}>
          {points.map((i, key) => {
            return <li key={key}>{i}</li>;
          })}
        </ul>
        <table>
          <thead>
            <td></td>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ProjectCard;
