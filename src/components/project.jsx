import React from "react";
// 1. Import motion from framer-motion
import { motion } from "framer-motion";
import gabaiImg from "../assets/Gabai.png";
import websiteNgBinanImg from "../assets/websitengBinan.png";
import EncryptionImg from "../assets/Encryption.png";
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Gabai Parental Control",
    image: gabaiImg,
    // Custom gradient hues (Hue A, Hue B) for the background splash
    hues: [340, 10], 
  },
  {
    id: 2,
    title: "Encryption",
    image: EncryptionImg,
    hues: [205, 245],
  },
  {
    id: 3,
    title: "Website Ng Binan",
    image: websiteNgBinanImg,
    hues: [100, 140],
  },
];

// Helper function to generate HSL colors for background splash
const hueToHsl = (h) => `hsl(${h}, 100%, 50%)`;

// 2. Define the signature animation variants from the example
const cardVariants = {
  offscreen: {
    y: 300,
    rotate: 0,
  },
  onscreen: {
    y: 0,
    rotate: -6, // Adds the distinct angled popup tilt effect
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Projects() {
  return (
    <section 
      id="projects" 
      className="bg-white text-zinc-800 w-full flex flex-col items-center justify-start py-24"
    >
      {/* Header Section */}
      <div className="text-center mb-16 max-w-2xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
          Featured Projects
        </h2>
        <p className="text-zinc-600 mt-5 leading-8">
          Here are some of the projects I've built throughout my learning
          journey. Each project represents my passion for creating clean,
          responsive, and user-friendly applications.
        </p>
      </div>

      {/* 3. Stacked Container resembling the Framer Motion Demo layout */}
      <div className="mx-auto max-w-[500px] w-full pb-24 px-4 flex flex-col gap-24">
        {PROJECTS_DATA.map((project, index) => {
          const backgroundSplash = `linear-gradient(306deg, ${hueToHsl(project.hues[0])}, ${hueToHsl(project.hues[1])})`;

          return (
            <motion.div
              key={project.id}
              className={`relative overflow-hidden flex justify-center items-center pt-5 -mb-16 card-container-${index}`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }} // Triggers animation when 40% visible
            >
              {/* Decorative Curved Path Splash Background */}
              <div 
                className="absolute inset-0 pointer-events-none" 
                style={{ 
                  background: backgroundSplash,
                  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`
                }} 
              />

              {/* The Project Card (Picture Only) */}
              <motion.div 
                variants={cardVariants}
                style={{ transformOrigin: "10% 60%" }} // Matches the anchor point rotation of the example
                className="
                  relative
                  z-10
                  bg-white 
                  border 
                  border-zinc-200 
                  rounded-2xl 
                  overflow-hidden 
                  shadow-xl 
                  w-full
                  max-w-[360px]
                  aspect-[16/10]
                  flex 
                  flex-col
                "
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;