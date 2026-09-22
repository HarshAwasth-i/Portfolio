import { useState, useEffect } from "react";

function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        setScrollPercentage(scrollTop / scrollHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Track Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-custom-yellow z-[90] border-b border-black" />
      {/* Dynamic Active Bar */}
      <div
        className="fixed top-0 left-0 h-2 bg-custom-green z-[100] transition-all duration-100 ease-out border-b border-r border-black"
        style={{ width: `${scrollPercentage * 100}%` }}
      />
    </>
  );
}

export default ScrollProgress;
