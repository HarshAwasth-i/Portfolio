import devsync from "../assets/images/devsync.png";
import jobportal from "../assets/images/jobportal.png";
import resumeanalyzer from "../assets/images/resumeanalyzer.png";

const projects = [
  {
    title: " DevSync",
    image: devsync,
    description:
      "A modern full-stack project management platform inspired by Trello and Jira featuring authentication, Kanban boards, analytics dashboard, task management, and team collaboration.",
    tech: "React • Node.js • Express • MySQL • JWT • Tailwind CSS",
    github: "https://github.com/HarshAwasth-i/DevSync",
    live: "https://dev-sync-roan.vercel.app",
    featured: true,
  },
  {
    title: "Job Portal",
    image: jobportal,
    description:
      "A responsive full-stack job portal with secure authentication, protected dashboard, job listings, and REST API integration.",
    tech: "React • Node.js • Express • MySQL • JWT • Tailwind CSS",
    github: "https://github.com/HarshAwasth-i/Job-portal",
    live: "https://job-portal-drab-xi.vercel.app",
  },
  {
    title: "AI Resume Analyzer",
    image: resumeanalyzer,
    description:
      "An AI-powered Resume Analyzer that evaluates resumes using NLP techniques, ATS score prediction, and job-description matching.",
    tech: "React • Python • Flask • NLP • TF-IDF • spaCy",
    github: "https://github.com/HarshAwasth-i/Resume_Analyzer",
    live: "https://resumeanalyzer-snmgwevjwbjtl4nk36379p.streamlit.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300 ${
  project.featured
    ? "bg-slate-900 border-2 border-blue-500"
    : "bg-slate-950"
}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                <p className="text-blue-400 mt-5 font-medium">
                  {project.tech}
                </p>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Live Demo
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