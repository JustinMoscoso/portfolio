import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaCode, FaTerminal, FaDatabase, FaLaptopCode, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/profile-transparent.png";

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
          <div className="w-72 h-72 md:w-[420px] md:h-[420px] relative flex items-end justify-center">
            <div className="absolute inset-0 bg-neutral-900/40 rounded-full border border-neutral-800/50 backdrop-blur-sm -z-10 shadow-2xl" />
            <img
              src={profileImg}
              alt="Justin Portfolio Cutout"
              className="w-full h-full object-cover object-bottom pointer-events-auto filter drop-shadow-[0_25px_25px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* --- LAYER 3: DUAL-WING CONTENT GRID --- */}
        <div className="grid md:grid-cols-2 gap-y-36 gap-x-12 w-full mt-auto relative z-30 mb-16 lg:mb-24">
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

      {/* --- AUTOMATIC INFINITE CAROUSEL (Scrolling Right) --- */}
      <div className="absolute bottom-6 left-0 w-full z-40 hidden lg:block overflow-hidden py-4 select-none">
        {/* Soft edge masking gradients to blend boundaries beautifully */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

        {/* Endless scrolling track running left-to-right via negative translation values */}
        <motion.div
          className="flex gap-4 w-max px-2"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {INFINITE_SKILLS.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                borderColor: "rgba(168, 85, 247, 0.4)",
                backgroundColor: "rgba(10, 10, 10, 0.95)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md px-5 py-2.5 rounded-xl text-neutral-300 shadow-xl cursor-pointer min-w-[140px]"
            >
              {/* Scaled up text-2xl Icon with a continuous subtle hover/float pulse */}
              <motion.span 
                className="text-2xl"
                whileHover={{ rotate: [0, -7, 7, 0] }}
                transition={{ duration: 0.4 }}
              >
                {skill.icon}
              </motion.span>
              <span className="font-semibold text-xs tracking-wide">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;