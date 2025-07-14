import { useParams } from "react-router-dom";
import projects from "./projectData";
import { useState } from "react";

const TABS = ["Overview", "Features", "Challenges & Solutions"];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("Overview");

  if (!project) return <div className="p-10 text-white">Project not found.</div>;

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <ul className="list-disc list-inside space-y-2">
            {project.features?.map((f, idx) => <li key={idx}>{f}</li>)}
          </ul>
        );
      case "Challenges & Solutions":
        return (
          <ul className="list-disc list-inside space-y-2">
            {project.challenges?.map((c, idx) => <li key={idx}>{c}</li>)}
          </ul>
        );
      default:
        return <p>{project.description}</p>;
    }
  };

  return (
    <div className="min-h-screen p-8 bg-black text-white grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10">
      {/* Left Section */}
      <div>
        <div className="flex space-x-6 border-b border-gray-700 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-2 font-medium border-b-2 ${
                activeTab === tab
                  ? "border-white text-white"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="text-gray-300 leading-relaxed space-y-4">
          {renderTabContent()}
        </div>
      </div>

      {/* Sidebar */}
      <div className="bg-[#111] rounded-xl p-6 space-y-3 border border-gray-800">
        <h2 className="text-xl font-bold mb-2">Project Details</h2>
        <p><strong>Timeline:</strong> {project.timeline}</p>
        <p><strong>Role:</strong> {project.role}</p>
        <p><strong>Completed:</strong> {project.completed}</p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-white text-black rounded-lg text-center font-semibold"
            >
              View Live
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-white rounded-lg text-center font-semibold"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
