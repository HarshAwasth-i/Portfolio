import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaDatabase,
  FaNetworkWired,
  FaVial,
  FaCube,
  FaSyncAlt,
  FaCloud,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiJsonwebtokens,
} from "react-icons/si";

const skillCategories = [
  "All",
  "Languages",
  "Frontend",
  "Backend & APIs",
  "Databases",
  "Tools & Practices",
];

const skills = [
  // Languages
  {
    name: "C++",
    category: "Languages",
    icon: <SiCplusplus size={36} className="text-blue-500" />,
    level: "DSA & Core",
    desc: "Problem Solving & OOP",
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: <SiJavascript size={36} className="text-yellow-400" />,
    level: "Proficient",
    desc: "ES6+, Modern Web Logic",
  },

  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    icon: <FaReact size={36} className="text-cyan-400" />,
    level: "Advanced",
    desc: "Hooks, SPA, Component Architecture",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss size={36} className="text-cyan-300" />,
    level: "Advanced",
    desc: "Responsive & Modern UI",
  },
  {
    name: "HTML / CSS",
    category: "Frontend",
    icon: <FaHtml5 size={36} className="text-orange-500" />,
    level: "Advanced",
    desc: "Semantic Structure & Styling",
  },

  // Backend & APIs
  {
    name: "Node.js",
    category: "Backend & APIs",
    icon: <FaNodeJs size={36} className="text-emerald-500" />,
    level: "Proficient",
    desc: "Runtime & Asynchronous Logic",
  },
  {
    name: "Express.js",
    category: "Backend & APIs",
    icon: <SiExpress size={36} className="text-slate-200" />,
    level: "Proficient",
    desc: "Backend Middleware & Routing",
  },
  {
    name: "RESTful APIs",
    category: "Backend & APIs",
    icon: <FaNetworkWired size={36} className="text-indigo-400" />,
    level: "Architecture",
    desc: "Scalable API Design & CRUD",
  },
  {
    name: "JWT (JSON Web Tokens)",
    category: "Backend & APIs",
    icon: <SiJsonwebtokens size={36} className="text-pink-400" />,
    level: "Security",
    desc: "Auth & Role-Based Access",
  },

  // Databases
  {
    name: "MySQL",
    category: "Databases",
    icon: <SiMysql size={36} className="text-blue-400" />,
    level: "Relational DB",
    desc: "Complex Queries & Indexing",
  },
  {
    name: "TiDB Cloud",
    category: "Databases",
    icon: <FaCloud size={36} className="text-sky-400" />,
    level: "Distributed SQL",
    desc: "Cloud Database Deployment",
  },
  {
    name: "Database Design",
    category: "Databases",
    icon: <FaDatabase size={36} className="text-teal-400" />,
    level: "Management",
    desc: "Schema Normalization & ERD",
  },

  // Tools & Practices
  {
    name: "Git & GitHub",
    category: "Tools & Practices",
    icon: <FaGithub size={36} className="text-slate-100" />,
    level: "Version Control",
    desc: "Branching, PRs & Collaboration",
  },
  {
    name: "CI / CD",
    category: "Tools & Practices",
    icon: <FaSyncAlt size={36} className="text-cyan-400" />,
    level: "DevOps",
    desc: "Automated Deployments",
  },
  {
    name: "UI Test Automation",
    category: "Tools & Practices",
    icon: <FaVial size={36} className="text-purple-400" />,
    level: "Testing",
    desc: "Software Quality & Verification",
  },
  {
    name: "OOP & Architecture",
    category: "Tools & Practices",
    icon: <FaCube size={36} className="text-amber-400" />,
    level: "Core Principles",
    desc: "Clean Code & Design Patterns",
  },
  {
    name: "Agile Collaboration",
    category: "Tools & Practices",
    icon: <FaGitAlt size={36} className="text-orange-500" />,
    level: "Methodology",
    desc: "Iterative Sprints & Teamwork",
  },
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
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Core competencies spanning full-stack web engineering, database architecture, algorithms in C++, and modern software development methodologies.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="w-16 h-16 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/30 transition duration-300">
                {skill.icon}
              </div>

              <h3 className="mt-4 text-base font-bold text-white tracking-tight">
                {skill.name}
              </h3>

              <span className="mt-1 px-2.5 py-0.5 rounded-full bg-slate-800/80 text-[11px] text-cyan-300 font-medium border border-slate-700/60">
                {skill.level}
              </span>

              <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;