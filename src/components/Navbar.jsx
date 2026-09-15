import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl md:text-3xl font-extrabold tracking-tight group"
        >
          <span className="text-cyan-400 group-hover:text-cyan-300 transition">
            Harsh
          </span>
          <span className="text-blue-500">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/60 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-cyan-400 transition py-1.5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block text-center mt-4 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:opacity-90 transition"
          >
            View Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;