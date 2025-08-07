"use client";

import { RefreshCcw, Rocket, TestTube } from "lucide-react";
import Wrapper from "../wrapper/wrapper";
import Stat from "./stats";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal";
import { useTranslations, useTranslationArray } from "@/hooks/useTranslations";

const SocialProof = () => {
  const { t } = useTranslations(); // Hook de traducciones
  const { getArray } = useTranslationArray("social_proof.cards"); // Para las tarjetas
  const cards = getArray(); // Obtener las tarjetas traducidas
  
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  // Iconos para cada tarjeta
  const cardIcons = [Rocket, TestTube, RefreshCcw];
  
  return (
    <section className="pb-12 -mt-20 md:-mt-12 md:pt-0 md:pb-16">
      <Wrapper className="flex flex-col w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] gap-10 lg:gap-12 pt-12">
        <div className="flex flex-col gap-2">
          <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center md:mt-0">
            <br className=" hidden md:block" />
            {t("social_proof.title")}
          </h2>
          <p className="font-archivo md:max-w-[60ch] text-lg md:text-2xl text-white/80 text-center w-full mx-auto">
            <span className="hidden md:inline text-center">
              {t("social_proof.description")}
            </span>
            <span className="md:hidden text-center block">
              {t("social_proof.description_mobile")}
            </span>
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl">
          {cards.map((card, index) => {
            const IconComponent = cardIcons[index];
            const isHovered = index === 0 ? hovered : index === 1 ? hovered2 : hovered3;
            const setHoveredState = index === 0 ? setHovered : index === 1 ? setHovered2 : setHovered3;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredState(true)}
                onMouseLeave={() => setHoveredState(false)}
                className=" relative rounded-3xl overflow-clip group text-white w-full h-fit p-8 flex flex-col items-start hover:bg-[#333333]/70 bg-[#333333]/70 backdrop-blur-sm border border-[#272727]"
              >
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full w-full absolute inset-0"
                    >
                      <CanvasRevealEffect
                        animationSpeed={5}
                        containerClassName="bg-transparent"
                        colors={[
                          [255, 165, 0], // Naranja (#FFA500)
                          [255, 230, 0], // Amarillo pato (#FFE600)
                        ]}
                        opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                        dotSize={2}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className=" z-10 h-14 aspect-square bg-[#7a290e] border border-[#272727] rounded-full flex items-center justify-center">
                  <IconComponent />
                </div>
                <h4 className="z-10 mt-4 mb-1 text-3xl md:text-3xl tracking-tighter font-cabinetGrotesk font-medium text-white">
                  {card.title}
                </h4>
                <p className="z-10 font-archivo font-normal text-lg text-white/70 group-hover:text-white/100">
                  {card.description}
                </p>
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-transparent dark:bg-black/10" />
              </div>
            );
          })}
        </div>
      </Wrapper>
      <div className="h-6 md:h-[2rem]" />
    </section>
  );
};

export default SocialProof;
