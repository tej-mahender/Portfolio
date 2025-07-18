//ProjectCard.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {

  const navigate = useNavigate();

  const handleClick = () => {
  console.log("Navigating to:", project.slug);
  navigate(`/project/${project.slug}`);
  };

  return (

   <div
      onClick={handleClick}
      className="project-card bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      {project.iframe ? (
        <iframe
          src={project.iframe}
          className="w-full h-48 border-0 rounded-t-2xl"
          title={project.title}
          scrolling="no"
        />
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-500">
          No preview
        </div>
      )}
      <div className="content">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-gray-800 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
