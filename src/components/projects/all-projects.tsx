"use client";

import { cn } from "@/lib/utils";
import { motion, useInView} from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const AllProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section id="portfolio" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center">
            Nuestros Proyectos
            </h2>
            <p className="font-archivo max-w-[52ch] mx-auto text-lg md:text-xl text-white/80 text-center w-full mt-2">
              Transformamos ideas en experiencias digitales excepcionales
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
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
      <Link href={project.url} className="block">
        {/* Image Container - Adjusted aspect ratio for better display on all devices */}
        <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={project.images[0]}
            alt={project.title}
            width={1200}
            height={675}
            sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 45vw, 600px"
            className={cn(
              "object-cover object-center transition-all duration-700 w-full h-full",
              isHovered ? "scale-105 blur-[2px]" : "scale-100"
            )}
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          />
          
          {/* Overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Project Info Overlay */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-8 transition-all duration-500",
              isHovered ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
            )}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="bg-[#7a290e] text-white/90 text-xs sm:text-sm px-2.5 py-1 rounded-full">
                {project.year}
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white/90 text-xs sm:text-sm px-2.5 py-1 rounded-full flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" /> Desarrollo Web
              </span>
            </div>
            
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-cabinetGrotesk mb-2">
              {project.title}
            </h3>
            
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center text-white gap-1.5 text-sm font-medium">
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
  url: string;
};

const cards: CardType[] = [
  {
    images: [
      "/projects/adorantes/1.webp",
    ],
    title: "Adorantes",
    year: "2025",
    description:
      "Adorantes es una landing page para una artista mexicana, escultora y ceramista.",
    id: 1,
    url: "https://adrianadorantes.com",
  },
  {
    images: [
      "/projects/acredia/1.webp",
    ],
    title: "Acredia",
    year: "2025",
    description:
      "Acredia es una landing page para una empresa de servicios financieros y brokers de créditos.",
    id: 2,
    url: "https://acredia.mx",
  },
  {
    images: [
      "/projects/flover/flover.webp",
    ],
    title: "FLOVER",
    year: "2025",
    description:
      "FLOVER es una landing page para una empresa de producción agrícola en hidroponía.",
    id: 3,
    url: "https://flover.mx",
  },
];
