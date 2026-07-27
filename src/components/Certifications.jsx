function Certifications() {
  const certifications = [
    {
      title: "SAP Certified Associate – Backend Developer",
      subtitle: "SAP Cloud Application Programming Model (CAP)",
      link: "https://www.credly.com/badges/83bd2a01-c03e-49df-9164-65ddc8004a1e/linked_in?t=tfp2sd",
    },
    {
      title: "Software Development Internship Certificate",
      subtitle: "Internship Completion",
      link: "/certificates/internship-certificate.jpg",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 rounded-xl p-8 hover:bg-slate-800 hover:scale-105 transition duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white">
                {cert.title}
              </h3>

              <p className="text-slate-400 mt-3">
                {cert.subtitle}
              </p>

              <p className="mt-6 text-blue-400 font-medium">
                🔗 Click to View Certificate
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;