import React from "react";
import "./Home.css";
import NavBar from "../navbar/Navbar";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Header from "../header/Header";
import { Typewriter } from "react-simple-typewriter";

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
            <Typewriter
                words={[
                  "a Passionate Software Developer",
                  "a Curious Problem Solver",
                  "a 4th Year CSE Student",
                  "someone who loves clean code"
                ]}
                loop={0} // 0 means infinite
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />         
             </p>
          </div>
      </div>
    </header>
    
    <NavBar/>
    <Header />


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
