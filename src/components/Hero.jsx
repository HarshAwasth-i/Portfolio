import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "React & Node.js Specialist",
  "DSA & Problem Solver",
  "Computer Science Undergrad",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* Ambient background glows */}
      <div className="absolute w-[550px] h-[550px] bg-blue-600/15 blur-[160px] rounded-full top-16 -left-24 pointer-events-none" />
      <div className="absolute w-[450px] h-[450px] bg-cyan-500/15 blur-[160px] rounded-full bottom-10 -right-16 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl px-6 py-12"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-medium text-slate-300 mb-8 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>Open to Software Roles &amp; Internships</span>
        </div>

        {/* Intro */}
        <p className="text-cyan-400 text-lg md:text-xl font-medium tracking-wide mb-3">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Harsh Awasthi
          </span>
        </h1>

        {/* Animated Rotating Subtitle */}
        <div className="h-12 mt-4 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[roleIndex]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-200"
            >
              {roles[roleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Short Bio */}
        <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          B.Tech CSE student at KIIT University passionate about building scalable
          full-stack applications, solving complex algorithmic challenges, and
          architecting clean digital solutions with React, Node.js, Express &amp; MySQL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition duration-200"
          >
            Explore Projects
            <FaArrowRight className="text-sm" />
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 hover:scale-[1.02] active:scale-[0.98] transition duration-200"
          >
            <FaDownload className="text-cyan-400 text-sm" />
            Download CV
          </a>

          <a
            href="https://github.com/HarshAwasth-i"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/harsh-awasthi-181761331"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;