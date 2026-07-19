function Certifications() {
  const certs = [
    "SAP Certified Associate - Backend Developer",
    "SAP Learning Journey - Side-by-Side Extensions",
    "Software Development Internship Certificate",
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certs.map((cert) => (
            <div
              key={cert}
              className="bg-slate-900 rounded-xl p-8 hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white">
                {cert}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;