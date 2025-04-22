"use client";

import BackToTop from "@/components/common/back-to-top";
import Cards from "@/components/common/cards";
import Cta from "@/components/common/cta";
import { FAQs } from "@/components/common/faq";
import Hero from "@/components/common/hero";
import MobileHero from "@/components/common/mobile-hero";
import OurProcess from "@/components/common/our-process";
import Preloader from "@/components/common/preloader";
import Pricing from "@/components/common/pricing";
import SocialProof from "@/components/common/social-proof";
import StickyCursor from "@/components/common/sticky-cursor";
//import Testimonials from "@/components/common/testimonials";
import AllProjects from "@/components/projects/all-projects";
import AllProjectsMobile from "@/components/projects/all-projects-mobile";
//import Video from "@/components/video/video-reel";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflowY = "visible";
    }, 2000);
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="w-full max-w-full h-fit overflow-clip">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <BackToTop />
      <StickyCursor />
      
      {/* Start of custom gradient background section */}
      <div className="custom-gradient-bg">
        <Hero />
        <MobileHero />
        <SocialProof />
        <Cards />
        <OurProcess />
        <div className="hidden md:block">
          <AllProjects />
        </div>
        <div className="md:hidden">
          <AllProjectsMobile />
        </div>
        <Pricing />
        <FAQs />
        <Cta />
      </div>
      {/* End of custom gradient background section */}
      
    </div>
  );
}
