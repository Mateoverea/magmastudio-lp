"use client";

import { RefreshCcw, Rocket, TestTube } from "lucide-react";
import Wrapper from "../wrapper/wrapper";
import Stat from "./stats";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal";

const SocialProof = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  return (
    <section className="pt-0 pb-12 md:pt-0 md:pb-12">
      <Wrapper className="flex flex-col w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] gap-10 lg:gap-12 py-20">
        <div className="flex flex-col gap-2">
          <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center md:mt-0">
            <br className=" hidden md:block" />
            Impulsa tu Negocio Digital
          </h2>
          <p className="font-archivo md:max-w-[60ch] text-lg md:text-xl text-white/80 text-center w-full mx-auto">
            <span className="hidden md:inline text-center block">
              La presencia digital es crucial para las empresas. Te ayudamos a construir productos que
              te posicionan de la mejor forma para crecer.
            </span>
            <span className="md:hidden text-center block">
              Te ayudamos a construir un producto para tener presencia digital.
            </span>
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className=" relative rounded-3xl overflow-clip group text-white w-full h-fit p-8 flex flex-col items-start hover:bg-[#333333]/70 bg-[#333333]/70 backdrop-blur-sm border border-[#272727]"
          >
            <AnimatePresence>
              {hovered && (
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
                      [122, 41, 14], // Volcanico (#7a290e)
                      [255, 165, 0], // Naranja (#FFA500)
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className=" z-10 h-14 aspect-square bg-[#7a290e] border border-[#272727] rounded-full flex items-center justify-center">
              <Rocket />
            </div>
            <h4 className="z-10 mt-4 mb-1 text-3xl md:text-4xl tracking-tighter font-cabinetGrotesk font-medium text-white">
              Construye Rápido
            </h4>
            <p className="z-10 font-archivo font-normal text-lg text-white/70 group-hover:text-white/100">
              Entregamos tu primer prototipo en poco tiempo, para que puedas visualizar tu producto.
            </p>
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-transparent dark:bg-black/10" />
          </div>
          <div
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
            className=" relative rounded-3xl overflow-clip group text-white w-full h-fit p-8 flex flex-col items-start hover:bg-[#333333]/70 bg-[#333333]/70 backdrop-blur-sm border border-[#272727]"
          >
            <AnimatePresence>
              {hovered2 && (
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
                      [122, 41, 14], // Volcanico (#7a290e)
                      [255, 165, 0], // Naranja (#FFA500)
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}
                  />
                </motion.div>
              )}
            </AnimatePresence>{" "}
            <div className=" z-10 h-14 aspect-square bg-[#7a290e] border border-[#272727] rounded-full flex items-center justify-center">
              <TestTube />
            </div>
            <h4 className="z-10 mt-4 mb-1 text-3xl md:text-4xl tracking-tighter font-cabinetGrotesk font-medium text-white">
              Valida la Idea
            </h4>
            <p className="z-10 font-archivo font-normal text-lg text-white/70 group-hover:text-white/100">
              Valida tu idea con clientes reales: ¿realmente resuelve sus
              problema(s) y punto(s) de dolor?
            </p>
          </div>
          <div
            onMouseEnter={() => setHovered3(true)}
            onMouseLeave={() => setHovered3(false)}
            className=" relative rounded-3xl overflow-clip group text-white w-full h-fit p-8 flex flex-col items-start hover:bg-[#333333]/70 bg-[#333333]/70 backdrop-blur-sm border border-[#272727]"
          >
            <AnimatePresence>
              {hovered3 && (
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
                      [122, 41, 14], // Volcanico (#7a290e)
                      [255, 165, 0], // Naranja (#FFA500)
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}
                  />
                </motion.div>
              )}
            </AnimatePresence>{" "}
            <div className=" z-10 h-14 aspect-square bg-[#7a290e] border border-[#272727] rounded-full flex items-center justify-center">
              <RefreshCcw />
            </div>
            <h4 className=" z-10 mt-4 mb-1 text-3xl md:text-4xl tracking-tighter font-cabinetGrotesk font-medium text-white">
              Impulsa y Mejora
            </h4>
            <p className=" z-10  font-archivo font-normal text-lg text-white/70 group-hover:text-white/100">
              Utiliza la retroalimentación real de los usuarios para refinar, optimizar y mejorar tu
              producto.
            </p>
          </div>
        </div>
      </Wrapper>
      <div className="h-6 md:h-[2rem]" />
      <Wrapper className="flex flex-col w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] gap-10 lg:gap-20">
        <div className="flex flex-col gap-2">
          <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center md:mt-0">
            Confiado por fundadores
          </h2>
          <p className=" font-archivo text-lg md:text-xl text-white/80 text-center w-full">
            Mira cuánto impacto hemos generado
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-center w-fit md:w-full">
          <Stat num={2} subheading="Proyectos Completados" />

          <Stat num={3} subheading="Clientes Satisfechos" />

          <Stat num={0} subheading="Tiendas Creadas" />
        </div>
      </Wrapper>
    </section>
  );
};

export default SocialProof;
