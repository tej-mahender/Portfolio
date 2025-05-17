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
