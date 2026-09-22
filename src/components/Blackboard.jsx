import { useRef, useState, useEffect } from "react";
import { FaPaintBrush, FaTrashAlt } from "react-icons/fa";

function Blackboard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [chalkColor, setChalkColor] = useState("#ffffff");
  const [chalkWidth, setChalkWidth] = useState(4);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 4;
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas || !canvas.parentElement) return;
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      tempCtx?.drawImage(canvas, 0, 0);

      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(tempCanvas, 0, 0);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = chalkColor;
        ctx.lineWidth = chalkWidth;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [chalkColor, chalkWidth]);

  const getCoordinates = (e, canvas) => {
    if ("touches" in e) {
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      return {
        offsetX: touch.clientX - rect.left,
        offsetY: touch.clientY - rect.top,
      };
    } else {
      return {
        offsetX: e.nativeEvent.offsetX,
        offsetY: e.nativeEvent.offsetY,
      };
    }
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.strokeStyle = chalkColor;
    ctx.lineWidth = chalkWidth;
    const { offsetX, offsetY } = getCoordinates(e, canvas);
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { offsetX, offsetY } = getCoordinates(e, canvas);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.getContext("2d")?.closePath();
    }
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="h-[340px] sm:h-[420px] lg:h-[440px] w-full bg-[#242424] border-8 border-custom-yellow rounded-3xl shadow-neo relative overflow-hidden group">
      {/* Chalkboard texture lines / noise */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />

      {/* Top Toolbar */}
      <div className="absolute top-4 left-4 z-10 flex gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-xl border-2 border-white/20">
        <button
          onClick={() => {
            setChalkColor("#ffffff");
            setChalkWidth(4);
          }}
          className={`p-2 rounded-lg transition-all flex items-center gap-1 font-bold text-xs ${
            chalkColor === "#ffffff"
              ? "bg-white text-black scale-110 shadow-sm"
              : "text-white hover:bg-white/20"
          }`}
          title="White Chalk"
        >
          <FaPaintBrush />
        </button>

        <button
          onClick={() => {
            setChalkColor("#FCD34D");
            setChalkWidth(4);
          }}
          className={`p-2 rounded-lg transition-all flex items-center gap-1 font-bold text-xs ${
            chalkColor === "#FCD34D"
              ? "bg-custom-yellow text-black scale-110 shadow-sm"
              : "text-custom-yellow hover:bg-white/20"
          }`}
          title="Yellow Chalk"
        >
          <FaPaintBrush />
        </button>

        <button
          onClick={() => {
            setChalkColor("#F87171");
            setChalkWidth(4);
          }}
          className={`p-2 rounded-lg transition-all flex items-center gap-1 font-bold text-xs ${
            chalkColor === "#F87171"
              ? "bg-custom-red text-white scale-110 shadow-sm"
              : "text-custom-red hover:bg-white/20"
          }`}
          title="Red Chalk"
        >
          <FaPaintBrush />
        </button>

        <div className="w-px bg-white/30 mx-1" />

        <button
          onClick={clearCanvas}
          className="p-2 text-white hover:text-red-400 hover:rotate-12 transition-all"
          title="Clear Board"
        >
          <FaTrashAlt />
        </button>
      </div>

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 font-shrikhand text-3xl sm:text-4xl md:text-5xl pointer-events-none select-none tracking-wider">
        DRAW HERE!
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        className="cursor-crosshair w-full h-full relative z-0 touch-none"
      />
    </div>
  );
}

export default Blackboard;
