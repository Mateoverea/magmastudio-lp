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
      <div className="flex flex-col md:flex-row w-full h-full relative">
        {/* Lava canvas - full background on mobile, left side on desktop */}
        <div className="absolute inset-0 md:relative md:w-1/2 md:h-full md:mt-10 mt-20 z-[20] md:overflow-visible">
          <LavaScene />
        </div>

        {/* Content container - right side on desktop */}
        <div className="flex flex-col gap-10 md:gap-0 justify-between h-fit min-h-[90vh] pb-10 items-center w-full md:w-3/5 px-3 md:px-4 lg:px-6 md:pt-16 lg:pt-32 md:-ml-16 lg:-ml-40 relative">
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center md:items-start mt-[7rem] md:mt-2 lg:mt-4 md:gap-1 z-[30]">
              {/* Mobile title */}
              <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-extrabold text-5xl sm:text-4xl text-white text-center justify-center leading-[1.2] md:hidden mt-40 mb-20">
                Desarrollo <span className="text-white">Web</span><br />
                a la Medida<br />
                <span className="block underline decoration-gray-500/60 text-[#333333]/90 text-4xl">Landings</span>
                <span className="block underline decoration-gray-500/60 text-[#333333]/90 text-4xl">Software</span>
                <span className="block underline decoration-gray-500/60 text-[#333333]/90 text-4xl">E-commerce</span>
              </h2>

              {/* Desktop title */}
              <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-bold text-4xl md:text-5xl lg:text-8xl text-white text-left hidden md:block">
                Desarrollo web a la
              </h2>

              <div className="flex items-start gap-4 md:gap-6 lg:gap-10 hidden md:flex flex-col md:flex-row">
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
              <div className="w-fit max-w-[90vw] md:max-w-[90%] lg:max-w-4xl overflow-hidden md:px-0 rounded-full bg-[#7a290e] py-2 md:py-3 lg:py-4 mt-0 border border-white/20 shadow-lg shadow-black/40 sm:z-10 md:z-auto">
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

      {/* Scroll icon - moved to be centered on the page */}
      {/* <div className="absolute bottom-5 left-0 right-0 mx-auto flex justify-center items-center z-[30]">
        <Link href="/">
          <div className="flex items-center gap-4">
            <div className="h-9 w-6 rounded-full border-[2px] border-white flex items-start justify-center">
              <motion.div
                animate={{
                  y: [0, 6, 0],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="w-[3px] h-2 mb-2 bg-white rounded-full"
              />
            </div>
          </div>
        </Link>
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