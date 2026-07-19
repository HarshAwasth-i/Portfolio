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

const skills = [
  { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Express", icon: <SiExpress size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava size={40} className="text-red-500" /> },
  { name: "Python", icon: <FaPython size={40} className="text-yellow-300" /> },
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-300" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "Vite", icon: <SiVite size={40} className="text-violet-400" /> },
];

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-900 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition duration-300"
            >
              {skill.icon}

              <h3 className="mt-5 text-lg font-semibold text-white">
                {skill.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;