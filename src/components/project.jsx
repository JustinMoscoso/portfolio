import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import gabaiImg from "../assets/Gabai.png";
import websiteNgBinanImg from "../assets/websitengBinan.png";
import EncryptionImg from "../assets/Encryption.png";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Gabai Parental Control",
    image: gabaiImg,
    hues: [340, 10], // Warm Reds/Pinks
  },
  {
    id: 2,
    title: "Encryption",
    image: EncryptionImg,
    hues: [205, 245], // Deep Blues
  },
  {
    id: 3,
    title: "Website Ng Binan",
    image: websiteNgBinanImg,
    hues: [100, 140], // Vibrant Greens
  },
];

// Double the original dataset is enough for seamless structural loops in motion layouts.
const CAROUSEL_ITEMS = [...PROJECTS_DATA, ...PROJECTS_DATA];

const hueToHsl = (h) => `hsl(${h}, 100%, 50%)`;

function Projects() {
  // Use animation controls so we can cleanly pause the track on hover
  const controls = useAnimationControls();

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: "-50%",
      transition: {
        ease: "linear",
        duration: 20, // Adjust speed here (lower = faster)
        repeat: Infinity,
      },
    });
  };

  return (
    <section 
      id="projects" 
      className="bg-neutral-950 text-zinc-800 w-full flex flex-col items-center justify-start py-24 overflow-hidden"
    >
      {/* Header Section */}
      <div className="text-center mb-20 max-w-2xl px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Featured Projects
        </h2>
        <p className="text-zinc-400 mt-5 leading-8">
          Here are some of the projects I've built throughout my learning
          journey. Each project represents my passion for creating clean,
          responsive, and user-friendly applications.
        </p>
      </div>

      {/* Infinite Carousel Container Window */}
      <div className="w-full relative py-12 flex items-center overflow-hidden mask-edges">
        
        {/* Infinite Scroller Track managed by Framer Motion */}
        <motion.div 
          className="flex gap-12 w-max cursor-pointer"
          animate={controls}
          initial={{ x: "0%" }}
          animate={{
            x: "-50%", // Translates by half the track (one standard array width), creating a seamless loop
          }}
          transition={{
            ease: "linear",
            duration: 20, // Duration for one full loop cycle
            repeat: Infinity,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {CAROUSEL_ITEMS.map((project, index) => {
            const backgroundSplash = `linear-gradient(135deg, ${hueToHsl(project.hues[0])}, ${hueToHsl(project.hues[1])})`;
            const glowShadow = `0 20px 40px -10px ${hueToHsl(project.hues[0])}40`;

            return (
              <motion.div
                key={`${project.id}-${index}`}
                className="relative flex justify-center items-center w-[300px] sm:w-[360px] md:w-[400px] py-8 flex-shrink-0 group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Decorative Background Blob behind the popping image */}
                <div 
                  className="absolute inset-4 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ background: backgroundSplash }}
                />

                {/* The Popping Project Card Container */}
                <div className="relative w-full z-10 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 p-2 backdrop-blur-md">
                  
                  {/* Aspect Ratio Box Wrapper */}
                  <div 
                    className="relative w-full aspect-[16/10] rounded-xl overflow-hidden transition-all duration-500"
                    style={{ boxShadow: glowShadow }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient title mask reveal on active card hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-left">
                        <span 
                          className="text-xs font-bold uppercase tracking-widest bg-clip-text text-transparent"
                          style={{ backgroundImage: backgroundSplash }}
                        >
                          Project
                        </span>
                        <h3 className="text-lg font-bold text-white mt-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;