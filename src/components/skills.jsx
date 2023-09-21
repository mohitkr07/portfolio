import styles from "./components.module.css";
import SkillCard from "./utils/skillcard";
import styles1 from "./utils/utils.module.css"

const Skills = () => {
  return (
    <>
      <div className={`${styles["skills"]} ${styles["page"]}`}>
        <div className={styles["title"]}>
          <p style={{ color: "#fff" }}>SKILLS</p>
          <hr></hr>
        </div>
        <div className={`${styles["skill-list"]} ${styles["neonText"]}`}>
          <SkillCard location="icons/react-js.svg" />
          <SkillCard location="icons/javascript.svg" />
          <SkillCard location="icons/nodejs2.svg" />
          <SkillCard location="icons/html5.svg" />
          <SkillCard location="icons/css.svg" />
          <SkillCard location="icons/git.svg" />
          <SkillCard location="icons/redux.svg" />
          <SkillCard location="icons/mongodb.svg" />
          <SkillCard location="icons/mysql.svg" />
          <SkillCard location="icons/c++.svg" />
        </div>
      </div>
    </>
  );
};

export default Skills;
