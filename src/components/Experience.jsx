import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Industry Internship Program",
    companyUrl: "#",
    duration: "2026",
    location: "India · Hybrid / Remote",
    color: "bg-custom-pink",
    description:
      "Contributed to software engineering workflows, engaging in full-stack feature development, automated UI testing, RESTful API integrations, and agile sprints with Git and code reviews.",
  },
  {
    role: "Full-Stack Web Architect & Problem Solver",
    company: "Self-Driven Engineering",
    companyUrl: "https://github.com/HarshAwasth-i",
    duration: "2023 - Present",
    location: "KIIT University · Bhubaneswar",
    color: "bg-custom-yellow",
    description:
      "Architected production-grade web applications including DevSync (Kanban board manager), a role-based Job Portal, and TaskPulse with React, Node.js, Express, and MySQL while consistently solving algorithmic challenges in C++.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-10 px-4 max-w-7xl mx-auto w-full relative">
      {/* Title Badge */}
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-yellow px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand italic uppercase tracking-wide text-black">
            EXPERIENCE
          </h2>
        </div>
      </div>

      {/* Timeline items */}
      <div className="relative max-w-6xl mx-auto z-10 pb-8">
        <div className="flex flex-col gap-12 lg:gap-20">
          {experiences.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start relative group"
            >
              {/* Left Column: Metadata */}
              <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col items-start gap-4 z-10">
                <div className="inline-flex items-center gap-3 bg-gray-100 px-5 py-2 border-4 border-black rounded-full shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-sm md:text-base text-black">
                  <FaCalendarAlt className="text-black" />
                  <span>{item.duration}</span>
                </div>

                <div className="flex items-center gap-2 font-bold text-sm md:text-base text-gray-800 ml-2">
                  <FaMapMarkerAlt className="text-black text-lg flex-shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Connecting Horizontal Line (desktop) */}
              <div className="hidden lg:block absolute top-6 left-[260px] w-16 h-1 bg-black z-0 border-t-4 border-black group-hover:bg-custom-yellow transition-colors" />

              {/* Dashed connector SVG between items */}
              {idx !== experiences.length - 1 && (
                <div className="hidden lg:block absolute top-[40px] -bottom-[80px] left-[260px] w-16 -z-10 pointer-events-none">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 50 0 C 120 25, -20 75, 50 100"
                      stroke="black"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="2 12"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              )}

              {/* Right Column: Retro Window Card */}
              <div className="w-full flex-grow border-4 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col h-full relative bg-white rounded-2xl overflow-hidden">
                {/* Window Top Bar */}
                <div
                  className={`border-b-4 border-black px-3 py-2 flex justify-between items-center ${item.color}`}
                >
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
                  </div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black">
                    experience.exe
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl italic leading-tight mb-5 tracking-wide text-black font-shrikhand">
                    {item.role}
                  </h3>

                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-block ${item.color} px-5 py-2 border-4 border-black rounded-full font-bold text-base md:text-lg shadow-[4px_4px_0_rgba(0,0,0,1)] mb-8 tracking-wide w-fit hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-black`}
                  >
                    {item.company}
                  </a>

                  {/* Description container */}
                  <div className="bg-gray-50 border-4 border-black rounded-xl p-5 md:p-6 shadow-sm relative overflow-hidden">
                    <div className="flex gap-1.5 mb-4">
                      <div className="w-3 h-3 rounded-full bg-custom-red border-2 border-black" />
                      <div className="w-3 h-3 rounded-full bg-custom-yellow border-2 border-black" />
                      <div className="w-3 h-3 rounded-full bg-custom-green border-2 border-black" />
                    </div>
                    <p className="font-sans text-sm md:text-base font-bold leading-relaxed text-gray-900">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;