import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Tagline */}
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-extrabold text-white">
            <span className="text-cyan-400">Harsh</span>
            <span className="text-blue-500">.</span>
          </a>
          <p className="text-xs text-slate-500 mt-1">
            Full Stack Developer • B.Tech CSE @ KIIT University
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
          <a href="#certifications" className="hover:text-cyan-400 transition">Certifications</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/HarshAwasth-i"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/harsh-awasthi-181761331"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="mailto:harshawasthi2023@gmail.com"
            aria-label="Email"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
          >
            <FaEnvelope size={16} />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-900/80 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Harsh Awasthi. Designed &amp; Developed with React, Vite &amp; Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;