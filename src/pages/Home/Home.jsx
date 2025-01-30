import React from "react";
import About from "../../components/about/About";
import { Skills } from "../../components/skills/Skills";
import { Projects } from "../../components/projects/Projects";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Footer />
    </div>
  );
};

export default Home;
