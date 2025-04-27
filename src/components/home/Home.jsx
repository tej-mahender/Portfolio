import React from "react";
import "./Home.css";
import NavBar from "../navbar/Navbar";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
    <header>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-logo" aria-level="1">
            Hello, I'm 
          </h1>
          <h2 className="home-main-title" aria-level="2">
            Tej Mahendra
          </h2>
          <p className="home-subtitle">
            A passionate software developer
          </p>
          </div>
      </div>
    </header>
    
    <NavBar/>

    <section id="about" className="min-h-screen bg-[#ddd] p-10">
        <About />
      </section>
      <section id="projects" className="min-h-screen bg-[#ccc] p-10">
        <Projects />
      </section>
      <section id="contact" className="bg-[#ccc] ">
        <Contact />
      </section>
    </>
  );
};

export default Home;
