import styles from "./components.module.css";

const Home = () => {
  return (
    <>
      <div className={`${styles["home"]} ${styles["page"]}`}>
        <div className={styles["home-content"]}>
          <div className={styles["home-left"]}>
            <div className={styles["profile-pic"]}>
              <img src="images/mumbai.jpg" />
            </div>
          </div>
          <div className={styles["home-right"]}>
            <p
              style={{
                textAlign: "left",
                marginBottom: "10px",
                fontSize: "200%",
              }}
            >
              Hi There!
            </p>
            <span>
              {/* <h3 style={{  marginRight: "20px", fontSize: "150%" }}>I'm</h3> */}
              <h1
                style={{ fontSize: "3em", color: "#fff", marginBottom: "10px" }}
              >
                I'm Mohit
              </h1>
            </span>
            <p style={{ textAlign: "left", color: "#fff" }}>
              I turn Ideas into Reality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
