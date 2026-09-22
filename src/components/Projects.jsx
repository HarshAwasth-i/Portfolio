import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import devsync from "../assets/images/devsync.png";
import jobportal from "../assets/images/jobportal.png";
import taskpulse from "../assets/images/taskpulse.png";

const projectsList = [
  {
    title: "DevSync",
    image: devsync,
    color: "bg-custom-blue",
    featured: true,
    tools: ["React", "Node.js", "Express", "MySQL", "JWT", "Tailwind CSS"],
    link: "https://github.com/HarshAwasth-i/DevSync",
    liveLink: "https://dev-sync-roan.vercel.app",
    description: [
      "Full-stack Kanban project management platform inspired by Trello and Jira.",
      "Integrated role-based JWT authentication, board analytics, and collaborative task tracking.",
      "Engineered optimized REST APIs for real-time status transitions and workspace isolation.",
    ],
  },
  {
    title: "Job Portal",
    image: jobportal,
    color: "bg-custom-green",
    featured: true,
    tools: ["React", "Node.js", "Express", "MySQL", "JWT", "REST API"],
    link: "https://github.com/HarshAwasth-i/Job-portal",
    liveLink: "https://job-portal-drab-xi.vercel.app",
    description: [
      "Comprehensive job platform with dual dashboards for recruiters and job seekers.",
      "Supports job posting, application filtering, resume submissions, and interview status tracking.",
      "Built with strict SQL relational schema and secure password hashing workflows.",
    ],
  },
  {
    title: "TaskPulse",
    image: taskpulse,
    color: "bg-custom-pink",
    featured: true,
    tools: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    link: "https://github.com/HarshAwasth-i/Task-Pulse",
    liveLink: "https://developer-practice-delta.vercel.app/",
    description: [
      "Scalable task coordination suite with progress analytics and deadline reminders.",
      "Designed dynamic filtering, sorting by priority, and instant status updates.",
      "Implemented modular backend micro-services with structured error handling.",
    ],
  },
];

function ProjectCard({ title, image, color, featured, tools, link, liveLink, description }) {
  return (
    <div className="bg-white border-4 border-black rounded-3xl p-5 sm:p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden flex flex-col justify-between">
      {/* Top Accent Strip */}
      <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`} />

      <div>
        {/* Card Header & Links */}
        <div className="mt-4 flex justify-between items-start mb-4 gap-2">
          <div>
            <h3 className="text-2xl font-shrikhand leading-tight text-black tracking-wide">
              {title}
            </h3>
            {featured && (
              <span className="bg-custom-red text-white text-[11px] font-mono font-bold px-2 py-0.5 border border-black rounded-md ml-1 animate-pulse inline-block mt-2 shadow-xs">
                FEATURED
              </span>
            )}
          </div>

          <div className="flex gap-2 flex-shrink-0">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="bg-custom-green text-black border-2 border-black p-2 rounded-lg hover:bg-green-400 transition-colors shadow-neo-sm hover:shadow-none"
                title="Live Demo"
              >
                <FaExternalLinkAlt className="text-sm" />
              </a>
            )}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white border-2 border-black p-2 rounded-lg hover:bg-gray-800 transition-colors shadow-neo-sm hover:shadow-none hover:text-custom-yellow"
              title="Source Code"
            >
              <FaGithub className="text-base" />
            </a>
          </div>
        </div>

        {/* Project Thumbnail */}
        {image && (
          <div className="w-full h-44 mb-4 rounded-xl border-2 border-black overflow-hidden bg-slate-900 shadow-sm relative group">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Tools Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="bg-gray-100 border border-black px-2 py-0.5 text-xs font-bold font-mono rounded-md text-black"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Bulleted Points */}
        <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm font-medium border-t-2 border-black pt-4 text-gray-800 leading-relaxed">
          {description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-10 px-4 mx-auto max-w-7xl bg-custom-yellow border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand text-white tracking-wide">
            PROJECTS
          </h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;