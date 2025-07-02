import React, { useState } from 'react'
import ProjectCard from '../projectCard/ProjectCard'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Resolink',
      description: 'Responsive web application to share and explore educational and development resources.',
      iframe: 'https://resolink.vercel.app/',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      live: 'https://resolink.vercel.app/',
      code: 'https://github.com/tej-mahender/Resource-Sharing-Platform',
    },
    {
      title: 'SchedGuru',
      description: 'Smart web app for managing faculty schedules and automating exam seating in academic institutions.',
      iframe: 'https://sched-guru.vercel.app/',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      live: 'https://sched-guru.vercel.app/',
      code: 'https://github.com/tej-mahender/Resource-Sharing-Platform',
    },
    {
      title: 'Agri Advisor',
      description: 'Java-based Android app integrating ML, Firebase, and weather APIs to deliver real-time, data-driven crop recommendations for farmers.',
      iframe: '',
      tech: ['Java', 'XML', 'Firebase', 'ML'],
      code: 'https://github.com/tej-mahender/Agri-Advisor',
    },
    {
      title: 'Lung Cancer',
      description: 'A machine learning model that predicts the likelihood of lung cancer using logistic regression, based on patient symptoms and lifestyle data, achieving 96.77% accuracy.',
      iframe: '',
      tech: ['Pyhton', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      code: 'https://github.com/tej-mahender/LungCancerDetection',
    },
     {
      title: 'Crop Recommendation & Yield Prediction',
      description: 'A dual-model machine learning system that recommends optimal crops and predicts expected yields based on soil, climate, and cultivation data, supporting sustainable farming practices.',
      iframe: '',
      tech: ['Pyhton', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      code: 'https://github.com/tej-mahender/LungCancerDetection',
    },
    // Add more projects here
  ]

  return (
    <section id="projects" className="p-10 bg-[#f9f9f9] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Some Things I’ve Built</h2>
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
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              <h3 className="text-3xl font-bold mb-4 text-gray-800">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>

              {selectedProject.iframe ? (
                <iframe
                  src={selectedProject.iframe}
                  className="w-full h-72 border rounded mb-4"
                  title={selectedProject.title}
                ></iframe>
              ) : (
                <div className="w-full h-72 bg-gray-200 flex items-center justify-center rounded mb-4 text-gray-600">
                  No preview available
                </div>
              )}

              <p className="text-gray-700 mb-4">{selectedProject.details}</p>

              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-800 text-white px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-blue-600 font-medium">
                {selectedProject.live && (
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                    Live Site
                  </a>
                )}
                {selectedProject.code && (
                  <a href={selectedProject.code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
