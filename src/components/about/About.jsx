import React from 'react'
// import SkillBlock from '../skillBlock/SkillBlock'
import Skills from '../skills/Skills';
function About() {
  return (
    <div>
      <section id="about" className="min-h-screen bg-[#f9f9f9] p-10">
        <div className="max-w-7xl mx-auto text-left space-y-4 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Me</h2>
          <p className="text-lg md:text-xl text-gray-700">
            Hey! I'm Tej Mahendra, a final-year Computer Science student who loves solving problems, building things from scratch, and diving deep into technology.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            Over the past few years, I've explored various domains including full-stack web development, backend systems, and database design. I enjoy bringing ideas to life through code, whether it's a web app, a command-line tool, or a backend API.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            I'm also involved in tech communities, mentoring peers as a Web Domain Master in the Google Developer Group at my campus.
          </p>

          <a
            href="/TejMahendra.pdf"
            download
            className="inline-block mt-4 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        
      {/* <section id="skills" className="m-">
        <div className="max-w-7xl mx-auto text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Skills</h2>
          <SkillBlock title="Languages" skills={['C++', 'C', 'JavaScript', 'SQL']} />
          <SkillBlock title="Technologies" skills={['React.js', 'HTML', 'CSS', 'Bootstrap', 'Linux']} />
          <SkillBlock title="Concepts" skills={['OOPs', 'DSA', 'Operating Systems', 'Computer Networks']} />
          <SkillBlock title="Tools" skills={['Git', 'GitHub', 'Visual Studio Code', 'Notion']} />
        </div>
      </section> */}
      <Skills />
      </div>
      </section>

    </div>
  );
}

export default About;
