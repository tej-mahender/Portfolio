import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SkillBlock from '../skillBlock/SkillBlock'

const Skills = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section id="skills" className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <SkillBlock
            title="Languages"
            skills={['C++', 'C', 'JavaScript', 'SQL']}
          />
          <SkillBlock
            title="Technologies"
            skills={['React.js', 'HTML', 'CSS', 'Bootstrap', 'Linux']}
          />
          <SkillBlock
            title="Concepts"
            skills={['OOPs', 'DSA', 'Operating Systems', 'Computer Networks']}
          />
          <SkillBlock
            title="Tools"
            skills={['Git', 'GitHub', 'Visual Studio Code', 'Notion']}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills;

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaLinux, FaJava, FaPython } from 'react-icons/fa';
// import { SiCplusplus, SiJavascript, SiBootstrap, SiNotion, SiTensorflow, SiMongodb } from 'react-icons/si';

// const skillGroups = [
//   {
//     title: 'Languages',
//     icons: [
//       { icon: <SiCplusplus />, name: 'C++' },
//       { icon: <FaJava />, name: 'Java' },
//       { icon: <SiJavascript />, name: 'JavaScript' },
//       { icon: <FaPython />, name: 'Python' },
//     ],
//   },
//   {
//     title: 'Frontend',
//     icons: [
//       { icon: <FaReact />, name: 'React.js' },
//       { icon: <FaHtml5 />, name: 'HTML' },
//       { icon: <FaCss3Alt />, name: 'CSS' },
//       { icon: <SiBootstrap />, name: 'Bootstrap' },
//     ],
//   },
//   {
//     title: 'Backend & DevOps',
//     icons: [
//       { icon: <FaLinux />, name: 'Linux' },
//       { icon: <SiMongodb />, name: 'MongoDB' },
//     ],
//   },
//   {
//     title: 'AI/ML',
//     icons: [
//       { icon: <SiTensorflow />, name: 'TensorFlow' },
//     ],
//   },
//   {
//     title: 'Tools',
//     icons: [
//       { icon: <FaGitAlt />, name: 'Git' },
//       { icon: <FaGithub />, name: 'GitHub' },
//       // { icon: < SiVisualstudiocode />, name: 'VS Code' },
//       { icon: <SiNotion />, name: 'Notion' },
//     ],
//   },
// ];

// const Skills = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   return (
//     <section id="skills" className="py-16 px-4 bg-white">
//       <div className="max-w-7xl mx-auto space-y-12">
//         <h2 className="text-4xl font-bold text-center text-gray-800">Skills</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {skillGroups.map((group, index) => (
//             <div key={index} data-aos="fade-up" className="text-center space-y-4">
//               <h3 className="text-xl font-semibold text-gray-700">{group.title}</h3>
//               <div className="flex flex-wrap justify-center gap-6 text-4xl text-gray-600">
//                 {group.icons.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="flex flex-col items-center text-sm text-gray-500 hover:text-black transition"
//                   >
//                     {item.icon}
//                     <span className="text-xs mt-1">{item.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

