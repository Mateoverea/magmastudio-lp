"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import StarSvg from "./star";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.section
      ref={sectionRef}
      style={{
        backgroundImage: 'url("/lava/lavabg82.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full h-fit min-h-screen md:h-screen relative"
    >
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 z-[0] bg-black/50" />

      <div className="flex flex-col gap-10 md:gap-0 justify-between h-fit min-h-[90vh] pb-10 items-center w-full px-3 md:px-0 md:pt-32 relative z-[1]">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center md:items-start mt-[7rem] md:mt-8 md:gap-1">
            {/* Mobile title */}
            <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-extrabold text-5xl sm:text-5xl text-white text-center justify-center leading-[1.2] md:hidden">
              Creamos <span className="text-[#ff6500]">experiencias digitales</span><br />
              que hacen que tu<br />
              <span className="underline decoration-[#ff6500]/60">marca destaque</span>
            </h2>

            {/* Desktop title */}
            <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-bold text-5xl lg:text-8xl text-white text-left hidden md:block">
              Desarrollo web a la
            </h2>

            <div className="flex items-center gap-10 hidden md:flex">
              <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-extrabold text-5xl lg:text-8xl text-white text-left relative">
                <span className="lava-hover" data-text="medida">medida</span>
              </h2>
              <p className="font-archivo text-base md:text-3xl text-white/80 text-left max-w-[40ch] uppercase">
                Sitios web, Landing pages, Software Personalizado y Tiendas E-commerce.
              </p>
            </div>
          </div>

          {/* Marquee */}
          <div className="w-full flex items-center justify-center px-3 md:px-0">
            <div className="w-fit md:max-w-4xl overflow-hidden md:px-0 rounded-full bg-[#7a290e] py-3 md:py-4 mt-3 border border-white/20 shadow-lg shadow-black/40">
              <Marquee speed={40} className="w-fit">
                <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                  Web con intención
                </h2>
                <div className="mx-4 md:mx-10">
                  <StarSvg />
                </div>
                <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                  Resultado con impacto
                </h2>
                <div className="mx-4 md:mx-10">
                  <StarSvg />
                </div>
              </Marquee>
            </div>
          </div>
        </div>

        {/* Scroll icon */}
        <div className="flex flex-col-reverse h-full justify-between md:flex-col w-full items-center">
          <Link href="/">
            <div className="flex items-center gap-4 z-[214748300] mt-20">
              <div className="h-11 w-7 rounded-full border-[2px] border-white flex items-start justify-center">
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className="w-[2.5px] h-4 mb-4 bg-white rounded-full"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

