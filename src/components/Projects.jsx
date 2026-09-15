import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import devsync from "../assets/images/devsync.png";
import jobportal from "../assets/images/jobportal.png";
import taskpulse from "../assets/images/taskpulse.png";

const projects = [
  {
    title: "DevSync",
    image: devsync,
    description:
      "A full-stack project management platform inspired by Trello and Jira. Features Kanban boards, task tracking, analytics dashboard, role-based JWT authentication, and team collaboration workflows.",
    tech: ["React", "Node.js", "Express", "MySQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/HarshAwasth-i/DevSync",
    live: "https://dev-sync-roan.vercel.app",
    featured: true,
  },
  {
    title: "Job Portal",
    image: jobportal,
    description:
      "A responsive full-stack job application platform featuring role-based authentication, candidate & recruiter dashboards, job listings, application status tracking, and RESTful API endpoints.",
    tech: ["React", "Node.js", "Express", "MySQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/HarshAwasth-i/Job-portal",
    live: "https://job-portal-drab-xi.vercel.app",
    featured: false,
  },
  {
    title: "TaskPulse",
    image: taskpulse,
    description:
      "A scalable task management system with real-time tracking and progress analytics. Built with responsive dashboards and optimized RESTful APIs for efficient task creation, updates, filtering, and retrieval.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/HarshAwasth-i/Task-Pulse",
    live: "https://developer-practice-delta.vercel.app/",
    featured: false,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2">
            Selected Works
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative rounded-2xl overflow-hidden flex flex-col bg-slate-900/80 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                project.featured
                  ? "border-cyan-500/60 shadow-cyan-500/10"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Featured Ribbon */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md">
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Project Image Container */}
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800/90 text-cyan-300 border border-slate-700/60"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-800/80">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition shadow-sm"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    Live Demo
                    <FaExternalLinkAlt className="text-xs" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-sm font-semibold py-2.5 px-4 rounded-xl border border-slate-700 transition"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;