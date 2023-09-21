import { useRef } from "react";
import styles from "./portfolio.module.css";
import Header from "./utils/header";

import Home from "./home";
import Projects from "./projects";
import Skills from "./skills";
import GetInTouch from "./getInTouch";

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
        <GetInTouch />
      </div>
    </>
  );
};

export default Portfolio;
