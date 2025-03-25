"use client";

import { animate, useInView, motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

interface Props {
  num: number;

  decimals?: number;

  subheading: string;
}

const Stat = ({ num, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,

      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  const formattedSubheading = subheading.split(" ").map((word, index, arr) => (
    <span key={index}>
      {word}
      {index < arr.length - 1 && <br />}
    </span>
  ));

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex flex-row md:w-72 md:flex-col items-center gap-4 md:gap-0 py-8 relative"
    >
      <h4 className="mb-2 text-center text-white text-7xl lg:text-9xl font-cabinetGrotesk font-semibold">
        <span ref={ref}></span>
      </h4>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <TrendingUp size={32} className="text-green-600 md:hidden -mt-12" />
      </motion.div>

      <p className="text-start md:text-center text-white text-lg md:text-xl opacity-80 font-archivo ml-4 md:ml-0">
        {formattedSubheading}
      </p>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="absolute right-12 hidden md:block"
      >
        <TrendingUp size={32} className="text-green-600" />
      </motion.div>
    </motion.div>
  );
};

export default Stat;
