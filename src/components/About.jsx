import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaCode } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaGraduationCap className="text-cyan-400 text-xl" />,
      title: "Education",
      primary: "B.Tech in CSE",
      secondary: "KIIT University (2023–2027)",
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-400 text-xl" />,
      title: "Location",
      primary: "Lucknow, India",
      secondary: "Open to Relocation / Remote",
    },
    {
      icon: <FaLaptopCode className="text-indigo-400 text-xl" />,
      title: "Core Focus",
      primary: "Full-Stack Development",
      secondary: "React, Node, Express, MySQL",
    },
    {
      icon: <FaCode className="text-purple-400 text-xl" />,
      title: "Problem Solving",
      primary: "Data Structures & Algorithms",
      secondary: "Practicing regularly on LeetCode",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950/60 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2">
            Get To Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Avatar Side */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer decorative glow rings */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl">
                <img
                  src="/profile.jpeg"
                  alt="Harsh Awasthi"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Content Side */}
          <div className="md:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Building impactful web apps with clean architecture
            </h3>

            <p className="text-slate-300 leading-relaxed text-base mb-4">
              I am a Computer Science undergraduate at KIIT University with a strong foundation in modern web development and software engineering principles. I specialize in building performant, end-to-end full-stack applications using React, Node.js, Express, and SQL databases.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm mb-8">
              Beyond building web platforms, I actively cultivate my problem-solving ability through Data Structures & Algorithms, exploring cloud technologies (SAP CAP &amp; Docker basics), and continuously crafting intuitive user interfaces.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-800/80">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.title}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm">
                    {item.primary}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {item.secondary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;