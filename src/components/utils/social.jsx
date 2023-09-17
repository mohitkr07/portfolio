import styles from "./utils.module.css";

const Social = () => {
  return (
    <>
      <div className={styles["social"]}>
        <hr></hr>
        <div className={styles["social-icons"]}>
          <a
            href="https://www.linkedin.com/in/mohitkumar-mahto-7016311b7/"
            target="_blank"
          >
            <i className={`fa-xl fa-brands fa-linkedin-in ${styles["icon"]}`} />
          </a>
          <a href="https://github.com/mohitkr07" target="_blank">
            <i className={`fa-xl fa-brands fa-github ${styles["icon"]}`} />
          </a>
          <a href="https://www.instagram.com/mohit_kr07/" target="_blank">
            <i className={`fa-brands fa-instagram fa-xl ${styles["icon"]}`} />
          </a>
        </div>
        <hr style={{ height: "15rem" }}></hr>
      </div>
    </>
  );
};

export default Social;
