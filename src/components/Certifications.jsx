import { FaAward, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

const certsList = [
  {
    title: "SAP Certified Associate – Backend Developer",
    subtitle: "SAP Cloud Application Programming Model (CAP)",
    issuer: "SAP SE",
    date: "Certified Credential",
    color: "bg-custom-yellow",
    tabLabel: "sap_cap.cert",
    link: "https://www.credly.com/badges/83bd2a01-c03e-49df-9164-65ddc8004a1e/linked_in?t=tfp2sd",
    description:
      "Globally recognized certification validating core backend proficiency in SAP Cloud Application Programming Model (CAP), CDS service definition, Node.js backend logic, relational data modeling, and cloud deployments.",
    badgeText: "Credly Verified",
  },
  {
    title: "Software Development Internship Certificate",
    subtitle: "Industry Software Engineering & Web Practices",
    issuer: "Industry Program",
    date: "Completed 2026",
    color: "bg-custom-pink",
    tabLabel: "internship.doc",
    link: "/certificates/internship-certificate.png",
    description:
      "Successfully concluded intensive software development internship contributing to production full-stack engineering, automated testing, REST API integrations, and collaborative agile sprint delivery.",
    badgeText: "Verified Completion",
  },
];

function CertCard({ title, subtitle, issuer, date, color, tabLabel, link, description, badgeText }) {
  return (
    <div className="border-4 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col md:flex-row h-full relative bg-white rounded-2xl overflow-hidden">
      {/* Side Decorative Tab */}
      <div
        className={`border-b-4 md:border-b-0 md:border-r-4 border-black px-4 py-3 md:w-16 flex md:flex-col justify-between items-center ${color}`}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
          <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
          <div className="w-3 h-3 rounded-full bg-white border-2 border-black" />
        </div>
        <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black">
          <span className="md:[writing-mode:vertical-rl] md:rotate-180">
            {tabLabel}
          </span>
        </span>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start mb-3 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-custom-green text-black border border-black mb-2 shadow-xs">
                <FaCheckCircle className="text-xs" /> {badgeText}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-black">
                {title}
              </h3>
              <p className="text-sm font-semibold text-gray-700 mt-1">
                {subtitle} • <span className="font-bold text-black">{issuer}</span>
              </p>
            </div>
            <FaAward className="text-4xl text-custom-yellow flex-shrink-0 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" />
          </div>

          <p className="text-sm sm:text-base font-medium mb-6 text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Footer Link Row */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t-4 border-black border-dashed">
          <span className="bg-gray-100 border border-black px-2.5 py-1 text-xs font-bold font-mono text-black">
            {date}
          </span>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors border-2 border-black hover:text-custom-yellow shadow-neo-sm hover:shadow-none"
          >
            <span>View Credential</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="py-10 px-4 max-w-7xl mx-auto w-full">
      {/* Title Badge */}
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-purple px-8 py-3 border-4 border-black shadow-neo rounded-full">
          <h2 className="text-3xl font-shrikhand text-white tracking-wide">
            CREDENTIALS &amp; CERTIFICATIONS
          </h2>
        </div>
      </div>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 gap-8">
        {certsList.map((item, idx) => (
          <CertCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Certifications;