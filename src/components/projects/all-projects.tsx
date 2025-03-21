"use client";

import { slideUp2 } from "@/anim/anim";
import { cn } from "@/lib/utils";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Code, Figma, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const AllProjects = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const description = "Proyectos Destacados";

  // Ajuste para mejor desplazamiento horizontal en dispositivos móviles y de escritorio
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  
  // Manejar carga retrasada de imágenes
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    // Simular carga de imágenes
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="portfolio"
      ref={targetRef}
      className="relative h-[300vh] w-full bg-[#1A1A1A]"
    >
      <div className="sticky h-screen justify-center top-0 flex flex-col py-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-6">
          <h2
            ref={containerRef}
            className="text-white w-full text-center uppercase text-nowrap text-4xl sm:text-5xl md:text-7xl font-semibold font-cabinetGrotesk"
          >
            {description.split(" ").map((word, index) => (
              <span
                key={index}
                className="relative overflow-hidden mr-3 inline-flex"
              >
                <motion.span
                  variants={slideUp2}
                  custom={index}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>
        
        <div className="flex items-center overflow-hidden pt-8 w-full">
          <motion.div 
            style={{ x }} 
            className="flex gap-8 md:gap-12 px-4"
          >
            {cards.map((card) => (
              <Card 
                key={card.id} 
                card={card} 
                isVisible={imagesLoaded}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card, isVisible }: { card: CardType; isVisible: boolean }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  const startImageCycle = () => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === card.images.length - 1 ? 0 : prev + 1
      );
    }, 400);
    setIntervalId(interval);
  };

  const stopImageCycle = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
    setCurrentImageIndex(0);
  };

  // Limpiar intervalo al desmontar
  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView && isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: card.id * 0.1 }}
      onMouseEnter={startImageCycle}
      onMouseLeave={stopImageCycle}
      className={cn(
        "group",
        card.id === 1 ? "ml-[1rem] md:ml-[8rem]" : "",
        "cursor-pointer"
      )}
    >
      <div className="relative w-[300px] sm:w-[450px] md:w-[550px] lg:w-[680px] h-[220px] sm:h-[300px] md:h-[350px] lg:h-[520px] rounded-[20px] overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <Image
          quality={85}
          priority={card.id <= 2}
          loading={card.id <= 2 ? "eager" : "lazy"}
          className={cn(
            "rounded-[20px] object-cover object-left-top transition-all ease-in-out duration-500",
            "group-hover:scale-110"
          )}
          fill
          sizes="(max-width: 640px) 300px, (max-width: 768px) 450px, (max-width: 1024px) 550px, 680px"
          src={card.images[currentImageIndex]}
          alt={card.title}
        />
        
        {/* Overlay con gradiente para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Botón de ver proyecto */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-[#d85a00] rounded-full p-3 text-white">
            <ExternalLink size={20} />
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex flex-wrap gap-2 md:gap-4">
          <div className="bg-[#1A1A1A] flex items-center text-white font-archivo text-sm md:text-lg border border-[#333333] rounded-full w-fit px-2 md:px-4 py-1">
            <Code className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Desarrollo MVP
          </div>
          <div className="bg-[#1A1A1A] flex items-center text-white font-archivo text-sm md:text-lg border border-[#333333] rounded-full w-fit px-2 md:px-4 py-1">
            <Figma className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Diseño
          </div>
          <div className="bg-[#7a290e] flex items-center text-white font-archivo text-sm md:text-lg rounded-full w-fit px-2 md:px-4 py-1">
            {card.year}
          </div>
        </div>
        
        <h4 className="mt-3 md:mt-4 text-3xl md:text-4xl lg:text-5xl text-white font-cabinetGrotesk uppercase font-semibold opacity-80 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
          {card.title}
        </h4>
        
        <p className="text-base md:text-lg lg:text-xl opacity-70 group-hover:opacity-90 text-white mt-2 line-clamp-3">
          {card.description}
        </p>
      </div>
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
      "/projects/astrae/1.png",
      "/projects/astrae/2.png",
      "/projects/astrae/3.png",
    ],
    title: "Astrae",
    year: "2024",
    description:
      "Plantillas de react/next.js bellamente diseñadas para sitios web impresionantes y premium.",
    id: 1,
  },
  {
    images: [
      "/projects/midas/1.png",
      "/projects/midas/2.png",
      "/projects/midas/3.png",
    ],
    title: "Midas Fintech",
    year: "2023",
    description:
      "Midas es la mejor manera de crear tarjetas de débito virtuales basadas en dinero móvil. Una aplicación fintech todo en uno que resuelve todas tus necesidades de tarjetas.",
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
  {
    images: [
      "/projects/nova/3.png",
      "/projects/nova/2.png",
      "/projects/nova/1.png",
    ],
    title: "Nova",
    year: "2022",
    description:
      "Nova es tu compañero de IA personalizado para conversaciones instantáneas 24/7. Crea tu amigo de IA y chatea en cualquier momento y lugar.",
    id: 4,
  },
  {
    images: [
      "/projects/hire1/3.png",
      "/projects/hire1/1.png",
      "/projects/hire1/2.png",
    ],
    title: "Hire1.ai",
    year: "2022",
    description:
      "Obtén el mejor 1% de desarrolladores de Google y Adobe, cuidadosamente evaluados tanto por IA como por personas.",
    id: 5,
  },
  {
    images: [
      "/projects/fontsnatcher/1.png",
      "/projects/fontsnatcher/2.png",
      "/projects/fontsnatcher/3.png",
    ],
    title: "Fontsnatcher",
    year: "2020",
    description:
      "Fontsnatcher es una forma revolucionaria de descubrir y encontrar fuentes utilizadas en tus sitios web favoritos y en toda la web.",
    id: 6,
  },
];
