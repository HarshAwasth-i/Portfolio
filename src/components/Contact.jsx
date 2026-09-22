import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-10 px-4 max-w-7xl mx-auto w-full">
      {/* Title Badge */}
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-red text-white px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand tracking-wide">
            GET IN TOUCH
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Email Copy Card */}
          <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo">
            <h3 className="text-xl font-shrikhand text-black mb-2">
              Email Me Directly 📬
            </h3>
            <p className="text-sm font-medium text-gray-700 mb-4">
              Feel free to reach out for software engineering roles, internships, or open-source collaboration.
            </p>

            <div className="flex items-center justify-between bg-custom-yellow/30 border-2 border-black rounded-xl p-3 mb-4">
              <span className="font-mono font-bold text-xs sm:text-sm text-black truncate mr-2">
                {email}
              </span>
              <button
                onClick={handleCopy}
                className="bg-custom-yellow border-2 border-black p-2 rounded-lg font-bold text-xs hover:bg-yellow-400 active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                title="Copy Email"
              >
                {copied ? <FaCheck className="text-green-700" /> : <FaCopy />}
                <span>{copied ? "COPIED!" : "COPY"}</span>
              </button>
            </div>

            <a
              href={`mailto:${email}?subject=Hello%20Harsh`}
              className="bg-custom-green text-black w-full py-3 rounded-xl border-2 border-black font-bold text-sm shadow-neo-sm hover:translate-y-1 hover:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase"
            >
              <FaEnvelope /> Open Mail Client
            </a>
          </div>

          {/* Socials Box */}
          <div className="bg-custom-purple border-4 border-black rounded-3xl p-6 shadow-neo text-black">
            <h3 className="text-xl font-shrikhand text-white mb-4">
              Connect Across The Web 🌐
            </h3>
            <div className="grid grid-cols-2 gap-3 font-mono font-bold text-xs">
              <a
                href="https://github.com/HarshAwasth-i"
                target="_blank"
                rel="noreferrer"
                className="bg-white border-2 border-black p-3 rounded-xl flex items-center gap-2 hover:bg-custom-yellow transition-colors shadow-neo-sm hover:shadow-none"
              >
                <FaGithub className="text-base" /> GitHub
              </a>

              <a
                href="https://linkedin.com/in/harsh-awasthi-181761331"
                target="_blank"
                rel="noreferrer"
                className="bg-white border-2 border-black p-3 rounded-xl flex items-center gap-2 hover:bg-custom-yellow transition-colors shadow-neo-sm hover:shadow-none"
              >
                <FaLinkedin className="text-base text-blue-600" /> LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/Harsh_Awasthii/"
                target="_blank"
                rel="noreferrer"
                className="bg-white border-2 border-black p-3 rounded-xl flex items-center gap-2 hover:bg-custom-yellow transition-colors shadow-neo-sm hover:shadow-none"
              >
                <SiLeetcode className="text-base text-amber-500" /> LeetCode
              </a>

              <a
                href="mailto:harshawasthi2023@gmail.com?subject=Request%20Resume"
                className="bg-white border-2 border-black p-3 rounded-xl flex items-center gap-2 hover:bg-custom-yellow transition-colors shadow-neo-sm hover:shadow-none"
              >
                <FaEnvelope className="text-base text-red-500" /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Neo-Brutalist Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border-4 border-black rounded-3xl shadow-neo overflow-hidden">
            {/* Window bar */}
            <div className="bg-custom-pink border-b-4 border-black px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-custom-red border-2 border-black" />
                <div className="w-3.5 h-3.5 rounded-full bg-custom-yellow border-2 border-black" />
                <div className="w-3.5 h-3.5 rounded-full bg-custom-green border-2 border-black" />
              </div>
              <span className="font-mono font-bold text-xs tracking-widest text-black">
                send_message.sh
              </span>
              <div className="w-10" />
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-4">
              <h3 className="text-2xl font-shrikhand text-black mb-1">
                Drop a Line 💬
              </h3>

              <div className="flex flex-col gap-1 text-left font-mono font-bold text-xs uppercase text-black">
                <label>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="p-3 border-2 border-black rounded-xl font-sans font-medium text-sm bg-gray-50 focus:bg-white focus:outline-none shadow-sm focus:border-b-4"
                />
              </div>

              <div className="flex flex-col gap-1 text-left font-mono font-bold text-xs uppercase text-black">
                <label>Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="p-3 border-2 border-black rounded-xl font-sans font-medium text-sm bg-gray-50 focus:bg-white focus:outline-none shadow-sm focus:border-b-4"
                />
              </div>

              <div className="flex flex-col gap-1 text-left font-mono font-bold text-xs uppercase text-black">
                <label>Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="p-3 border-2 border-black rounded-xl font-sans font-medium text-sm bg-gray-50 focus:bg-white focus:outline-none shadow-sm focus:border-b-4 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-custom-green py-3.5 rounded-xl border-2 border-black font-bold text-base shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer text-black uppercase"
              >
                <FaPaperPlane />
                {sent ? "Opening Mailbox..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;