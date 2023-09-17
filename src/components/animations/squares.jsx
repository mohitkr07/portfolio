import styles from "./animations.module.css";

const Squares = () => {
  return (
    <div className={styles["animate"]}>
      <div className={styles["area"]}>
        <ul className={styles["circles"]}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default Squares;
