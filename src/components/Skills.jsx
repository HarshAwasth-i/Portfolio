import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiVite,
} from "react-icons/si";

const skillCategories = ["All", "Frontend", "Backend", "Languages", "Tools"];

const skills = [
  { name: "React", category: "Frontend", icon: <FaReact size={36} className="text-cyan-400" />, level: "Advanced" },
  { name: "JavaScript", category: "Languages", icon: <SiJavascript size={36} className="text-yellow-400" />, level: "Proficient" },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss size={36} className="text-cyan-300" />, level: "Advanced" },
  { name: "HTML5", category: "Frontend", icon: <FaHtml5 size={36} className="text-orange-500" />, level: "Advanced" },
  { name: "CSS3", category: "Frontend", icon: <FaCss3Alt size={36} className="text-blue-400" />, level: "Proficient" },
  { name: "Vite", category: "Tools", icon: <SiVite size={36} className="text-violet-400" />, level: "Proficient" },

  { name: "Node.js", category: "Backend", icon: <FaNodeJs size={36} className="text-emerald-500" />, level: "Proficient" },
  { name: "Express.js", category: "Backend", icon: <SiExpress size={36} className="text-slate-200" />, level: "Proficient" },
  { name: "MySQL", category: "Backend", icon: <SiMysql size={36} className="text-blue-400" />, level: "Proficient" },

  { name: "Java", category: "Languages", icon: <FaJava size={36} className="text-red-400" />, level: "DSA & Core" },
  { name: "Python", category: "Languages", icon: <FaPython size={36} className="text-amber-300" />, level: "Intermediate" },

  { name: "Git", category: "Tools", icon: <FaGitAlt size={36} className="text-orange-500" />, level: "Version Control" },
  { name: "GitHub", category: "Tools", icon: <FaGithub size={36} className="text-slate-100" />, level: "Collaboration" },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2">
            My Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="w-16 h-16 rounded-xl bg-slate-950/70 border border-slate-800/60 flex items-center justify-center group-hover:scale-110 transition duration-300">
                {skill.icon}
              </div>

              <h3 className="mt-4 text-base font-semibold text-white">
                {skill.name}
              </h3>

              <span className="mt-1 text-xs text-slate-400 font-medium">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;