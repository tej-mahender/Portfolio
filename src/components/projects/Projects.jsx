// Projects.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from './projectData';
// import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // const projects = [
  //   {
  //     title: 'Resolink',
  //     description:
  //       'Responsive web application to share and explore educational and development resources.',
  //     iframe: 'https://resolink.vercel.app/',
  //     tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  //     live: 'https://resolink.vercel.app/',
  //     code: 'https://github.com/tej-mahender/Resource-Sharing-Platform',
  //   },
  //   {
  //     title: 'SchedGuru',
  //     description:
  //       'Smart web app for managing faculty schedules and automating exam seating in academic institutions.',
  //     iframe: 'https://sched-guru.vercel.app/',
  //     tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  //     live: 'https://sched-guru.vercel.app/',
  //     code: 'https://github.com/tej-mahender/Resource-Sharing-Platform',
  //   },
  //   {
  //     title: 'Agri Advisor',
  //     description:
  //       'Java-based Android app integrating ML, Firebase, and weather APIs to deliver real-time, data-driven crop recommendations for farmers.',
  //     tech: ['Java', 'XML', 'Firebase', 'ML'],
  //     code: 'https://github.com/tej-mahender/Agri-Advisor',
  //   },
  //   {
  //     title: 'Lung Cancer',
  //     description:
  //       'ML model that predicts lung cancer using logistic regression, based on symptoms and lifestyle data, with 96.77% accuracy.',
  //     tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
  //     code: 'https://github.com/tej-mahender/LungCancerDetection',
  //   },
  //   {
  //     title: 'Crop Recommendation & Yield Prediction',
  //     description:
  //       'Dual-model system that recommends crops and predicts yields based on soil and climate data.',
  //     tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
  //     code: 'https://github.com/tej-mahender/LungCancerDetection',
  //   },
  // ];

  return (
    // <section id="projects" className="p-10 bg-gradient-to-br from-[#f9f9f9] to-[#eef2f7] min-h-screen">
    //   <div className="max-w-6xl mx-auto">
    //     <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center">
    //       Things I’ve Built
    //     </h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {projects.map((project, index) => (
    //         <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
    //       ))}
    //     </div>

    //     <AnimatePresence>
    //       {selectedProject && (
    //         <motion.div
    //           className="fixed inset-0 backdrop-blur bg-black/50 z-50 flex items-center justify-center px-4"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //           onClick={() => setSelectedProject(null)}
    //         >
    //           <motion.div
    //             className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
    //             initial={{ scale: 0.9, opacity: 0 }}
    //             animate={{ scale: 1, opacity: 1 }}
    //             exit={{ scale: 0.9, opacity: 0 }}
    //             onClick={(e) => e.stopPropagation()}
    //           >
    //             <button
    //               className="absolute top-3 right-4 text-gray-400 hover:text-gray-800 text-2xl"
    //               onClick={() => setSelectedProject(null)}
    //             >
    //               &times;
    //             </button>
    //             <h3 className="text-3xl font-bold mb-4 text-gray-800">
    //               {selectedProject.title}
    //             </h3>
    //             <p className="text-gray-600 mb-4 text-sm leading-relaxed">
    //               {selectedProject.description}
    //             </p>
    //             {selectedProject.iframe && (
    //               <iframe
    //                 src={selectedProject.iframe}
    //                 className="w-full h-72 border rounded mb-4"
    //                 title={selectedProject.title}
    //               ></iframe>
    //             )}
    //             <div className="flex flex-wrap gap-2 text-sm mb-4">
    //               {selectedProject.tech.map((tech, i) => (
    //                 <span key={i} className="bg-gray-800 text-white px-2 py-1 rounded-full">
    //                   {tech}
    //                 </span>
    //               ))}
    //             </div>
    //             <div className="flex gap-4 text-blue-600 font-medium">
    //               {selectedProject.live && (
    //                 <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
    //                   Live Site
    //                 </a>
    //               )}
    //               {selectedProject.code && (
    //                 <a href={selectedProject.code} target="_blank" rel="noopener noreferrer">
    //                   Code
    //                 </a>
    //               )}
    //             </div>
    //           </motion.div>
    //         </motion.div>
    //       )}
    //     </AnimatePresence>
    //   </div>
    // </section>
        <section id="projects" className="p-10 bg-gradient-to-br from-[#f9f9f9] to-[#eef2f7] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center">
          Things I’ve Built
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
