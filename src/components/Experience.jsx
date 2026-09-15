import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

const timeline = [
  {
    year: "2023 – Present",
    tag: "Education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "KIIT University, Bhubaneswar",
    icon: <FaGraduationCap className="text-white text-base" />,
    iconBg: "bg-gradient-to-r from-blue-600 to-cyan-500",
    description:
      "Studying core computer science fundamentals including Data Structures & Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Programming while developing full-stack web applications.",
  },
  {
    year: "2026",
    tag: "Internship",
    title: "Software Development Intern",
    organization: "Industry Internship",
    icon: <FaBriefcase className="text-white text-base" />,
    iconBg: "bg-gradient-to-r from-cyan-500 to-emerald-500",
    description:
      "Contributed to software engineering workflows, engaging in AI-driven software testing, full-stack application development, API integration, and agile collaboration.",
  },
  {
    year: "Ongoing",
    tag: "Projects & DSA",
    title: "Full-Stack Web Architect & Problem Solver",
    organization: "Self-Driven Development",
    icon: <FaCode className="text-white text-base" />,
    iconBg: "bg-gradient-to-r from-indigo-500 to-purple-600",
    description:
      "Architected and deployed production-grade projects including DevSync (Kanban project manager), a role-based Job Portal, and TaskPulse (scalable task tracking platform) while continuously solving algorithmic challenges.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Experience &amp; Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              {/* Timeline Circular Icon Node - fixed alignment */}
              <div
                className={`absolute -left-[21px] top-1.5 w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center shadow-lg shadow-cyan-500/10 ring-4 ring-slate-950 transition-transform duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </div>

              {/* Card Body */}
              <div className="bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.year}
                  </span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mt-2">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-blue-400 mt-1">
                  {item.organization}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;