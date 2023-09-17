import styles from "../components.module.css";

const SkillCard = (props) => {
  return (
    <div className={styles["skill-box"]}>
      <img src={props.location} />
    </div>
  );
};

export default SkillCard;
