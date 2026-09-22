import { useState } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:harshawasthi2023@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-3xl border-4 border-black shadow-neo overflow-hidden relative">
        {/* Retro Window Header */}
        <div className="bg-custom-pink border-b-4 border-black px-4 py-3 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-custom-red border-2 border-black" />
            <div className="w-3.5 h-3.5 rounded-full bg-custom-yellow border-2 border-black" />
            <div className="w-3.5 h-3.5 rounded-full bg-custom-green border-2 border-black" />
          </div>
          <span className="font-mono font-black text-xs sm:text-sm tracking-widest text-black">
            contact_harsh.exe
          </span>
          <button
            onClick={onClose}
            className="w-7 h-7 bg-white rounded-full border-2 border-black flex items-center justify-center hover:bg-custom-red hover:text-white transition-colors cursor-pointer"
          >
            <FaTimes className="text-xs" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-shrikhand text-black mb-1">
            Let's Connect! 📬
          </h2>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Send a direct message or feel free to email me at{" "}
            <span className="font-bold font-mono bg-custom-yellow px-1 border border-black">
              harshawasthi2023@gmail.com
            </span>
          </p>

          <div className="flex flex-col gap-1 text-left font-mono font-bold text-xs uppercase">
            <label>Your Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Satoshi Nakamoto"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="p-3 border-2 border-black rounded-xl font-sans font-medium text-sm bg-gray-50 focus:bg-white focus:outline-none shadow-sm focus:border-b-4"
            />
          </div>

          <div className="flex flex-col gap-1 text-left font-mono font-bold text-xs uppercase">
            <label>Your Email</label>
            <input
              type="email"
              required
              placeholder="e.g. satoshi@bitcoin.org"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="p-3 border-2 border-black rounded-xl font-sans font-medium text-sm bg-gray-50 focus:bg-white focus:outline-none shadow-sm focus:border-b-4"
            />
          </div>

          <div className="flex flex-col gap-1 text-left font-mono font-bold text-xs uppercase">
            <label>Message</label>
            <textarea
              required
              rows={4}
              placeholder="Hi Harsh, I'd love to chat about an opportunity..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="p-3 border-2 border-black rounded-xl font-sans font-medium text-sm bg-gray-50 focus:bg-white focus:outline-none shadow-sm focus:border-b-4 resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-custom-green py-3.5 rounded-xl border-2 border-black font-bold text-base shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaPaperPlane />
            {sent ? "Opening Email Client..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
