import React from "react";
import "./App.css";

import Header from "./components/utils/header";
import Social from "./components/utils/social";
import Squares from "./components/animations/squares";

import Portfolio from "./components/portfolio";

const App = () => {
  return (
    <>
      <Squares />
      <Social />
      <Header />
      <Portfolio />
    </>
  );
};

export default App;
