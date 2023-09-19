import styles from "./portfolio.module.css";
import Home from "./home";
import Projects from "./projects";
import Skills from "./skills";
import Header from "./utils/header";
import { useRef } from "react";

const Portfolio = () => {
  const scrollableDivRef = useRef(null);

  const handleOptionClick = (scrollAmount) => {
    scrollableDivRef.current.scrollTop = scrollAmount;
  };

  return (
    <>
      <Header onOptionClick={handleOptionClick} />
      <div ref={scrollableDivRef} className={styles["portfolio"]}>
        <Home />
        <Projects />
        <Skills />
      </div>
    </>
  );
};

export default Portfolio;
