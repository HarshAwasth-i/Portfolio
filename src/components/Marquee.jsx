const MARQUEE_ITEMS = [
  "2027 B.Tech CSE Undergrad at KIIT (CGPA: 7.7)",
  "Full-Stack SDE (React.js, Node.js, Express.js, MySQL, TiDB Cloud, TypeScript)",
  "Ex-SDE Intern @ ClusterCode Technology Sdn. Bhd.",
  "SAP Certified Associate - Backend Developer",
  "Solved 300+ DSA & 100+ SQL Problems on LeetCode",
  "Production Deployed: DevSync, Instagram Wrapped & Job Portal",
  "Open to Software Development Engineer (SDE) Roles & Internships",
];

function Marquee() {
  return (
    <div className="bg-custom-yellow border-y-4 border-black py-3.5 overflow-hidden whitespace-nowrap relative rotate-[-2deg] scale-105 z-20 my-10 shadow-neo">
      <div className="animate-marquee flex w-max font-sans font-black text-lg sm:text-xl uppercase tracking-wide text-black">
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex shrink-0 items-center">
            {MARQUEE_ITEMS.map((item, itemIdx) => (
              <span key={`${copyIndex}-${itemIdx}`} className="mx-6 flex items-center">
                <span>{item}</span>
                <span className="ml-6 text-black text-2xl">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
