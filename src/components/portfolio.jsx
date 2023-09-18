import styles from "./portfolio.module.css";
import Home from "./home";
import Projects from "./projects";
import Skills from "./skills";

const Portfolio = () => {
  return (
    <div className={styles["portfolio"]}>
      <Home />
      <Projects />
      <Skills />
    </div>
  );
};

export default Portfolio;
