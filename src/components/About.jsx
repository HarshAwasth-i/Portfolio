function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Side */}

          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">

              <img
                src="/profile.jpeg"
                alt="Harsh Awasthi"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Full Stack Developer
            </h3>

            <p className="text-gray-300 leading-8">

              I am a Computer Science undergraduate passionate about
              building modern web applications and solving real-world
              problems. I enjoy working with React, Node.js, Express,
              SQL databases and continuously improving my Data
              Structures & Algorithms skills through LeetCode.

            </p>

            <div className="grid grid-cols-2 gap-8 mt-10">

              <div>
                <h4 className="font-semibold text-blue-400">
                  Education
                </h4>

                <p className="text-gray-300 mt-2">
                  B.Tech CSE
                </p>

                <p className="text-gray-400">
                  KIIT University
                </p>

              </div>

              <div>

                <h4 className="font-semibold text-blue-400">
                  Location
                </h4>

                <p className="text-gray-300 mt-2">
                  Bhubaneswar, India
                </p>

              </div>

              <div>

                <h4 className="font-semibold text-blue-400">
                  Experience
                </h4>

                <p className="text-gray-300 mt-2">
                  Projects & Internships
                </p>

              </div>

              <div>

                <h4 className="font-semibold text-blue-400">
                  DSA
                </h4>

                <p className="text-gray-300 mt-2">
                  Practcing my skills
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;