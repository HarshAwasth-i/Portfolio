import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isOutside, setIsOutside] = useState(false);

  useEffect(() => {
    // Only activate for devices with a fine pointer (mouse/trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    setVisible(true);

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering interactive element
      const target = e.target;
      if (target) {
        const isClickable =
          target.closest("a, button, input, textarea, select, [role='button'], canvas") !== null;
        setIsHovered(isClickable);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsOutside(true);
    const handleMouseEnter = () => setIsOutside(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[999999] transition-opacity duration-150 hidden md:block ${
        isOutside ? "opacity-0" : "opacity-100"
      }`}
      style={{
        willChange: "transform",
        marginLeft: "-3px",
        marginTop: "-3px",
      }}
    >
      <div
        className={`transition-transform duration-100 ease-out origin-top-left ${
          isClicking
            ? "scale-90"
            : isHovered
            ? "scale-125 -rotate-6"
            : "scale-100 rotate-0"
        }`}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"
        >
          <path
            d="M5.5 2L18 13.5L11.5 13.5L15 21L12 22L8.5 14.5L2.5 19.5L5.5 2Z"
            fill={isHovered ? "#FCD34D" : "#FF9FAC"}
            stroke="black"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default CustomCursor;
