"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const MobileHero = () => {
  const sectionRef = useRef(null);

  return (
    <motion.section
      ref={sectionRef}
      className="w-full min-h-screen relative lg:hidden"
    >

      {/* Gradient Spot - Easily customizable */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#d85a00]/30 to-[#7a290e]/30 blur-[80px] z-[1]" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-l from-[#d85a00]/20 to-[#7a290e]/20 blur-[80px] z-[1]" />
      
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4 pt-40">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center text-center mt-20 mb-10">
            <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-extrabold text-5xl sm:text-4xl text-white leading-[1.2] mb-6">
              Desarrollo <span className="text-[#d85a00]">Web</span><br />
              a la Medida
            </h2>
            
            {/* Decorative element */}
            <div className="w-16 h-1 bg-[#d85a00] my-4"></div>
            
            <div className="flex flex-col gap-3">
              <span className="block underline decoration-[#d85a00]/70 text-white/90 text-4xl font-cabinetGrotesk">
                Landings
              </span>
              <span className="block underline decoration-[#d85a00]/70 text-white/90 text-4xl font-cabinetGrotesk">
                Software
              </span>
              <span className="block underline decoration-[#d85a00]/70 text-white/90 text-4xl font-cabinetGrotesk">
                E-commerce
              </span>
            </div>
          </div>

          {/* WhatsApp Contact Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              delay: 0.5 
            }}
            className="mt-12 relative z-20"
          >
            <Link
              href="https://wa.me/523336767331?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 25px rgba(216, 90, 0, 0.5)",
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-4 group"
              >
                {/* Button background with animated border */}
                <span className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md rounded-xl border border-white/10 shadow-xl z-0"></span>
                
                {/* Animated gradient border */}
                <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#d85a00] via-[#7a290e] to-[#d85a00] blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></span>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-2 font-cabinetGrotesk font-bold uppercase tracking-wider text-white">
                  <span>Contáctanos</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-4 w-16 h-16 rounded-full bg-[#d85a00]/20 backdrop-blur-sm z-10"></div>
      <div className="absolute top-20 right-4 w-20 h-20 rounded-full bg-[#7a290e]/20 backdrop-blur-sm z-10"></div>
    </motion.section>
  );
};

export default MobileHero;
