import { useState, useEffect } from "react";

function TypingTest() {
  const sampleText =
    "The quick brown fox jumps over the lazy dog. Modern web development requires consistency, creativity, and continuous learning.";

  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [started, timeLeft]);

  const correctChars = input
    .split("")
    .filter((char, i) => char === sampleText[i]).length;

  const accuracy =
    input.length === 0
      ? 100
      : Math.round((correctChars / input.length) * 100);

  const wpm = Math.round(input.trim().split(/\s+/).length);

  return (
    <section className="min-h-screen bg-stone-100 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-stone-800">
            ⌨️ Typing Test
          </h1>

          <div className="bg-stone-800 text-white px-5 py-2 rounded-full font-semibold">
            {timeLeft}s
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mb-10">
          <div className="bg-stone-100 rounded-xl p-5 text-center">
            <p className="text-stone-500">WPM</p>
            <h2 className="text-3xl font-bold">{wpm}</h2>
          </div>

          <div className="bg-stone-100 rounded-xl p-5 text-center">
            <p className="text-stone-500">Accuracy</p>
            <h2 className="text-3xl font-bold">{accuracy}%</h2>
          </div>

          <div className="bg-stone-100 rounded-xl p-5 text-center">
            <p className="text-stone-500">Characters</p>
            <h2 className="text-3xl font-bold">
              {input.length}/{sampleText.length}
            </h2>
          </div>
        </div>

        {/* Text */}
        <div className="bg-stone-50 border rounded-xl p-6 text-lg leading-9 text-stone-700 mb-8">
          {sampleText.split("").map((char, index) => {
            let color = "text-stone-400";

            if (index < input.length) {
              color =
                input[index] === char
                  ? "text-green-600"
                  : "text-red-500";
            }

            return (
              <span key={index} className={color}>
                {char}
              </span>
            );
          })}
        </div>

        {/* Input */}
        <textarea
          rows="6"
          value={input}
          onFocus={() => setStarted(true)}
          onChange={(e) => setInput(e.target.value)}
          disabled={timeLeft === 0}
          placeholder="Start typing here..."
          className="w-full border rounded-xl p-5 text-lg outline-none focus:ring-2 focus:ring-stone-800 resize-none"
        />

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => {
              setInput("");
              setTimeLeft(60);
              setStarted(false);
            }}
            className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-3 rounded-xl transition"
          >
            Restart
          </button>

          <button
            className="border border-stone-300 hover:bg-stone-100 px-8 py-3 rounded-xl transition"
          >
            New Test
          </button>
        </div>
      </div>
    </section>
  );
}

export default TypingTest;