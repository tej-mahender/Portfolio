import { useParams } from "react-router-dom";
import projects from "./projectData";
import { useState } from "react";
import { FaCalendarAlt, FaUserTie, FaCheckCircle, FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";

import "./ProjectDetail.css"; // Importing the CSS file

const TABS = ["Overview", "Features", "Challenges & Solutions"];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("Overview");

  if (!project) return <div className="not-found">Project not found.</div>;

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <ul>
            {project.features?.map((f, idx) => <li key={idx}>{f}</li>)}
          </ul>
        );
      case "Challenges & Solutions":
        return (
          <ul>
            {project.challenges?.map((c, idx) => <li key={idx}>{c}</li>)}
          </ul>
        );
      default:
        return <p>{project.description}</p>;
    }
  };

  return (
    <div className="project-container">
      {/* Left Section */}
      <div className="project-left">
        <h1 className="project-title">{project.title}</h1>
        <div className="tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {renderTabContent()}
        </div>

      {/* Gallery */}
        {project.gallery?.length > 0 && (
          <div className="gallery">
            <h3 className="gallery-title">Project Gallery</h3>
            <div className="gallery-grid">
              {project.gallery.map((img, idx) => (
                <img key={idx} src={img} alt={`Screenshot ${idx + 1}`} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
<div className="project-sidebar">
  <h2>Project Details</h2>
  <p><FaCalendarAlt className="icon" /> <strong>Timeline:</strong> {project.timeline}</p>
  <p><FaUserTie className="icon" /> <strong>Role:</strong> {project.role}</p>
  <p><FaCheckCircle className="icon" /> <strong>Completed:</strong> {project.completed}</p>

  <div className="project-buttons">
    {project.live && (
      <a href={project.live} target="_blank" rel="noreferrer" className="live-button">
        <FaExternalLinkAlt className="icon" /> View Live Project
      </a>
    )}
    {project.code && (
      <a href={project.code} target="_blank" rel="noreferrer" className="code-button">
        <FaCodeBranch className="icon" /> View Source Code
      </a>
    )}
  </div>
</div>

    </div>
  );
};

export default ProjectDetail;
