import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Terminal from "./Terminal";

function Hero({ onOpenContact }) {
  return (
    <section className="pt-4 pb-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">
      {/* Left Column: Neo-Brutalist ID Card */}
      <div className="w-full md:w-1/3 bg-white border-2 border-b-4 border-r-4 border-black rounded-3xl p-6 shadow-neo flex flex-col items-center text-center relative overflow-hidden">
        {/* Retro Tape Sticker */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-200/60 w-24 h-6 rotate-[-4deg] border border-gray-400 pointer-events-none" />

        {/* Profile Picture */}
        <div className="w-32 h-32 bg-custom-pink rounded-full border-4 border-black mb-4 mt-2 flex items-center justify-center overflow-hidden shadow-neo-sm">
          <img
            src="/profile.jpeg"
            alt="Harsh Awasthi"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Role */}
        <h1 className="text-3xl sm:text-4xl font-shrikhand mb-1 tracking-wide text-black">
          HARSH AWASTHI
        </h1>
        <div className="bg-black text-white px-3 py-1 font-mono text-xs sm:text-sm font-bold rounded-md mb-4 rotate-1 shadow-sm">
          SOFTWARE_DEVELOPMENT_ENGINEER(SDE)
        </div>

        {/* Metadata Details */}
        <div className="w-full space-y-3 text-left font-bold text-xs sm:text-sm font-mono border-t-2 border-black pt-4">
          <div>
            <span className="bg-custom-yellow px-1.5 py-0.5 border border-black mr-2 text-black">
              [LOCATION]
            </span>
            <span>LUCKNOW, INDIA</span>
          </div>
          <div>
            <span className="bg-custom-green px-1.5 py-0.5 border border-black mr-2 text-black">
              [STATUS]
            </span>
            <span>B.TECH CSE @ KIIT (2023–27) · CGPA 7.7</span>
          </div>
          <div>
            <span className="bg-custom-blue px-1.5 py-0.5 border border-black mr-2 text-black">
              [EXPERIENCE]
            </span>
            <span>EX-SDE INTERN @ CLUSTERCODE</span>
          </div>
          <div>
            <span className="bg-purple-300 px-1.5 py-0.5 border border-black mr-2 text-black">
              [LEETCODE]
            </span>
            <span>300+ DSA · 100+ SQL SOLVED</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="w-full flex flex-col gap-3 mt-6">
          <a
            href="mailto:harshawasthi2023@gmail.com?subject=Request%20Resume%20-%20Harsh%20Awasthi"
            className="bg-custom-green w-full py-3 rounded-xl border-2 border-black font-bold text-sm shadow-neo-sm hover:translate-y-1 hover:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer text-black uppercase"
          >
            <FaEnvelope className="text-base" /> REQUEST RESUME
          </a>

          <button
            onClick={onOpenContact}
            className="bg-custom-red text-white w-full py-3 rounded-xl border-2 border-black font-bold text-sm shadow-neo-sm hover:translate-y-1 hover:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase"
          >
            <FaEnvelope className="text-base" /> CONTACT ME
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex gap-4 mt-6 text-2xl flex-wrap justify-center items-center">
          <a
            href="mailto:harshawasthi2023@gmail.com"
            aria-label="Email Harsh"
            className="hover:scale-110 transition-transform text-red-500 hover:rotate-6"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/HarshAwasth-i"
            target="_blank"
            rel="noreferrer"
            aria-label="Harsh's GitHub"
            className="hover:scale-110 transition-transform text-black hover:-rotate-6"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/harsh-awasthi-181761331"
            target="_blank"
            rel="noreferrer"
            aria-label="Harsh's LinkedIn"
            className="hover:scale-110 transition-transform text-blue-600 hover:rotate-6"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/Harsh_Awasthii/"
            target="_blank"
            rel="noreferrer"
            aria-label="Harsh's LeetCode"
            className="hover:scale-110 transition-transform text-amber-500 hover:-rotate-6"
            title="LeetCode Profile"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>

      {/* Right Column: Bio Card + Interactive Terminal */}
      <div className="w-full md:w-2/3 flex flex-col gap-6" id="about">
        {/* Intro Card */}
        <div className="bg-custom-yellow p-6 md:p-10 rounded-3xl border-2 border-b-4 border-r-4 border-black shadow-neo text-black">
          <h2 className="text-4xl font-shrikhand mb-5 tracking-wide">
            Hi people! 👋
          </h2>

          <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
            I'm Harsh, a{" "}
            <span className="font-bold bg-white px-1.5 py-0.5 border border-black rounded">
              B.Tech Computer Science & Engineering undergraduate at KIIT (2023–2027)
            </span>{" "}
            and full-stack Software Development Engineer passionate about building and shipping reliable, user-focused software.
          </p>

          <p className="text-base sm:text-lg font-medium leading-relaxed mb-4">
            I've built and deployed three production-grade web applications using{" "}
            <span className="font-bold bg-custom-pink px-1.5 py-0.5 border border-black rounded">
              React.js, Node.js, Express.js, MySQL, and TiDB Cloud
            </span>{" "}
            with secure JWT authentication, RESTful APIs, and interactive analytics dashboards.
          </p>

          <p className="text-base sm:text-lg font-medium leading-relaxed mb-6">
            I also bring hands-on experience in{" "}
            <span className="font-bold bg-custom-green px-1.5 py-0.5 border border-black rounded">
              AI-assisted UI test automation & LLM pipelines
            </span>{" "}
            from my software development internship, backed by solid fundamentals in OOP, data structures, and{" "}
            <span className="font-bold bg-white px-1.5 py-0.5 border border-black rounded">
              300+ DSA &amp; 100+ SQL
            </span>{" "}
            problems solved on LeetCode.
          </p>

          <div className="bg-white p-4 border-2 border-black rounded-xl inline-block font-bold text-sm sm:text-base shadow-neo-sm">
            🚀 Open to SDE Roles, Full-Stack Engineering &amp; Internships
          </div>
        </div>

        {/* Interactive CLI Terminal */}
        <Terminal />
      </div>
    </section>
  );
}

export default Hero;