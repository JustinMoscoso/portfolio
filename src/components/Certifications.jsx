import React, { useRef, useState, useEffect } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: "Introduction to Programming With C#",
    issuer: "Coursera",
    logo: "https://unpkg.com/simple-icons@v13/icons/coursera.svg",
    date: "June 2025",
    credential: "https://coursera.org/share/3c285ab15e583648a90bd35fa107b37b",
    brandColor: "#0056B3", // Coursera Blue
  },
  {
    id: 2,
    title: "Virtualization for Everyone",
    issuer: "Coursera",
    logo: "https://unpkg.com/simple-icons@v13/icons/coursera.svg",
    date: "Jan 2026",
    credential: "https://coursera.org/share/5fb646ae424b0f20c701fb91713aaa87",
    brandColor: "#0056B3", // Coursera Blue
  },
  {
    id: 3,
    title: "Advanced Networking, Virtualization, and Security",
    issuer: "Coursera",
    logo: "https://unpkg.com/simple-icons@v13/icons/coursera.svg",
    date: "Jan 2026",
    credential: "https://coursera.org/share/9fb088ec99503b1db6b71f95324d2b84",
    brandColor: "#0056B3", // Coursera Blue
  },
  {
    id: 4,
    title: "Ethical Hacker",
    issuer: "Cisco",
    logo: "https://unpkg.com/simple-icons@v13/icons/cisco.svg",
    date: "March 2025",
    credential: "https://www.credly.com/badges/785a0a63-6f39-4b7d-833f-7ce47009b471/public_url",
    brandColor: "#1BA0D7", // Cisco Light Blue / Teal
  },
];

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
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

function Certifications() {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  
  const dragX = useMotionValue(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const rightGradientOpacity = useTransform(dragX, [-width, -width + 100, 0], [0, 1, 1]);
  const progressX = useTransform(dragX, [0, -width], ["0%", "100%"]);

  return (
    <section 
      id="certifications" 
      className="bg-zinc-50 text-zinc-800 w-full flex flex-col items-start justify-start text-left py-24 overflow-hidden"
    >
      <div className="max-w-6xl w-full ml-0 px-6 relative">

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
            developer. Drag or swipe to see some certifications I've earned while expanding
            my technical skills.
          </p>
        </div>

        {/* Carousel Container Wrapper */}
        <div className="relative w-full">
          
          {/* Dynamic Fading Right Edge Indicator Overlay */}
          {width > 0 && (
            <motion.div 
              style={{ opacity: rightGradientOpacity }}
              className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 via-zinc-50/70 to-transparent z-10 pointer-events-none hidden md:block"
            />
          )}

          {/* Carousel Window */}
          <motion.div 
            ref={carouselRef} 
            className="cursor-grab active:cursor-grabbing overflow-hidden w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Inner Draggable Track */}
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              style={{ x: dragX }}
              whileDrag={{ scale: 0.98 }}
              className="flex gap-6 w-max pb-6 pr-24 md:pr-0"
            >
              {CERTIFICATIONS_DATA.map((certificate) => (
                <motion.div
                  key={certificate.id}
                  variants={cardVariants}
                  style={{ backgroundColor: certificate.brandColor }}
                  className="
                    text-white
                    rounded-2xl
                    p-6
                    md:p-7
                    shadow-md
                    hover:shadow-2xl
                    transition-all
                    duration-300
                    hover:-translate-y-1.5
                    flex
                    flex-col
                    justify-between
                    gap-6
                    w-[290px] sm:w-[320px] md:w-[350px] select-none
                    group
                  "
                >
                  {/* Top Content Area */}
                  <div className="flex flex-col gap-5 text-left items-start w-full">
                    
                    {/* Logo & Icon Row */}
                    <div className="flex items-center justify-between w-full">
                      <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl text-white w-fit">
                        <Award size={26} />
                      </div>
                      
                      {/* Issuer Logo Container */}
                      <div className="h-10 w-10 flex items-center justify-center p-1 bg-white rounded-lg shadow-sm">
                        <img 
                          src={certificate.logo} 
                          alt={`${certificate.issuer} logo`} 
                          draggable="false"
                          className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 w-full">
                      <h3 className="text-xl font-bold text-white leading-snug min-h-[64px] line-clamp-3 text-left">
                        {certificate.title}
                      </h3>

                      <p className="text-white/80 font-medium text-sm text-left">
                        {certificate.issuer}
                      </p>

                      <div className="flex items-center gap-1.5 pt-1 text-xs font-medium text-white/60 justify-start">
                        <Calendar size={14} />
                        {certificate.date}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="pt-3 border-t border-white/20 mt-auto w-full">
                    <a
                      href={certificate.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ '--hover-color': certificate.brandColor }}
                      className="
                        inline-flex
                        items-center
                        justify-between
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-white/30
                        text-white
                        text-sm
                        font-semibold
                        bg-white/10
                        hover:bg-white
                        hover:text-[var(--hover-color)]
                        hover:border-white
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
          </motion.div>
        </div>

        {/* Custom Track Progress Indicator Bar */}
        {width > 0 && (
          <div className="mt-6 w-32 h-1 bg-zinc-200 rounded-full overflow-hidden relative">
            <motion.div 
              style={{ left: progressX }}
              className="absolute top-0 bottom-0 w-1/2 bg-zinc-800 rounded-full transition-shadow duration-150"
            />
          </div>
        )}

      </div>
    </section>
  );
}

export default Certifications;