import React from "react";
import "./App.css";

import Social from "./components/utils/social";
import Squares from "./components/animations/squares";

import Portfolio from "./components/portfolio";

const App = () => {
  return (
    <>
      <Squares />
      <Social />
      <Portfolio />
    </>
  );
};

export default App;
