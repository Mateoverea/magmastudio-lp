import { cn } from "@/lib/utils";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AllProjectsMobile = () => {
  return (
    <section id="portfolio-mobile" className=" w-full px-3 mb-20">
      <h2 className="text-white text-center uppercase text-5xl font-semibold font-cabinetGrotesk">
        Nuestros Proyectos
      </h2>
      <div className="flex flex-col gap-6 mt-8">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
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
              <Code className="mr-2" /> Desarrollo Web
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
    src: "/projects/adorantes/1.png",
    title: "Adorantes",
    year: "2025",
    description:
      "Adorantes es una landing page para una artista mexicana, escultora y ceramista.",
    id: 1,
    url: "https://adrianadorantes.com",
  },
  {
    src: "/projects/acredia/1.png",
    title: "Acredia",
    year: "2025",
    description:
      "Acredia es una landing page para una empresa de servicios financieros y brokers de créditos.",
    id: 2,
    url: "https://acredia.mx",
  }
];
