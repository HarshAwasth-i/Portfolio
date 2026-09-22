import { useState, useEffect } from "react";

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const jump = Math.random() * 12 + 4;
        const next = prev + jump;
        return next >= 100 ? 100 : next;
      });
    }, 100);

    const safetyTimeout = setTimeout(() => {
      setProgress(100);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const t1 = setTimeout(() => setIsFinishing(true), 350);
      const t2 = setTimeout(() => {
        setIsSlidingUp(true);
        document.body.style.overflow = "unset";
      }, 750);
      const t3 = setTimeout(() => setIsVisible(false), 1800);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none
        transition-transform ease-in-out
        ${
          isSlidingUp
            ? "-translate-y-full duration-[1000ms]"
            : isFinishing
            ? "translate-y-3 duration-300"
            : "translate-y-0 duration-200"
        }
      `}
      style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          #111111,
          #111111 10vh,
          #FCD34D 10vh,
          #FCD34D 10.5vh
        )`,
        backgroundColor: "#111111",
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        {/* Loading Title & Percentage */}
        <div className="text-center mb-10">
          <h1 className="text-custom-yellow font-shrikhand text-4xl sm:text-6xl md:text-7xl mb-4 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] tracking-wider">
            LOADING...
          </h1>
          <div className="font-mono font-bold text-2xl text-white bg-black px-5 py-1.5 inline-block border-2 border-b-4 border-r-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            {Math.floor(progress)}%
          </div>
        </div>

        {/* Progress Bar Frame */}
        <div className="w-72 sm:w-80 md:w-[500px] h-14 bg-black border-2 border-white border-b-8 border-r-8 rounded-4xl relative p-1">
          <div
            className="h-full bg-custom-yellow rounded-4xl transition-all duration-200 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px]" />
          </div>
        </div>
      </div>

      {/* Decorative Capsule Widget */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-64 h-8 bg-yellow-500 rounded-full border-4 border-amber-700 shadow-[0px_10px_20px_rgba(0,0,0,0.8)] relative flex items-center justify-between px-4">
          <div className="w-3 h-3 bg-yellow-100 rounded-full border border-black" />
          <div className="w-20 h-2 bg-amber-950 rounded-full" />
          <div className="w-3 h-3 bg-gray-100 rounded-full border border-black" />
        </div>
      </div>

      {/* Bottom Accent Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-custom-yellow border-t-4 border-black" />
    </div>
  );
}

export default LoadingScreen;
