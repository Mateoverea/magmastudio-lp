"use client";

import { navItems } from "@/constants/data";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FaDribbble, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Wrapper from "../wrapper/wrapper";
import AnimatedLink from "./animated-link";
import { FooterText } from "./footer-text";
import { useTransform, motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const [time, setTime] = useState<string>("");
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [isEntered, setIsEntered] = useState<boolean>(false);
  const [isLinkHovered, setIsLinkHovered] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const mexicoTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Mexico_City",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(`${mexicoTime} CDMX`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  if (pathName === "/studio" || pathName.includes("/blog/")) {
    return null;
  }

  return (
    <motion.section
      ref={sectionRef}
      animate={{
        backgroundPositionX: "800px",
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
      className="custom-gradient-bg w-full h-fit md:h-screen relative md:max-h-screen overflow-hidden px-3 md:px-0"
    >
      <div className="flex flex-col items-center w-full md:h-screen md:justify-between pt-8 md:pt-12 pb-8 md:pb-10">
        <Wrapper className="w-full flex flex-col lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]">
          <div className="z-[51] flex flex-col items-start gap-0 w-full">
            <div className="w-full flex flex-col md:flex-row justify-between items-start">
              <div className="w-full md:w-[80%]">
                <div className="w-full flex flex-col">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="relative w-[152px] h-[42px] transition-all duration-300 ease-out"
                  >
                    <Image
                      quality={100}
                      className="object-contain"
                      fill
                      src="/logo/logo_white.svg"
                      alt="Logo de Magma Studio"
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-start mt-8"
                  >
                    <h3 className="font-cabinetGrotesk uppercase text-white font-semibold text-5xl md:text-7xl tracking-tighter leading-[0.85]">
                      Haz Que <br className="hidden md:block" /> Tu Negocio 
                      <br className="hidden md:block" /> 
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF6A00]"> Despegue!</span>
                    </h3>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative inline-flex w-fit h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group mt-6"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF4500_0%,#FF6A00_50%,#FF4500_100%)]" />
                    <Link 
                      href="https://wa.me/523336767331?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#333333] px-3 md:px-6 py-1 text-base font-archivo font-medium text-white backdrop-blur-3xl"
                    >
                      Contáctanos por WhatsApp
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div className="w-full mt-8 md:mt-0">
                <div className="flex flex-wrap md:flex-nowrap md:flex-row gap-6 md:gap-8 items-start w-full justify-between">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-fit md:w-1/3 md:flex-grow"
                  >
                    <h3 className="font-cabinetGrotesk uppercase text-white font-medium mt-3 text-xl relative">
                      <span className="relative z-10">Navegación</span>
                      <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-gradient-to-r from-[#FF4500] to-[#FF6A00]"></span>
                    </h3>
                    <div className="flex flex-col items-start gap-2 mt-4">
                      {navItems.map((navItem, index) => {
                        return (
                          <AnimatedLink
                            key={index}
                            link={navItem.href}
                            text={navItem.title}
                          />
                        );
                      })}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-fit md:w-1/3 md:flex-grow"
                  >
                    <h3 className="font-cabinetGrotesk uppercase text-white font-medium mt-3 text-xl relative">
                      <span className="relative z-10">Información Legal</span>
                      <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-gradient-to-r from-[#FF4500] to-[#FF6A00]"></span>
                    </h3>
                    <div className="flex flex-col items-start gap-2 mt-4">
                      <AnimatedLink
                        link=""
                        text="Términos y Condiciones"
                        className="text-sm md:text-base"
                      />
                      <AnimatedLink
                        link=""
                        text="Política de Privacidad"
                        className="text-sm md:text-base"
                      />
                      <AnimatedLink
                        link=""
                        text="Política de Cookies"
                        className="text-sm md:text-base"
                      />
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-fit md:w-1/3 md:flex-grow"
                  >
                    <h3 className="font-cabinetGrotesk uppercase text-white font-medium mt-3 text-xl relative">
                      <span className="relative z-10">Recursos</span>
                      <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-gradient-to-r from-[#FF4500] to-[#FF6A00]"></span>
                    </h3>
                    <div className="flex flex-col items-start gap-2 mt-4">
                      <AnimatedLink
                        link=""
                        text="Presentación Corporativa"
                        className="text-sm md:text-base"
                      />
                      <AnimatedLink
                        link=""
                        text="Guía MVP Gratuita"
                        className="text-sm md:text-base"
                      />
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center gap-3 mt-5"
                      >
                        <Link
                          rel="noopener noreferrer"
                          target="_blank"
                          href=""
                        >
                          <Button 
                            size="icon"
                            className="bg-[#333333] hover:bg-white transition-colors duration-300"
                          >
                            <FaDribbble className="scale-125 text-[#FF4500]" />
                          </Button>
                        </Link>
                        <Link
                          rel="noopener noreferrer"
                          target="_blank"
                          href=""
                        >
                          <Button 
                            size="icon" 
                            className="bg-[#333333] hover:bg-white transition-colors duration-300"
                          >
                            <Instagram className="scale-100 text-[#FF4500]" />
                          </Button>
                        </Link>
                        <Link
                          rel="noopener noreferrer"
                          target="_blank"
                          href=""
                        >
                          <Button 
                            size="icon"
                            className="bg-[#333333] hover:bg-white transition-colors duration-300"
                          >
                            <FaGithub className="scale-125 text-[#FF4500]" />
                          </Button>
                        </Link>
                        <Link
                          rel="noopener noreferrer"
                          target="_blank"
                          href=""
                        >
                          <Button 
                            size="icon"
                            className="bg-[#333333] hover:bg-white transition-colors duration-300"
                          >
                            <FaXTwitter className="scale-125 text-[#FF4500]" />
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>

        {/* Bottom Part */}
        <div className="flex flex-col items-start w-full h-fit mt-20 md:mt-0 z-[50]">
          <FooterText />
        </div>

        <div className="mb-20"></div>
        <div className="z-[50] w-full px-4 md:px-32">
          <Separator className="md:-mt-20 bg-gradient-to-r from-transparent via-[#FF4500]/30 to-transparent h-[1px]" />
          <div className="w-full flex flex-col md:flex-row items-center justify-between mt-10 gap-2 md:gap-0">
            <motion.h4 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="font-archivo text-white text-lg hidden md:block"
            >
              © Magma Studio {year}, Todos los derechos reservados.
            </motion.h4>
            <motion.h4 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="font-archivo text-white text-lg md:hidden"
            >
              © Magma Studio {year}
            </motion.h4>
            <motion.h4 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="font-archivo text-white text-lg hidden md:block"
            >
              {time}
            </motion.h4>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
