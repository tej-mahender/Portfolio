import React, { useState } from 'react'
import ProjectCard from '../projectCard/ProjectCard'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'My Portfolio',
      description: 'A responsive portfolio built using React and Tailwind.',
      image: '/images/portfolio.png',
      tech: ['React', 'TailwindCSS'],
      live: 'https://tejmahendra.dev',
      code: 'https://github.com/tejmahendra/portfolio',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather app using OpenWeather API.',
      iframe: 'https://your-weather-app.netlify.app',
      tech: ['React', 'API', 'CSS'],
      live: 'https://your-weather-app.netlify.app',
      code: 'https://github.com/tejmahendra/weather-app',
    },
    // Add more projects here
  ]

  return (
    <section id="projects" className="p-10 bg-[#f9f9f9] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="mb-4 text-gray-600">{selectedProject.description}</p>
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded w-full mb-4"
                />
              ) : (
                <iframe
                  src={selectedProject.iframe}
                  className="w-full h-64 mb-4 border"
                  title={selectedProject.title}
                ></iframe>
              )}
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-800 text-white px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-blue-600">
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                  Live Site
                </a>
                <a href={selectedProject.code} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
