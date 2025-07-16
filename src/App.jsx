import React from "react";
import Header from "./sections/Header";
import HeroSection from "./sections/Hero";
import {ProjectSection} from "./sections/Projects";
const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectSection/>
    </div>
  );
};

export default App;
