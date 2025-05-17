import React from 'react'
import {
  SiCplusplus, SiC, SiJavascript, SiReact, SiHtml5, SiCss3,
  SiBootstrap, SiLinux, SiGit, SiGithub, SiNotion
} from 'react-icons/si'
import { VscVscode } from "react-icons/vsc";


const skillIcons = {
  'C++': <SiCplusplus className="text-blue-600" />,
  'C': <SiC className="text-blue-500" />,
  'JavaScript': <SiJavascript className="text-yellow-400" />,
  'React.js': <SiReact className="text-cyan-400" />,
  'HTML': <SiHtml5 className="text-orange-500" />,
  'CSS': <SiCss3 className="text-blue-500" />,
  'Bootstrap': <SiBootstrap className="text-purple-500" />,
  'Linux': <SiLinux className="text-black" />,
  'Git': <SiGit className="text-red-500" />,
  'GitHub': <SiGithub className="text-gray-800" />,
  'Visual Studio Code': <VscVscode  className="text-blue-400" />,
  'Notion': <SiNotion className="text-black" />
}

function SkillBlock({ title, skills }) {
  return (
    <div
      className="p-5 rounded-xl shadow bg-white hover:shadow-md transition"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-800 hover:bg-gray-200 transition cursor-pointer"
          >
            {skillIcons[skill] || null}
            {skill}
    
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillBlock
