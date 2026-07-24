import React, { useRef, useState, useEffect } from "react";
import { Award, ExternalLink, Calendar, X } from "lucide-react";
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
    title: "Foundations of Project Management",
    issuer: "Google",
    logo: "https://unpkg.com/simple-icons@v13/icons/google.svg",
    date: "July 2026",
    credential: "/certificates/Justin D. Moscoso.pdf",
    isPDF: true,
    brandColor: "#4285F4", // Google Blue
  },
  {
    id: 3,
    title: "Virtualization for Everyone",
    issuer: "Coursera",
    logo: "https://unpkg.com/simple-icons@v13/icons/coursera.svg",
    date: "Jan 2026",
    credential: "/certificates/Coursera 9JJ65NNOLKMA.pdf",
    isPDF: true,
    brandColor: "#0056B3", // Coursera Blue
  },
  {
    id: 4,
    title: "Advanced Networking, Virtualization, and Security",
    issuer: "Coursera",
    logo: "https://unpkg.com/simple-icons@v13/icons/coursera.svg",
    date: "Jan 2026",
    credential: "/certificates/Coursera LDVLK6XA2VCO.pdf",
    isPDF: true,
    brandColor: "#0056B3", // Coursera Blue
  },
  {
    id: 5,
    title: "Ethical Hacker",
    issuer: "Cisco",
    logo: "https://unpkg.com/simple-icons@v13/icons/cisco.svg",
    date: "March 2025",
    credential: "/certificates/HitC-CoA_JDMoscoso.pdf",
    isPDF: true,
    brandColor: "#1BA0D7", // Cisco Light Blue / Teal
  },
  {
    id: 6,
    title: "Beyond the Breach: Leadership and Cybersecurity in the Age of Digital Transformation",
    issuer: "Mapúa Malayan Colleges",
    logo: "https://unpkg.com/simple-icons@v13/icons/readme.svg",
    date: "June 2026",
    credential: "/certificates/BTB-CoA_Moscoso, Justin D. (1).pdf",
    isPDF: true,
    brandColor: "#6B2B6B", // Purple
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
  const [selectedPDF, setSelectedPDF] = useState(null);
  
  const dragX = useMotionValue(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const rightGradientOpacity = useTransform(dragX, [-width, -width + 100, 0], [0, 1, 1]);
  const progressX = useTransform(dragX, [0, -width], ["0%", "100%"]);

  const handleViewCertificate = (certificate) => {
    if (certificate.isPDF) {
      setSelectedPDF(certificate);
    } else {
      window.open(certificate.credential, "_blank", "noopener,noreferrer");
    }
  };

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
                    <button
                      onClick={() => handleViewCertificate(certificate)}
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
                        cursor-pointer
                      "
                    >
                      View Certificate
                      <ExternalLink size={16} />
                    </button>
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

      {/* PDF Preview Modal */}
      {selectedPDF && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPDF(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-200">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-zinc-900">{selectedPDF.title}</h3>
                <p className="text-sm text-zinc-600 mt-1">{selectedPDF.issuer} • {selectedPDF.date}</p>
              </div>
              <button 
                onClick={() => setSelectedPDF(null)}
                className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
              >
                <X size={24} className="text-zinc-600" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto bg-zinc-50">
              <iframe 
                src={`${selectedPDF.credential}#toolbar=1`}
                className="w-full h-full"
                title={selectedPDF.title}
              />
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 p-6 border-t border-zinc-200 bg-white">
              <button 
                onClick={() => setSelectedPDF(null)}
                className="px-4 py-2 rounded-lg border border-zinc-300 text-zinc-700 font-medium hover:bg-zinc-50 transition-colors"
              >
                Close
              </button>
              <a 
                href={selectedPDF.credential}
                download
                className="px-4 py-2 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Certifications;