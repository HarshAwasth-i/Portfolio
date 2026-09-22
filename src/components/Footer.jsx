import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-custom-yellow border-t-4 border-black mt-20 py-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-shrikhand text-3xl text-black tracking-wide">
              HARSH AWASTHI
            </span>
            <span className="bg-black text-white font-mono text-xs px-2 py-0.5 rounded font-bold">
              v2.0
            </span>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-gray-800 mt-1">
            Full-Stack Developer • B.Tech CSE @ KIIT University
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 text-xl">
          <a
            href="https://github.com/HarshAwasth-i"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center text-black hover:bg-custom-green hover:scale-110 transition-all shadow-neo-sm hover:shadow-none"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/harsh-awasthi-181761331"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center text-blue-600 hover:bg-custom-green hover:scale-110 transition-all shadow-neo-sm hover:shadow-none"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/Harsh_Awasthii/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode Profile"
            className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center text-amber-500 hover:bg-custom-green hover:scale-110 transition-all shadow-neo-sm hover:shadow-none"
          >
            <SiLeetcode />
          </a>

          <a
            href="mailto:harshawasthi2023@gmail.com"
            aria-label="Email Harsh"
            className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center text-red-500 hover:bg-custom-green hover:scale-110 transition-all shadow-neo-sm hover:shadow-none"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-black text-white border-2 border-white px-5 py-2.5 rounded-full font-mono text-xs font-bold flex items-center gap-2 hover:bg-custom-pink hover:text-black hover:border-black active:translate-y-1 transition-all cursor-pointer shadow-neo-sm"
        >
          <span>BACK TO TOP</span>
          <FaArrowUp className="text-xs" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t-2 border-black border-dashed flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-gray-800 gap-2">
        <span>© {new Date().getFullYear()} Harsh Awasthi. All rights reserved.</span>
        <span>Built with ⚡ React &amp; Neo-Brutalism</span>
      </div>
    </footer>
  );
}

export default Footer;