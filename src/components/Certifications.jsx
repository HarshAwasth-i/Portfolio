import { FaExternalLinkAlt, FaCheckCircle, FaAward } from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "SAP Certified Associate – Backend Developer",
      subtitle: "SAP Cloud Application Programming Model (CAP)",
      issuer: "SAP",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
      link: "https://www.credly.com/badges/83bd2a01-c03e-49df-9164-65ddc8004a1e/linked_in?t=tfp2sd",
      verified: true,
      badgeText: "Credly Verified",
    },
    {
      title: "Software Development Internship",
      subtitle: "Internship Completion Certificate",
      issuer: "Industry Program",
      image: "/certificates/internship-certificate.png",
      link: "/certificates/internship-certificate.png",
      verified: true,
      badgeText: "Completion Certified",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2">
            Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Certifications &amp; Badges
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-900/70 border border-slate-800/90 hover:border-cyan-500/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyan-500/10 flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="h-52 bg-slate-900/90 flex items-center justify-center p-6 border-b border-slate-800/80 relative overflow-hidden group-hover:bg-slate-850 transition">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-36 max-w-full object-contain group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-sm">
                    <FaCheckCircle className="text-xs" />
                    {cert.badgeText}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {cert.issuer}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-400 transition">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2">
                    {cert.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-sm font-semibold text-cyan-400">
                  <span className="inline-flex items-center gap-2">
                    <FaAward className="text-base" />
                    View Certificate
                  </span>
                  <FaExternalLinkAlt className="text-xs group-hover:translate-x-0.5 transition" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;