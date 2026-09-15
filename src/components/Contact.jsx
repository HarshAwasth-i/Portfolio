import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const email = "harshawasthi2023@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=Portfolio Inquiry from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base">
            I'm currently seeking software development internships and full-time opportunities.
            Feel free to send a message or connect through my socials!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="text-white font-medium hover:text-cyan-400 transition text-sm break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copy email address"
                  className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/harsh-awasthi-181761331"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-blue-500/50 hover:bg-slate-900 transition flex items-center gap-4 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 transition">
                <FaLinkedin />
              </div>
              <div className="flex-grow">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  LinkedIn Profile
                </p>
                <p className="text-white font-medium group-hover:text-blue-400 transition text-sm">
                  harsh-awasthi-181761331
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition">
                Connect →
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/HarshAwasth-i"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-600 hover:bg-slate-900 transition flex items-center gap-4 group block"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-200 text-xl group-hover:scale-110 transition">
                <FaGithub />
              </div>
              <div className="flex-grow">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  GitHub Profile
                </p>
                <p className="text-white font-medium group-hover:text-slate-200 transition text-sm">
                  HarshAwasth-i
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:translate-x-1 transition">
                Follow →
              </span>
            </a>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-xl space-y-5"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Hello Harsh, I'd like to talk about an opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3.5 px-6 rounded-xl transition shadow-lg shadow-cyan-500/20 active:scale-[0.99]"
              >
                <FaPaperPlane className="text-sm" />
                {sent ? "Opening Email Client..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;