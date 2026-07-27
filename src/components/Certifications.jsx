function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Certification
        </h2>

        <div className="flex justify-center">
          <a
            href="https://www.credly.com/badges/83bd2a01-c03e-49df-9164-65ddc8004a1e/linked_in?t=tfp2sd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 rounded-xl p-8 w-full max-w-xl hover:scale-105 hover:bg-slate-800 transition duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white">
              SAP Certified Associate – Backend Developer
            </h3>

            <p className="text-slate-400 mt-3">
              SAP Cloud Application Programming Model (CAP)
            </p>

            <p className="mt-6 text-blue-400 font-medium">
              🔗 Click to View Credential
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;