"use client";

import { getCalApi } from "@calcom/embed-react";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { BorderBeam } from "../ui/border-beam";

const Pricing = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#FF4500" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <section id="pricing" className=" w-full px-3">
      <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center mt-6">
        <span className=" hidden md:block">Precios Simples y Flexibles</span>
        <span className=" md:hidden">Precios Simples</span>
      </h2>
      <p className=" font-archivo max-w-[52ch] mx-auto text-lg md:text-xl text-white/80 text-center w-full mt-2">
        Diseño, Desarrollo, o ambos - ¡Cualquier cosa que necesites te cubrimos para asegurarnos de dar vida a tu MVP!
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:max-w-[52rem] gap-4 mx-auto mt-12">
        <div className="flex flex-col justify-between items-start p-6 w-full h-[34rem] md:hover:-translate-y-4 transition-transform ease-in-out duration-500 bg-[#1A1A1A] border border-[#333333] rounded-3xl">
          <div>
            <h4 className=" font-archivo text-xl md:text-2xl w-full text-white uppercase">
              Solo Diseño
            </h4>
            <p className=" font-archivo text-lg md:text-xl w-full text-white opacity-70 mt-2">
              Ideal para startups que buscan lanzarse con diseños pulidos y fáciles de usar. Obtenga una experiencia UX/UI perfecta y de alta calidad que da vida a tu visión.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <div className="flex items-center gap-1">
                <Check className=" text-white opacity-70" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white opacity-70">
                  Gestión Básica de Proyectos
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white opacity-70" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white opacity-70">
                  1 Diseñador Principal
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white opacity-70" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white opacity-70">
                  Revisiones Limitadas
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white opacity-70" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white opacity-70">
                  Soporte Básico por 30 Días
                </p>
              </div>
            </div>
          </div>
          <div
            data-cal-namespace="discovery-call"
            data-cal-link="studio-ix-gonodg/discovery-call"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className=" w-full mt-4 md:mt-8 relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF4500_0%,#FF6A00_50%,#FF4500_100%)]" />
            <span
              className={`text-white bg-[#1A1A1A] inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2.5 md:px-6 py-1 text-base font-archivo font-medium backdrop-blur-3xl`}
            >
              Agendar una Llamada
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between items-start p-6 w-full h-[34rem] md:hover:-translate-y-4 transition-transform ease-in-out duration-500 bg-[#1A1A1A] border border-[#333333] rounded-3xl relative overflow-clip">
          <div className=" z-10">
            <h4 className=" font-archivo text-xl md:text-2xl w-full text-[#FF4500] uppercase">
              MVP en Seis Semanas
            </h4>
            <p className=" font-archivo text-lg md:text-xl w-full text-white mt-2 opacity-70">
              Desarrollo completo de MVP, conectando con tu audiencia objetivo en solo seis semanas.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  MVP Garantizado en Seis Semanas
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  Gestión de Servicio Completo
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  2 Desarrolladores Frontend Senior
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  2 Desarrolladores Backend Senior
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  1 Diseñador Principal
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  1 Especialista en QA
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  Soporte Continuo
                </p>
              </div>
            </div>
          </div>
          <Button
            data-cal-namespace="discovery-call"
            data-cal-link="studio-ix-gonodg/discovery-call"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className=" w-full z-10"
          >
            Agendar una Llamada
          </Button>

          <div className=" absolute h-60 aspect-square rounded-full bg-[#FF4500] blur-3xl opacity-50 bottom-0 right-0 z-[1]" />
          <BorderBeam colorFrom="#FF6A00" colorTo="#FF4500" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
