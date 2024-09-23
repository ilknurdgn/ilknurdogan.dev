import React from "react";
import About from "../../components/about/About";
import { Skills } from "../../components/skills/Skills";
import { Projects } from "../../components/projects/Projects";

const Home = () => {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
