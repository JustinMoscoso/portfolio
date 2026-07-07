"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValue, useSpring } from "framer-motion";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/project";
import Certifications from "../components/Certifications";

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
  }, [mouseX, mouseY]);

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
      <main className="lg:ml-72 pt-16 lg:pt-0 overflow-x-hidden min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <motion.div
         className="max-w-6xl mx-auto px-6"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.7 }}
       ></motion.div>
        <Hero />
        <Projects />
        <Certifications />
       
      </main>
    </>
  );
}

export default Home;