import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech in Computer Science",
    icon: <FaGraduationCap />,
    description:
      "Began my journey in Computer Science with a strong interest in software development and problem solving.",
  },
  {
    year: "2026",
    title: "Software Development Internship",
    icon: <FaBriefcase />,
    description:
      "Completed an internship focused on AI-powered software testing and web application development.",
  },
  {
    year: "2026-27",
    title: "Building projects and enhancing skills",
    icon: <FaCode />,
    description:
      "Developed projects including a Job Portal, Devsync and AI Resume Analyzer.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Experience
        </h2>

        <div className="relative border-l-2 border-blue-500 ml-6">

          {timeline.map((item, index) => (
            <div key={index} className="mb-16 ml-10">

              <div className="absolute -left-5 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                {item.icon}
              </div>

              <span className="text-cyan-400 font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold text-white mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;