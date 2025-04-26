import React from 'react'

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
      onClick={() => onClick(project)}
    >
      {project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      ) : (
        <iframe
          src={project.iframe}
          className="w-full h-48 border-0"
          title={project.title}
        ></iframe>
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-white">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-gray-800 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-2 text-blue-600 text-sm">
          <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
          <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
