import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/20 hover:scale-110 active:scale-95 transition duration-200"
    >
      <FaArrowUp className="text-base" />
    </button>
  );
}

export default ScrollToTop;
