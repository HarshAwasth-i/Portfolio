import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">

      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full top-20 -left-20"></div>

      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >

        <p className="text-cyan-400 text-xl mb-5">
           Hello, I'm
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold">

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

            Harsh Awasthi

          </span>

        </h1>

        <h2 className="mt-6 text-3xl text-gray-300">
          Full Stack Developer
        </h2>

        <p className="mt-8 text-gray-400 leading-8 max-w-3xl mx-auto">

          Passionate about building scalable web applications,
          solving complex DSA problems and creating modern user
          experiences using React, Node.js and Cloud technologies.

        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <a
            href="/resume.pdf"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            <FaDownload className="inline mr-2" />
            Resume
          </a>

          <a
            href="https://github.com/HarshAwasth-i"
            target="_blank"
            className="border border-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-600 transition"
          >
            <FaGithub className="inline mr-2" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/harsh-awasthi-181761331"
            target="_blank"
            className="border border-blue-500 px-8 py-4 rounded-xl hover:bg-blue-600 transition"
          >
            <FaLinkedin className="inline mr-2" />
            LinkedIn
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;