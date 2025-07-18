import React from 'react'
import Skills from '../skills/Skills';
import { Link } from 'react-router-dom';
function About() {
  return (
    <div>
      <section id="about" className="min-h-screen bg-[#f9f9f9] p-10">
        <div className="max-w-7xl mx-auto text-center space-y-6 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Me</h2>
          <p className="text-lg md:text-xl text-gray-700">
            Hey! I'm <strong>Tej Mahendra</strong>, a final-year <strong>Computer Science</strong> student passionate about <strong>problem-solving</strong>, <strong>building from scratch</strong>, and exploring <strong>deep tech</strong>.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            I've tried my hands on <strong>full-stack development</strong>, <strong>backend systems</strong>, <strong>database design</strong>, and even explored the world of <strong>AI/ML</strong> — turning ideas into real, working products.
          </p>

          <Link
          to="/know-more"
          className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-gray-500 to-stone-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          Dive Deeper →
        </Link>
      <Skills />
      </div>
      </section>

    </div>
  );
}

export default About;
