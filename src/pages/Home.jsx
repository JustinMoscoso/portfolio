"use client";

import React from "react";
// Import motion and useScroll from your framer motion library package
import { motion, useScroll } from "framer-motion"; // Note: change to "motion/react" if using the new scoped package naming conventions
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/project";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

function Home() {
  // tracks the window scroll progress from 0 to 1
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Indicator Bar */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 6, // 6px thickness matches profile portfolios perfectly
          originX: 0,
          backgroundColor: "#4f46e5", // Default Indigo-600 color to complement your portfolio buttons
          zIndex: 100, // Forces bar above fixed navbars/elements
        }}
      />

      <Navbar />

      <main className="lg:ml-72 pt-16 lg:pt-0 overflow-x-hidden">
        <Hero />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default Home;