/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Wrapper from "../wrapper/wrapper";
import { ContactDrawer } from "./contact-drawer";
import SideMenu from "./menu";
import LanguageSelector from "./language-selector";
import { useTranslations } from "@/hooks/useTranslations";

export const Navigation = () => {
  const { scrollYProgress } = useScroll();
  const { t } = useTranslations(); // Hook de traducciones

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, []);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (isActive) {
        setVisible(true);
      } else {
        if (scrollYProgress.get() < 0.055) {
          setVisible(true);
        } else {
          setVisible(direction < 0);
        }
      }
    }
  });

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex fixed top-0 w-full z-[2147483000] transition-opacity duration-200",
            scrolled
              ? "bg-[#1A1A1A]/90 backdrop-blur-md"
              : "bg-[#1A1A1A]/90 backdrop-blur-md",
            "py-3 md:py-2.5"
          )}
        >
          <Wrapper className="w-full flex flex-row items-center justify-between md:justify-normal md:px-0 lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]">
            {/* Logo - Lado izquierdo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="flex items-center justify-center hover:scale-110 ease-in-out transition-all duration-200 lg:hidden">
                <Image
                  width={100}
                  height={42}
                  quality={100}
                  className="object-contain"
                  src="/logo/logo_white.svg"
                  alt="Logo de Magma Studio"
                  priority
                />
              </div>
              <div className="items-center justify-center hover:scale-110 ease-in-out transition-all duration-200 hidden lg:flex">
                <Image
                  width={50}
                  height={28}
                  quality={100}
                  className="object-contain"
                  src="/logo/Image01.webp"
                  alt="Logo de Magma Studio"
                  priority
                />
              </div>
            </Link>

            {/* Navegación - Centro con flexbox (solo desktop) */}
            <nav className="hidden md:flex flex-1 justify-center px-4">
              <div className="flex items-center gap-4 lg:gap-6 xl:gap-8">
                {navItems.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href}
                    className="text-white hover:scale-110 transition-transform duration-200 ease-in-out opacity-70 hover:opacity-100 uppercase text-sm lg:text-base xl:text-lg tracking-wider font-cabinetGrotesk font-semibold whitespace-nowrap"
                  >
                    {t(item.titleKey)}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Controles - Lado derecho */}
            <aside className="flex items-center gap-4 md:flex-shrink-0">
              <LanguageSelector />
              <ContactDrawer />
              <div>
                <motion.button
                  initial="hide"
                  animate={mobileNav ? "show" : "hide"}
                  onClick={() => {
                    toggleMobileNav();
                    setIsActive(!isActive);
                  }}
                  className="flex flex-col space-y-1.5 relative z-[2147483000]"
                  aria-label={mobileNav ? "Cerrar menú" : "Abrir menú"}
                >
                  <motion.span
                    variants={{ hide: { rotate: 0 }, show: { rotate: 45, y: 7.5 } }}
                    className="w-6 bg-white rounded-full h-[1.5px] block"
                  />
                  <motion.span
                    variants={{ hide: { opacity: 1 }, show: { opacity: 0 } }}
                    className="w-6 bg-white rounded-full h-[1.5px] block"
                  />
                  <motion.span
                    variants={{ hide: { rotate: 0 }, show: { rotate: -45, y: -7.5 } }}
                    className="w-6 bg-white rounded-full h-[1.5px] block"
                  />
                </motion.button>
              </div>
            </aside>
          </Wrapper>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isActive && (
          <SideMenu setIsActive={setIsActive} setMobileNav={setMobileNav} />
        )}
      </AnimatePresence>
    </div>
  );
};
