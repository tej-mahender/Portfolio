import React from 'react'

function SkillBlock({ title, skills }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-gray-200 text-sm px-3 py-1 rounded-full hover:bg-gray-300 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillBlock
