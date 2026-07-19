"use client";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValue, useSpring } from "framer-motion";
import { animate } from "motion";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/About";
import Projects from "../components/project";
import Certifications from "../components/Certifications";
import Experience from "./Experience";
import {
  Briefcase,
  GraduationCap,
  Shield,
} from "lucide-react";
import {
  containerVariants,
  cardVariants,
  badgeVariants,
} from "../utils/animation";

function Home() {
  const location = useLocation();

  // 1. Track window scroll progress for the top bar
  const { scrollYProgress } = useScroll();

  // 2. Setup raw motion values for tracking actual mouse positions
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 3. Apply smooth physical springs for the lagging "trailing" circle effect
  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const trailingX = useSpring(mouseX, springConfig);
  const trailingY = useSpring(mouseY, springConfig);

  // 4. State management to prevent hydration bugs or showing up on mobile viewports
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (section) {
      const element = document.getElementById(section);
      if (element) {
        const offset = window.innerWidth >= 1024 ? 88 : 72;
        const startY = window.scrollY;
        const targetY = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);

        animate(startY, targetY, {
          duration: 0.9,
          easing: [0.22, 1, 0.36, 1],
          onUpdate: (value) => {
            window.scrollTo(0, value);
          },
        });
      }
    }

    // Check if the current device has hover capabilities (i.e., not a touch screen device)
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    setIsMobile(!hasMouse);

    if (!hasMouse) return;

    const handleMouseMove = (e) => {
      // Set the center coordinates of the elements relative to the viewport
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [location.search, mouseX, mouseY]);

  return (
    <>
      {/* Custom Fluid Cursor (Hidden on Mobile) */}
      {!isMobile && (
        <>
          {/* Inner Sharp Dot */}
          <motion.div
            style={{
              position: "fixed",
              left: mouseX,
              top: mouseY,
              x: "-50%",
              y: "-50%",
              width: "6px",
              height: "6px",
              backgroundColor: "#4f46e5",
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          />

          {/* Outer Ring */}
          <motion.div
            style={{
              position: "fixed",
              left: trailingX,
              top: trailingY,
              x: "-50%",
              y: "-50%",
              width: "36px",
              height: "36px",
              border: "1.5px solid #4f46e5",
              backgroundColor: "rgba(79, 70, 229, 0.04)",
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 9998,
            }}
          />
        </>
      )}

      {/* Scroll Indicator Bar */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "#4f46e5",
          zIndex: 100,
        }}
      />

      <Navbar />

      {/* Added clear overflow control and smooth scrolling structure */}
      <main className="pt-20 overflow-x-hidden min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <motion.div
         className="max-w-6xl mx-auto px-6"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.7 }}
       ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero />
        </motion.div>

        <About />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Experience />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Certifications />
        </motion.div>

        <section id="contact" className="bg-neutral-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">Let&apos;s Connect</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to build something great?</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-300">
              I&apos;m open to freelance work, full-time opportunities, and collaborative projects that make a real impact.
            </p>
            <a
              href="mailto:moscosojustin384@gmail.com"
              className="mt-8 inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
            >
              moscosojustin384@gmail.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;