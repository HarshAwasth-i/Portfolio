import jobportal from "../assets/images/jobportal.png";
import resumeanalyzer from "../assets/images/resumeanalyzer.png";
import spam from "../assets/images/spam.png";

const projects = [
  {
    title: "Full Stack Job Portal",
    image: jobportal,
    description:
      "A complete Job Portal with authentication, recruiter & candidate workflows, resume upload and cloud deployment.",
    tech: "React • Node.js • Express • TiDB • JWT",
    github: "https://github.com/HarshAwasth-i/Job-portal",
    live: "https://job-portal-drab-xi.vercel.app",
  },
  {
    title: "AI Resume Analyzer",
    image: resumeanalyzer,
    description:
      "Analyzes resumes using NLP techniques, ATS score prediction and job-description matching.",
    tech: "Python • Streamlit • NLP",
    github: "https://github.com/HarshAwasth-i/Resume_Analyzer",
    live: "https://resumeanalyzer-snmgwevjwbjtl4nk36379p.streamlit.app",
  },
  {
    title: "Spam Email Detection",
    image: spam,
    description:
      "Machine Learning based spam email classifier using TF-IDF and multiple classification algorithms.",
    tech: "Python • NLP • Scikit-learn",
    github: "#",
    live: "#",
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
              className="bg-slate-950 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
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