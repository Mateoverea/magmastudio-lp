"use client";

import { slideUp2 } from "@/anim/anim";
import { cn } from "@/lib/utils";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const AllProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section id="portfolio" className="w-full bg-[#1A1A1A] py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl tracking-tighter lg:text-7xl text-white text-center mt-6">
              Nuestros Proyectos
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
              Transformamos ideas en experiencias digitales excepcionales
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {cards.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: CardType; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="#" className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className={cn(
              "object-cover transition-all duration-700",
              isHovered ? "scale-105 blur-[2px]" : "scale-100"
            )}
            quality={90}
            priority={index <= 1}
          />
          
          {/* Overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Project Info Overlay */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-all duration-500",
              isHovered ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#7a290e] text-white/90 text-sm px-3 py-1 rounded-full">
                {project.year}
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white/90 text-sm px-3 py-1 rounded-full flex items-center gap-2">
                <Code className="w-4 h-4" /> Desarrollo Web
              </span>
            </div>
            
            <h3 className="text-white text-2xl md:text-3xl font-bold font-cabinetGrotesk mb-2">
              {project.title}
            </h3>
            
            <p className="text-white/80 text-base md:text-lg mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center text-white gap-2 text-sm font-medium">
              Ver Proyecto <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AllProjects;

type CardType = {
  images: string[];
  title: string;
  description: string;
  id: number;
  year: string;
};

const cards: CardType[] = [
  {
    images: [
      "/projects/adorantes/1.png",
      "/projects/adorantes/2.png",
      "/projects/adorantes/3.png",
    ],
    title: "Adorantes",
    year: "2025",
    description:
      "Adorantes es una landing page para una artista mexicana, escultora y ceramista.",
    id: 1,
  },
  {
    images: [
      "/projects/acredia/1.png",
      "/projects/acredia/2.png",
      "/projects/acredia/3.png",
    ],
    title: "Acredia",
    year: "2025",
    description:
      "Acredia es una landing page para una empresa de servicios financieros y brokers de créditos.",
    id: 2,
  },
  {
    images: [
      "/projects/stakenet/1.png",
      "/projects/stakenet/2.png",
      "/projects/stakenet/3.png",
    ],
    title: "Stakenet",
    year: "2023",
    description:
      "Predice, conéctate y gana con Stakenet. Comparte tus predicciones, compite con otros.",
    id: 3,
  },
];
