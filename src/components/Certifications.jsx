import React from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
// 1. Import motion from framer-motion
import { motion } from "framer-motion";

const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: "Introduction to Programming With C#",
    issuer: "Coursera",
    logo: "https://unpkg.com/simple-icons@v13/icons/coursera.svg",
    date: "June 2025",
    credential: "https://coursera.org/share/3c285ab15e583648a90bd35fa107b37b",
  },
  {
    id: 2,
    title: "Virtualization for Everyone",
    issuer: "Coursera",
    logo: "https://unpkg.com/simple-icons@v13/icons/coursera.svg",
    date: "Jan 2026",
    credential: "https://coursera.org/share/5fb646ae424b0f20c701fb91713aaa87",
  },
  {
    id: 3,
    title: "Advanced Networking, Virtualization, and Security",
    issuer: "Coursera",
    logo: "https://unpkg.com/simple-icons@v13/icons/coursera.svg",
    date: "Jan 2026",
    credential: "https://coursera.org/share/9fb088ec99503b1db6b71f95324d2b84",
  },
  {
    id: 4,
    title: "Ethical Hacker",
    issuer: "Cisco",
    logo: "https://unpkg.com/simple-icons@v13/icons/cisco.svg",
    date: "March 2025",
    credential: "https://www.credly.com/badges/785a0a63-6f39-4b7d-833f-7ce47009b471/public_url",
  },
];

// 2. Define the animation settings (Variants) for the stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Spaced timing out so cards animate one after another
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Start 30px lower and invisible
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } // Snappy, clean spring ease
  },
};

function Certifications() {
  return (
    <section 
      id="certifications" 
      className="bg-zinc-50 text-zinc-800 w-full flex flex-col items-start justify-start text-left py-24"
    >
      <div className="max-w-6xl w-full ml-0 px-6">

        {/* Header Container */}
        <div className="text-left mb-16 max-w-2xl">
          <p className="uppercase tracking-[0.25em] text-zinc-500 font-semibold text-sm">
            Learning Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-4">
            Certifications
          </h2>

          <p className="text-zinc-600 mt-5 leading-8">
            Continuous learning is an important part of my journey as a
            developer. Here are some certifications I've earned while expanding
            my technical skills and staying up to date with modern technologies.
          </p>
        </div>

        {/* 3. Changed this wrapper to a motion.div to control scroll properties */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }} // Animates when 15% of the section enters the screen
        >
          {CERTIFICATIONS_DATA.map((certificate) => (
            /* 4. Converted child cards to motion.div elements */
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              className="
                bg-white
                border
                border-zinc-200
                rounded-2xl
                p-6
                md:p-7
                shadow-sm
                hover:shadow-xl
                hover:border-indigo-500/50
                transition-all
                duration-300
                hover:-translate-y-1.5
                flex
                flex-col
                justify-between
                gap-6
                w-full
                group
              "
            >
              {/* Top Content Area */}
              <div className="flex flex-col gap-5 text-left items-start w-full">
                
                {/* Logo & Icon Row */}
                <div className="flex items-center justify-between w-full">
                  <div className="bg-zinc-100 border border-zinc-200 p-3.5 rounded-xl text-zinc-600 w-fit">
                    <Award size={26} />
                  </div>
                  
                  {/* Issuer Logo Container */}
                  <div className="h-10 w-10 flex items-center justify-center p-1 bg-zinc-50 rounded-lg border border-zinc-100">
                    <img 
                      src={certificate.logo} 
                      alt={`${certificate.issuer} logo`} 
                      className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <h3 className="text-xl font-bold text-zinc-900 leading-snug min-h-[64px] line-clamp-3 text-left">
                    {certificate.title}
                  </h3>

                  <p className="text-zinc-600 font-medium text-sm text-left">
                    {certificate.issuer}
                  </p>

                  <div className="flex items-center gap-1.5 pt-1 text-xs font-medium text-zinc-400 justify-start">
                    <Calendar size={14} />
                    {certificate.date}
                  </div>
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="pt-3 border-t border-zinc-100 mt-auto w-full">
                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-between
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-zinc-200
                    text-zinc-700
                    text-sm
                    font-semibold
                    bg-zinc-50
                    hover:bg-indigo-600
                    hover:text-white
                    hover:border-indigo-600
                    transition-all
                    duration-300
                  "
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Certifications;