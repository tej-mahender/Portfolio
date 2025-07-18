import React from "react";

function KnowMore() {
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Education Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Education
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 mb-10 rounded" />

        {/* Timeline */}
        <div className="relative pl-6 border-l-[3px] border-purple-400 space-y-12">
          {/* B.Tech */}
          <div>
            <h3 className="text-indigo-600 font-semibold text-sm">2022 – Present</h3>
            <h2 className="text-xl font-bold mt-1">
              Bachelor of Technology (Computer Science and Engineering)
            </h2>
            <p className="italic text-gray-600">
              Prasad V. Potluri Siddhartha Institute of Technology
            </p>
            <p className="text-gray-800 mt-1">
              <strong>CGPA:</strong> 9.29
            </p>
          </div>

          {/* Intermediate */}
          <div>
            <h3 className="text-indigo-600 font-semibold text-sm">2020 – 2022</h3>
            <h2 className="text-xl font-bold mt-1">
              Intermediate (Mathematics, Physics, Chemistry)
            </h2>
            <p className="italic text-gray-600">
              Sri Sarada Educational Institutions
            </p>
            <p className="text-gray-800 mt-1">
              <strong>Percentage:</strong> 95.8%
            </p>
          </div>

          {/* School */}
          <div>
            <h3 className="text-indigo-600 font-semibold text-sm">2020</h3>
            <h2 className="text-xl font-bold mt-1">Secondary Schooling</h2>
            <p className="italic text-gray-600">
              St John's EM High School
            </p>
            <p className="text-gray-800 mt-1">
              <strong>Percentage:</strong> 97.8%
            </p>
          </div>
        </div>

        {/* Co-Curricular Activities */}
        <h2 className="text-3xl font-bold mt-20 mb-6 text-center text-gray-900">Co-Curricular Activities</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Smart India Hackathon 2023 – National Finalist</li>
          <li>Completed AI/ML workshop by NASSCOM & APSSDC</li>
          <li>Technical paper presented at TechVerse 2024</li>
          <li>Volunteered for college fests and coding events</li>
        </ul>
      </div>
    </div>
  );
}

export default KnowMore;
