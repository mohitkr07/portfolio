import React from "react";
import "./App.css";
import Home from "./components/home";
import Skills from "./components/skills";
import Projects from "./components/projects";

import Header from "./components/utils/header";
import Social from "./components/utils/social";
import Squares from "./components/animations/squares";

const App = () => {
  return (
    <>
      <Squares />
      <Social />
      <Header />
      <Home />
      <Projects />
      <Skills />
    </>
  );
};

export default App;
