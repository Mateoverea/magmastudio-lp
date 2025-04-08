"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import StarSvg from "./star";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import LavaScene from "../lava-sphere/LavaScene";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.section
      ref={sectionRef}
      className="w-full h-fit min-h-screen md:h-screen relative"
    >
      {/* Layout container - flex on desktop */}
      <div className="flex flex-col lg:flex-row w-full h-full relative">
        {/* Lava canvas - full background on mobile/tablet, left side only on large desktop */}
        <div className="absolute inset-0 lg:relative lg:w-1/2 lg:h-full lg:mt-12 mt-10 z-[20] lg:overflow-visible">
          <LavaScene />
        </div>

        {/* Content container - right side on desktop */}
        <div className="flex flex-col gap-10 lg:gap-0 justify-between h-fit min-h-[90vh] pb-10 items-center w-full lg:w-3/5 px-3 md:px-4 lg:px-6 md:pt-16 lg:pt-32 lg:-ml-40 relative">
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center md:items-start mt-[7rem] md:mt-2 lg:mt-4 md:gap-1 z-[30]">
              {/* Mobile title - visible on mobile and tablet */}
              <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-extrabold text-5xl sm:text-4xl text-white text-center justify-center leading-[1.2] lg:hidden mt-40 mb-20">
                Desarrollo <span className="text-white">Web</span><br />
                a la Medida<br />
                <span className="block underline decoration-gray-500/60 text-[#333333]/90 text-4xl">Landings</span>
                <span className="block underline decoration-gray-500/60 text-[#333333]/90 text-4xl">Software</span>
                <span className="block underline decoration-gray-500/60 text-[#333333]/90 text-4xl">E-commerce</span>
              </h2>

              {/* Desktop title - only visible on large screens */}
              <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-bold text-4xl md:text-5xl lg:text-8xl text-white text-left hidden lg:block">
                Desarrollo web a la
              </h2>

              <div className="flex items-start gap-4 md:gap-6 lg:gap-10 hidden lg:flex flex-col md:flex-row">
                <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-extrabold text-4xl md:text-5xl lg:text-8xl text-white text-left relative">
                  <span className="lava-hover" data-text="medida">medida</span>
                </h2>
                <p className="font-archivo text-sm md:text-base lg:text-3xl text-[#333333]/80 text-center md:text-left max-w-[30ch] md:max-w-[40ch] uppercase pt-2">
                  Sitios web, Landing Pages, Software, E-commerce
                </p>
              </div>
            </div>

            {/* Marquee - set to lower z-index than lava sphere on desktop but higher on mobile */}
            <div className="w-full flex items-center justify-center px-3 md:px-0 mt-4 md:mt-6 lg:mt-8" 
                style={{ 
                  position: 'relative', 
                  zIndex: 10 
                }}>
              <div className="w-fit max-w-[90vw] md:max-w-[90%] lg:max-w-4xl overflow-hidden md:px-0 rounded-full bg-[#7a290e] py-2 md:py-3 lg:py-4 mt-0 border border-white/20 shadow-lg shadow-black/40 sm:z-10 lg:z-auto">
                <Marquee speed={40} className="w-fit">
                  <h2 className="uppercase font-cabinetGrotesk font-bold text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-white tracking-tighter drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                    Web con intención
                  </h2>
                  <div className="mx-2 md:mx-6 lg:mx-10 md:w-auto md:h-auto scale-75 md:scale-100">
                    <StarSvg />
                  </div>
                  <h2 className="uppercase font-cabinetGrotesk font-bold text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-white tracking-tighter drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                    Resultado con impacto
                  </h2>
                  <div className="mx-2 md:mx-6 lg:mx-10 md:w-auto scale-75 md:scale-100">
                    <StarSvg />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile-specific styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .w-full .flex .items-center div[style] {
            z-index: 30 !important;
          }
        }
      `}</style>

      {/* Overlay opcional si lo necesitas */}
      <div className="absolute inset-0 z-0 md:hidden" />
    </motion.section>
  );
};

export default Hero;