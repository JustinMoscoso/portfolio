import React from "react";
// 1. Import motion from framer-motion
import { motion } from "framer-motion";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Gabai Parental Control",
    description:
      "A parental control application built with Kotlin and Jetpack Compose that allows parents to monitor screen time, block applications, manage bedtime schedules, and monitor child devices in real time using Supabase.",
    image: "https://placehold.co/800x500",
    tech: ["Kotlin", "Jetpack Compose", "Supabase", "Accessibility Service"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Loan Management System",
    description:
      "A modern web application for managing loan records, borrowers, payment history, due dates, and reports. Built using Laravel with a responsive Bootstrap interface.",
    image: "https://placehold.co/800x500",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Website Ng Binan",
    description:
      "A responsive portfolio website developed using React and Tailwind CSS featuring smooth animations, project showcases, and a clean modern UI.",
    image: "https://placehold.co/800x500",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "#",
    demo: "#",
  },
];

// 2. Define variants for scroll animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

function Projects() {
  return (
    /* FIXED: Adjusted base theme tokens to clean Light Mode and pinned positioning strictly to the left side */
    <section 
      id="projects" 
      className="bg-white text-zinc-800 w-full flex flex-col items-start justify-start text-left py-24"
    >
      {/* FIXED: Scaled out to max-w-6xl and shifted ml-0 to prevent unintended center constraints */}
      <div className="max-w-6xl w-full ml-0 px-6">
        
        {/* Header Section */}
        <div className="text-left mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 text-zinc-900">
            Featured Projects
          </h2>
          <p className="text-zinc-600 mt-5 leading-8">
            Here are some of the projects I've built throughout my learning
            journey. Each project represents my passion for creating clean,
            responsive, and user-friendly applications.
          </p>
        </div>

        {/* Projects Row Grid Layout (3 Columns on Desktop) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROJECTS_DATA.map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              className="
                bg-white 
                border 
                border-zinc-200 
                rounded-2xl 
                overflow-hidden 
                shadow-sm 
                hover:shadow-xl 
                hover:border-indigo-500/40 
                transition-all 
                duration-300 
                hover:-translate-y-1.5 
                flex 
                flex-col
              "
            >
              {/* Visual Media Container */}
              <div className="relative overflow-hidden bg-zinc-100 border-b border-zinc-100 aspect-[16/10]">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition duration-500 ease-out hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Text Content Container */}
              <div className="p-6 md:p-7 flex flex-col flex-1 justify-between gap-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Project 0{project.id}
                  </span>
                  
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-600 leading-relaxed text-sm line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-zinc-50 border border-zinc-200/80 px-2.5 py-1 rounded-md text-[11px] font-semibold text-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 mt-auto">
                  <a
                    href={project.demo}
                    className="flex-1 text-center bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors duration-200 shadow-sm"
                  >
                    Live Demo
                  </a>
                  
                  <a
                    href={project.github}
                    className="flex-1 text-center border border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;