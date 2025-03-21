"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AnimatedLink = ({ 
  text, 
  link, 
  className 
}: { 
  text: string; 
  link: string; 
  className?: string 
}) => {
  const menuLinkVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: -10,
      opacity: 0,
    },
  };

  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={link}
      className={cn("h-[30px] overflow-hidden font-archivo flex items-start gap-2", className)}
    >
      <motion.div 
        whileHover={{ y: -30 }}
        className="flex flex-col"
      >
        <span className="flex items-center h-[30px] text-white/70 text-sm md:text-base whitespace-nowrap">{text}</span>
        <span className="flex items-center h-[30px] text-white text-sm md:text-base whitespace-nowrap">{text}</span>
      </motion.div>
    </motion.a>
  );
};

export default AnimatedLink;
