import React, { useState, useEffect } from "react";

const greetings = [
  "Welcome!",
  "स्वागत है!",
  "స్వాగతం!",
  "Bienvenido!",
  "Bienvenue!",
  "Willkommen!",
  "欢迎!",
  "ようこそ！",
  "환영합니다!",
  "Bem-vindo!",
];

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  // Update loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 90); // Fast animation

    return () => clearInterval(interval);
  }, []);

  // Rotate messages
  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % greetings.length);
    }, 200);

    return () => clearInterval(msgInterval);
  }, []);

  // ✅ Safely call onFinish AFTER progress reaches 100
  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onFinish();
      }, 300); // Small buffer
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinish]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-zinc-950 text-gray-800">
      <h1 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-50 transition-all duration-300 ease-in-out">
        {greetings[msgIndex]}
      </h1>
      <div className="w-3/4 max-w-lg h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-50 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-sm text-gray-50">{progress}%</p>
    </div>
  );
};

export default Loader;
