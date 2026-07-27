function Certifications() {
  const certifications = [
    {
      title: "SAP Certified Associate – Backend Developer",
      subtitle: "SAP Cloud Application Programming Model (CAP)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
      link: "https://www.credly.com/badges/83bd2a01-c03e-49df-9164-65ddc8004a1e/linked_in?t=tfp2sd",
    },
    {
      title: "Software Development Internship",
      subtitle: "Internship Completion Certificate",
      image: "/certificates/internship-certificate.png",
      link: "/certificates/internship-certificate.png",
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
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition duration-300"
            >
              <div className="h-52 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {cert.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  {cert.subtitle}
                </p>

                <p className="mt-5 text-cyan-400 font-medium">
                  View Certificate →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;