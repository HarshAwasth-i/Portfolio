import Blackboard from "./Blackboard";

const educationData = [
  {
    year: "2023 - 2027",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Kalinga Institute of Industrial Technology",
    grade: "CGPA: 7.7",
    details: "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks.",
    color: "bg-purple-100",
  },
  {
    year: "2020 - 2023",
    degree: "Class XII (Senior Secondary)",
    institution: "Lucknow Public School",
    grade: "Score: 82%",
    details: "Physics, Chemistry, Mathematics & Computer Science.",
    color: "bg-blue-100",
  },
  {
    year: "2020",
    degree: "Class X (Secondary Examination)",
    institution: "Lucknow Public School",
    grade: "Score: 90%",
    details: "Strong academic foundation with distinction across Science and Mathematics.",
    color: "bg-pink-100",
  },
];

function Education() {
  return (
    <section id="education" className="py-10 px-4 max-w-7xl mx-auto bg-custom-green border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo">
      {/* Title Badge */}
      <div className="flex justify-center mb-10">
        <div className="bg-white px-8 py-3 rounded-full border-4 border-black w-fit shadow-neo">
          <h2 className="text-3xl font-shrikhand text-black">EDUCATION</h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left: Education History */}
        <div className="w-full lg:w-1/3 flex flex-col relative">
          {/* Dashed vertical line */}
          <div className="absolute left-8 top-10 bottom-10 w-1 bg-black border-l-4 border-black border-dashed -z-10 opacity-30" />

          <div className="flex flex-col gap-6">
            {educationData.map((item, idx) => (
              <div
                key={idx}
                className={`relative bg-white border-4 border-black p-6 rounded-3xl shadow-neo hover:-translate-y-1 transition-transform ${item.color}`}
              >
                {/* Year Pill */}
                <div className="absolute -top-4 -left-3 bg-black text-white font-mono font-bold text-xs py-1 px-3 rounded-lg border-2 border-white shadow-sm rotate-[-4deg]">
                  {item.year}
                </div>

                <div className="mt-2">
                  <h3 className="text-lg sm:text-xl font-shrikhand leading-tight mb-1 text-black">
                    {item.degree}
                  </h3>
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                    <p className="font-bold text-sm text-gray-800">
                      {item.institution}
                    </p>
                    {item.grade && (
                      <span className="bg-black text-white px-2.5 py-0.5 rounded-full text-xs font-mono font-bold shadow-xs">
                        {item.grade}
                      </span>
                    )}
                  </div>
                  {item.details && (
                    <div className="text-xs sm:text-sm font-medium bg-white/70 p-2 rounded-lg border border-black/20 text-gray-700">
                      {item.details}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interactive Chalk Doodle Board */}
        <div className="w-full lg:w-2/3 sticky top-24">
          <Blackboard />
          <p className="text-center font-mono font-bold mt-4 bg-white inline-block px-5 py-1.5 border-2 border-black rounded-full shadow-sm mx-auto block w-fit text-sm">
            ✨ Bored? Doodle something cool!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
