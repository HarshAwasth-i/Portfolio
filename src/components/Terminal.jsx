import { useState } from "react";

function Terminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "output", text: "PortfolioOS v1.0.0 (tty1)" },
    { type: "output", text: 'Type "help" to see available commands.' },
  ]);
  const [guessTarget, setGuessTarget] = useState(null);

  const addLine = (text, type = "output") => {
    setHistory((prev) => [...prev, { type, text }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const raw = inputVal;
      const cmd = raw.trim().toLowerCase();
      addLine(`guest@harsh:~$ ${raw}`, "input");

      // Number guessing ongoing
      if (guessTarget !== null && cmd !== "" && !isNaN(Number(cmd))) {
        const num = Number(cmd);
        if (num === guessTarget) {
          addLine("🎉 Correct! You guessed the number.");
          setGuessTarget(null);
        } else if (num < guessTarget) {
          addLine("Too low ⬇️ Try higher!");
        } else {
          addLine("Too high ⬆️ Try lower!");
        }
        setInputVal("");
        return;
      }

      switch (cmd) {
        case "help":
          addLine("Available commands: whoami, skills, projects, education, leetcode, contact, clear, sudo");
          addLine("Fun interactive games: game, guess, rps");
          break;

        case "whoami":
          addLine("Harsh Awasthi | B.Tech CSE Undergrad (2023–2027) @ KIIT University");
          addLine("Full Stack Developer | React, Node.js, Express, MySQL | C++ & DSA");
          break;

        case "skills":
          addLine("► Languages: C++, JavaScript, Python, HTML/CSS, SQL");
          addLine("► Frontend: React.js, Tailwind CSS, Responsive UI, Component Design");
          addLine("► Backend: Node.js, Express.js, RESTful APIs, JWT Auth");
          addLine("► Databases: MySQL, TiDB Cloud, Schema Design & Optimization");
          addLine("► Tools: Git, GitHub, Docker basics, SAP CAP, CI/CD");
          break;

        case "projects":
          addLine("1. DevSync (Kanban platform with role-based JWT auth & analytics)");
          addLine("2. Job Portal (Full-stack recruitment with candidate/recruiter workflows)");
          addLine("3. TaskPulse (High-performance scalable task tracking system)");
          addLine("Type 'projects' in browser or scroll to #projects to view live demos!");
          break;

        case "education":
          addLine("🎓 B.Tech in Computer Science & Engineering (2023 - 2027)");
          addLine("KIIT University, Bhubaneswar, Odisha");
          break;

        case "leetcode":
          addLine("🧠 LeetCode: https://leetcode.com/u/Harsh_Awasthii/");
          addLine("Actively practicing DSA and algorithms in C++!");
          break;

        case "contact":
          addLine("📫 Email: harshawasthi2023@gmail.com");
          addLine("💼 LinkedIn: linkedin.com/in/harsh-awasthi-181761331");
          addLine("🐙 GitHub: github.com/HarshAwasth-i");
          break;

        case "game":
          addLine("🎮 Available mini-games:");
          addLine("• guess  -> Guess the secret number (1-10)");
          addLine("• rps    -> Rock Paper Scissors vs Bot");
          break;

        case "guess": {
          const secret = Math.floor(Math.random() * 10) + 1;
          setGuessTarget(secret);
          addLine("I picked a number between 1 and 10. Enter your guess!");
          break;
        }

        case "rps":
          addLine("Enter 'rock', 'paper', or 'scissors' to play!");
          setGuessTarget(null);
          break;

        case "rock":
        case "paper":
        case "scissors": {
          const choices = ["rock", "paper", "scissors"];
          const bot = choices[Math.floor(Math.random() * 3)];
          addLine(`You picked: ${cmd} | Bot picked: ${bot}`);
          if (cmd === bot) {
            addLine("It's a draw! 🤝");
          } else if (
            (cmd === "rock" && bot === "scissors") ||
            (cmd === "paper" && bot === "rock") ||
            (cmd === "scissors" && bot === "paper")
          ) {
            addLine("You win! 🎉");
          } else {
            addLine("Bot wins! 🤖 Better luck next time.");
          }
          break;
        }

        case "sudo":
          addLine("Nice try. This incident will be reported to root! 🚨");
          break;

        case "clear":
          setHistory([]);
          setInputVal("");
          return;

        case "":
          break;

        default:
          addLine(`bash: ${cmd}: command not found. Type 'help' for options.`);
      }
      setInputVal("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black border-4 border-black rounded-2xl shadow-neo overflow-hidden flex flex-col font-mono text-sm sm:text-base">
      {/* Top Header Bar */}
      <div className="bg-gray-200 border-b-4 border-black px-4 py-2 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-custom-red border-2 border-black" />
          <div className="w-3 h-3 rounded-full bg-custom-yellow border-2 border-black" />
          <div className="w-3 h-3 rounded-full bg-custom-green border-2 border-black" />
        </div>
        <span className="font-bold text-black text-xs tracking-widest">
          root@harsh:~
        </span>
        <div className="w-10" />
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-64 overflow-y-auto bg-black text-custom-blue custom-scrollbar">
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`mb-1 leading-snug ${
              line.type === "input" ? "text-white font-semibold" : "text-custom-blue"
            }`}
          >
            {line.text}
          </div>
        ))}
        {/* Active Input Line */}
        <div className="flex items-center mt-2">
          <span className="text-custom-green mr-2 font-bold whitespace-nowrap">
            guest@harsh:~$
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-custom-blue caret-custom-blue font-mono"
            autoComplete="off"
            spellCheck="false"
            placeholder="type 'help'..."
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
