"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const FooterText = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="flex h-fit w-full items-center justify-center overflow-hidden relative"
      ref={containerRef}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute z-50 bottom-36 w-full flex justify-center"
      >
        <svg
          width="90%"
          height="228"
          viewBox="0 0 849 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block"
        >
          <rect
            x="5.67578"
            y="5.91016"
            width="838.761"
            height="217.776"
            stroke="#FF4500"
            strokeWidth="2"
          />
          <rect
            x="1.05469"
            y="219.074"
            width="9.24169"
            height="9.222"
            fill="white"
            stroke="#FF4500"
          />
          <rect
            x="1.05469"
            y="1.29688"
            width="9.24169"
            height="9.222"
            fill="white"
            stroke="#FF4500"
          />
          <rect
            x="838.812"
            y="219.074"
            width="9.24169"
            height="9.222"
            fill="white"
            stroke="#FF4500"
          />
          <rect
            x="838.812"
            y="1.29688"
            width="9.24169"
            height="9.222"
            fill="white"
            stroke="#FF4500"
          />
        </svg>
      </motion.div>

      <motion.span
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute font-bold bottom-40 md:bottom-28 left-0 right-0 mx-auto whitespace-nowrap text-center uppercase text-white font-cabinetGrotesk z-[60] tracking-wider"
        ref={textRef}
      >
        <span className="font-normal text-white/70 pr-2">M:// </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF6A00]">MAGMASTUDIO.MX</span>
      </motion.span>
    </div>
  );
};
