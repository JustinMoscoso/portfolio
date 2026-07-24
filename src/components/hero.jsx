import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaCode, FaTerminal, FaDatabase, FaLaptopCode, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/profile-transparent.png";
import hoverProfileImg from "../assets/boast.jpg";

const SKILLS_DATA = [
  { name: "React", icon: <FaLaptopCode className="text-sky-400" /> },
  { name: "PHP", icon: <FaCode className="text-indigo-400" /> },
  { name: "CodeIgniter", icon: <FaCode className="text-orange-400" /> },
  { name: "Kotlin", icon: <FaTerminal className="text-purple-400" /> },
  { name: "MySQL", icon: <FaDatabase className="text-blue-400" /> },
  { name: "Python", icon: <FaTerminal className="text-yellow-400" /> },
  { name: "C#", icon: <FaCode className="text-violet-400" /> },
  { name: "JavaScript", icon: <FaCode className="text-yellow-400" /> },
  { name: "Assembly", icon: <FaTerminal className="text-slate-400" /> },
  { name: "Supabase", icon: <FaDatabase className="text-emerald-400" /> },
];

// Duplicate list to achieve a seamless, gapless infinite scroll loop
const INFINITE_SKILLS = [...SKILLS_DATA, ...SKILLS_DATA];

function Hero() {
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (ripples.length > 6) {
      setRipples((prev) => prev.slice(1));
    }
    setRipples((prev) => [...prev, { id: Date.now() + Math.random(), x, y }]);
  };

  const removeRipple = (id) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-neutral-950 text-stone-100 flex items-center py-20 px-4 md:px-12 overflow-hidden select-none"
      onMouseMove={handleMouseMove}
    >
      {/* --- BACKGROUND GRADIENT --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      {/* --- WATER RIPPLE LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              initial={{ transform: "translate(-50%, -50%) scale(0)", opacity: 0.25 }}
              animate={{ transform: "translate(-50%, -50%) scale(1)", opacity: 0 }}
              exit={{ opacity: 0 }}
              onAnimationComplete={() => removeRipple(ripple.id)}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: ripple.x,
                top: ripple.y,
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                border: "1px solid rgba(168, 85, 247, 0.2)",
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.03) inset",
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* --- LAYERING CONTAINER --- */}
      <div className="max-w-6xl mx-auto w-full relative h-full flex flex-col justify-between min-h-[75vh] z-20">
        
        {/* --- LAYER 1: GIANT BACKGROUND TYPOGRAPHY --- */}
        <div className="absolute inset-x-0 top-1/4 -translate-y-1/2 text-center pointer-events-none z-10 hidden md:block select-none">
          <h1 className="text-[11rem] lg:text-[14rem] font-black tracking-tighter text-white uppercase opacity-[0.95] font-sans leading-none">
            Justin
          </h1>
        </div>

        <div className="md:hidden block mb-6">
          <h1 className="text-6xl font-black tracking-tight text-white uppercase">Justin</h1>
        </div>

        {/* --- LAYER 2: PORTRAIT HEADSHOT --- */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20 mt-12 md:mt-0">
          <div className="w-72 h-72 md:w-[420px] md:h-[420px] relative flex items-end justify-center group">
            <div className="absolute inset-0 bg-neutral-900/20 rounded-full border border-neutral-800/50 -z-10 shadow-2xl" />
            <img
              src={profileImg}
              alt="Justin Portfolio Cutout"
              className="w-full h-full object-cover object-bottom pointer-events-auto filter drop-shadow-[0_25px_25px_rgba(0,0,0,0.9)] transition duration-500 group-hover:opacity-0"
            />
            <img
              src={hoverProfileImg}
              alt="Alternate portrait of Justin"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-auto opacity-0 transition duration-500 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* --- LAYER 3: DUAL-WING CONTENT GRID --- */}
        <div id="about" className="grid md:grid-cols-2 gap-y-36 gap-x-12 w-full mt-auto relative z-30 mb-16 lg:mb-24">
          {/* Bottom Left Content Block */}
          <div className="flex flex-col justify-end max-w-sm space-y-6 md:pb-6">
            <div className="flex gap-3 text-lg">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 hover:bg-purple-600 hover:text-white transition shadow-sm">
                <FaGithub size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 hover:bg-purple-600 hover:text-white transition shadow-sm">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Bottom Right Content Block */}
          <div className="flex flex-col justify-end items-start md:items-end text-left md:text-right max-w-sm md:ml-auto space-y-6 md:pb-6">
            <a
              href="#contact"
              className="group bg-purple-600 text-white hover:bg-purple-500 px-6 py-3 rounded-full font-medium transition-all shadow-lg flex items-center gap-2 text-sm tracking-wide"
            >
              Let's Work
              <motion.span whileHover={{ x: 2, y: -2 }} className="inline-block transition-transform duration-200">
                <FaArrowUpRightFromSquare size={12} />
              </motion.span>
            </a>
          </div>
        </div>
      </div>

      {/* --- SKILLS GRID --- */}
      <div id="skills" className="absolute bottom-6 left-0 w-full z-40 hidden lg:block overflow-hidden py-4 select-none">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {SKILLS_DATA.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 bg-neutral-900/95 border border-neutral-800/90 px-5 py-3 rounded-xl text-neutral-100 shadow-lg"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-semibold text-sm tracking-wide">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;