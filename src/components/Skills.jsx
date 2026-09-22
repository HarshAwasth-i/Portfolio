const skillCategories = [
  {
    title: "Languages",
    color: "bg-custom-pink",
    skills: ["C++", "JavaScript", "Python", "SQL", "HTML5 / CSS3"],
  },
  {
    title: "Frontend Development",
    color: "bg-custom-blue",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Component Architecture",
      "Responsive Layouts",
      "Single Page Applications",
    ],
  },
  {
    title: "Backend & APIs",
    color: "bg-custom-green",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "JWT Authentication",
      "Middleware & Routing",
    ],
  },
  {
    title: "Databases & Cloud",
    color: "bg-custom-yellow",
    skills: [
      "MySQL",
      "TiDB Cloud",
      "Database Normalization",
      "ER Modeling",
      "SAP CAP Basics",
    ],
  },
  {
    title: "Core CS Concepts",
    color: "bg-purple-300",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "DBMS Architecture",
      "Computer Networks",
    ],
  },
  {
    title: "Tools & Strengths",
    color: "bg-custom-red",
    skills: [
      "Git & GitHub",
      "Postman",
      "CI / CD Deployments",
      "Problem Solving",
      "Agile Sprints",
    ],
  },
];

function SkillCard({ title, color, skills }) {
  return (
    <div className="bg-white border-4 border-black p-5 rounded-2xl shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden flex flex-col justify-between">
      <div>
        <h3
          className={`font-shrikhand text-xl mb-3.5 ${color} inline-block px-3 py-0.5 border-2 border-black rounded-md text-black tracking-wide`}
        >
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 px-3 py-1 rounded-full border-2 border-black text-xs sm:text-sm font-bold text-black hover:bg-custom-green hover:rotate-1 transition-all cursor-default shadow-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-10 px-4 max-w-7xl mx-auto bg-custom-pink border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo"
    >
      {/* Title Badge */}
      <div className="bg-custom-yellow text-black px-8 py-3 rounded-full border-4 border-black w-fit mx-auto mb-10 shadow-neo">
        <h2 className="text-3xl font-shrikhand tracking-wide">SKILLS</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.title} {...cat} />
        ))}
      </div>
    </section>
  );
}

export default Skills;