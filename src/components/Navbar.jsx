import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ onOpenContact }) {
  const [currentTime, setCurrentTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: "ABOUT", id: "about" },
    { name: "SKILLS", id: "skills" },
    { name: "PROJECTS", id: "projects" },
    { name: "EXPERIENCE", id: "experience" },
    { name: "EDUCATION", id: "education" },
    { name: "CERTIFICATIONS", id: "certifications" },
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto">
      <nav className="bg-custom-purple border-4 border-black rounded-full px-5 sm:px-6 py-2.5 shadow-neo flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#about"
          className="font-shrikhand text-2xl sm:text-3xl text-white tracking-wider hover:scale-105 transition-transform flex items-center gap-1.5"
        >
          <span>HARSH</span>
          <span className="text-custom-yellow font-mono text-xl">()</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="bg-white border-2 border-black border-b-4 border-r-4 px-3.5 py-1 rounded-full font-bold text-xs uppercase hover:bg-gray-100 hover:border-b-2 hover:border-r-2 active:translate-y-1 transition-all cursor-pointer"
            >
              {item.name}
            </button>
          ))}

          {/* Contact CTA */}
          <button
            onClick={onOpenContact}
            className="bg-custom-pink border-2 border-black border-b-4 border-r-4 px-4 py-1 rounded-full font-bold text-xs uppercase hover:bg-custom-yellow active:translate-y-1 transition-all cursor-pointer ml-1"
          >
            CONTACT
          </button>
        </div>

        {/* Digital Clock Pill */}
        <div className="hidden md:flex items-center gap-2 bg-custom-yellow text-black px-4 py-1 rounded-full font-mono text-xs sm:text-sm font-bold border-black border-2 border-b-4 border-r-4 shadow-sm">
          <span className="animate-pulse">█</span>
          <span>{currentTime || "12:00:00 PM"}</span>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white text-xl bg-black p-2 rounded-full border-2 border-white hover:bg-gray-800 transition"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-24 left-4 right-4 z-40 bg-custom-purple border-4 border-black rounded-3xl p-4 flex flex-col gap-3 shadow-neo lg:hidden max-w-7xl mx-auto animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="bg-white border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-bold active:border-b-2 active:border-r-2 active:translate-y-1 text-left hover:bg-gray-100 transition-all cursor-pointer"
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="bg-custom-pink border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-bold active:border-b-2 active:border-r-2 active:translate-y-1 text-left hover:bg-custom-yellow transition-all cursor-pointer"
          >
            CONTACT ME ✉️
          </button>

          {/* Clock in Mobile Drawer */}
          <div className="flex md:hidden items-center gap-2 bg-custom-yellow text-black px-4 py-2.5 rounded-xl font-mono text-sm font-bold border-black border-2 border-b-4 border-r-4 justify-center">
            <span className="animate-pulse">█</span>
            <span>{currentTime || "12:00:00 PM"}</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;