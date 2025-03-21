"use client";

import { features } from "@/constants/featuresData";
import FeatureCard from "./feature-cards";
import Lenis from "@studio-freight/lenis";
import { useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Wrapper from "../wrapper/wrapper";

interface Feature {
  number: string;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

interface CardsProps {
  features?: Feature[];
}

const Cards: React.FC<CardsProps> = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

  const isAtBottom = scrollYProgress.get() === 1;

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      id="services"
      ref={container}
      className="flex flex-col items-center bg-black pt-10"
    >
      <Wrapper
        className={`flex flex-col md:flex-row justify-between items-start w-full px-3 md:px-10 sticky pb-12 top-20 md:top-40 lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]`}
      >
        <h2 className="text-white uppercase text-nowrap text-5xl md:text-7xl font-semibold font-cabinetGrotesk -mt-10">
          Servicios
        </h2>
        <p className="text-white/80 max-w-xl text-lg md:text-xl font-archivo hidden md:block max-w-[40ch] -mt-10">
          Nos especializamos en convertir ideas en productos digitales de alto impacto. Desde
          la estrategia hasta la ejecución, proporcionamos la experiencia que necesitas para construir,
          lanzar y escalar con éxito.
        </p>
      </Wrapper>
      {features.map((feature, i) => {
        const targetScale: number = 1 - (features.length - i) * 0.05;
        return (
          <FeatureCard
            key={`p_${i}`}
            textColor={feature.text}
            {...feature}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default Cards;
