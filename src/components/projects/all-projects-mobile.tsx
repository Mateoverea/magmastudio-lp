import { cn } from "@/lib/utils";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useTranslationArray } from "@/hooks/useTranslations";

const AllProjectsMobile = () => {
  const { t } = useTranslations(); // Hook de traducciones
  const { getArray } = useTranslationArray("projects.items"); // Para los proyectos
  const translatedProjects = getArray(); // Obtener los proyectos traducidos
  
  // Combinar datos estáticos con traducciones
  const projects = cards.map((project, index) => ({
    ...project,
    title: translatedProjects[index]?.title || project.title,
    description: translatedProjects[index]?.description || project.description,
  }));

  return (
    <section id="portfolio-mobile" className=" w-full px-3 mb-10">
      <h2 className="text-white text-center uppercase text-5xl font-semibold font-cabinetGrotesk">
        {t("projects.title")}
      </h2>
      <div className="flex flex-col gap-6 mt-8">
        {projects.map((card) => {
          return <Card card={card} key={card.id} t={t} />;
        })}
      </div>
    </section>
  );
};

const Card = ({ card, t }: { card: CardType; t: (key: string) => string }) => {
  return (
    <Link href={card.url} target="_blank" rel="noopener noreferrer" className="block mb-10 group hover:opacity-95 transition-opacity">
      <div key={card.id} className="mb-2">
        <div className="relative w-full h-[22rem] rounded-2xl overflow-hidden">
          <Image
            quality={100}
            className={cn(
              "rounded-2xl object-cover object-center group-hover:scale-110 transition-all ease-in-out duration-500"
            )}
            fill
            src={card.src}
            alt={card.title}
          />
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            <div className="bg-[#1A1A1A]/80 backdrop-blur-sm flex items-center text-white font-archivo text-lg border border-[#333333] rounded-full w-fit px-4 py-1">
              <Code className="mr-2" /> {t("projects.web_development")}
            </div>
            <div className="bg-[#FF4500] flex items-center text-white font-archivo text-lg rounded-full w-fit px-4 py-1">
              {card.year}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <h4 className="mt-4 text-3xl text-white font-cabinetGrotesk uppercase font-semibold group-hover:opacity-100 transition-opacity ease-in-out duration-75">
              {card.title}
            </h4>
            <ExternalLink className="mt-4 text-white w-5 h-5" />
          </div>
          <p className="text-lg text-white">{card.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default AllProjectsMobile;

type CardType = {
  src: string;
  title: string;
  description: string;
  id: number;
  year: string;
  url: string;
};

const cards: CardType[] = [
  {
    src: "/projects/adorantes/1.webp",
    title: "Adorantes", // Se traduce dinámicamente
    year: "2025",
    description: "Adorantes es una landing page para una artista mexicana, escultora y ceramista.", // Se traduce dinámicamente
    id: 1,
    url: "https://adrianadorantes.com",
  },
  {
    src: "/projects/acredia/1.webp",
    title: "Acredia", // Se traduce dinámicamente
    year: "2025",
    description: "Acredia es una landing page para una empresa de servicios financieros y brokers de créditos.", // Se traduce dinámicamente
    id: 2,
    url: "https://acredia.mx",
  },
  {
    src: "/projects/flover/flover.webp",
    title: "FLOVER", // Se traduce dinámicamente
    year: "2025",
    description: "FLOVER es una landing page para una empresa de producción agrícola en hidroponía.", // Se traduce dinámicamente
    id: 3,
    url: "https://flover.mx",
  },
];
