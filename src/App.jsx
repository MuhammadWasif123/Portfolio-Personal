import React from "react";
import Header from "./sections/Header";
import HeroSection from "./sections/Hero";
import {ProjectSection} from "./sections/Projects";
import {TapeSection} from "./sections/TapeSection"
import TestimmonialSection from "./sections/TestimonialSection"
import { AboutSection } from "./sections/About";

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectSection/>
      <TapeSection/>
      <TestimmonialSection/>
      <AboutSection/>

    </div>
  );
};

export default App;
