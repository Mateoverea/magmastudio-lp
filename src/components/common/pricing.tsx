"use client";

import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { BorderBeam } from "../ui/border-beam";
import Link from "next/link";
import { useTranslations, useTranslationArray } from "@/hooks/useTranslations";

const Pricing = () => {
  const { t } = useTranslations(); // Hook de traducciones

  // Obtener los arrays de features para cada paquete
  const { getArray: getExpressFeatures } = useTranslationArray("pricing.packages.express.features");
  const { getArray: getProFeatures } = useTranslationArray("pricing.packages.pro.features");
  const { getArray: getEcommerceFeatures } = useTranslationArray("pricing.packages.ecommerce.features");
  const { getArray: getCustomFeatures } = useTranslationArray("pricing.packages.custom.features");

  // Obtener los paquetes de precios traducidos
  const packages = {
    express: {
      name: t("pricing.packages.express.name"),
      description: t("pricing.packages.express.description"),
      price: t("pricing.packages.express.price"),
      features: getExpressFeatures(),
      note: t("pricing.packages.express.note"),
      cta: t("pricing.packages.express.cta")
    },
    pro: {
      name: t("pricing.packages.pro.name"),
      description: t("pricing.packages.pro.description"),
      price: t("pricing.packages.pro.price"),
      features: getProFeatures(),
      note: t("pricing.packages.pro.note"),
      cta: t("pricing.packages.pro.cta")
    },
    ecommerce: {
      name: t("pricing.packages.ecommerce.name"),
      description: t("pricing.packages.ecommerce.description"),
      price: t("pricing.packages.ecommerce.price"),
      features: getEcommerceFeatures(),
      extras: t("pricing.packages.ecommerce.extras"),
      note: t("pricing.packages.ecommerce.note"),
      cta: t("pricing.packages.ecommerce.cta")
    },
    custom: {
      name: t("pricing.packages.custom.name"),
      description: t("pricing.packages.custom.description"),
      price: t("pricing.packages.custom.price"),
      features: getCustomFeatures(),
      extras: t("pricing.packages.custom.extras"),
      note: t("pricing.packages.custom.note"),
      cta: t("pricing.packages.custom.cta")
    }
  };

  return (
    <section id="pricing" className="w-full px-3">
      <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center">
        <span className="hidden md:block">{t("pricing.title")}</span>
        <span className="md:hidden">{t("pricing.title_mobile")}</span>
      </h2>
      <p className="font-archivo max-w-[52ch] mx-auto text-lg md:text-2xl text-white/80 text-center w-full mt-2">
        {t("pricing.subtitle")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-12 max-w-[70rem]">
        {/* Landing Express */}
        <div className="flex flex-col justify-between items-start p-6 w-full h-auto md:hover:-translate-y-4 transition-transform ease-in-out duration-500 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#333333] rounded-3xl">
          <div>
                                <span className="font-archivo text-xl md:text-2xl w-full text-white uppercase block">
              {packages.express.name}
                                </span>
            <p className="font-archivo text-lg md:text-xl w-full text-white/70 mt-2">
              {packages.express.description}
            </p>
            <p className="font-archivo text-xl md:text-2xl font-semibold text-[#FF4500] my-4">
              {packages.express.price}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {packages.express.features.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-[#FF4500]" />
                  <p className="font-archivo text-base md:text-lg w-full text-white/70">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-archivo text-base md:text-lg text-white mt-4 italic">
              {packages.express.note}
            </p>
          </div>
          <div className="w-full mt-6 relative inline-flex h-12 overflow-hidden rounded-full p-[3px] group">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF4500_0%,#FF6A00_50%,#FF4500_100%)]" />
            <Link
              href="https://wa.me/523336767331?text=Hola,%20me%20interesa%20el%20paquete%20Landing%20Express"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-transparent inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2.5 md:px-6 py-1 text-base font-archivo font-medium backdrop-blur-sm"
            >
              {packages.express.cta}
            </Link>
          </div>
        </div>

        {/* Landing Pro */}
        <div className="flex flex-col justify-between items-start p-6 w-full h-auto md:hover:-translate-y-4 transition-transform ease-in-out duration-500 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#333333] rounded-3xl">
          <div>
                                <span className="font-archivo text-xl md:text-2xl w-full text-white uppercase block">
              {packages.pro.name}
                                </span>
            <p className="font-archivo text-lg md:text-xl w-full text-white/70 mt-2">
              {packages.pro.description}
            </p>
            <p className="font-archivo text-xl md:text-2xl font-semibold text-[#FF4500] my-4">
              {packages.pro.price}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {packages.pro.features.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-[#FF4500]" />
                  <p className="font-archivo text-base md:text-lg w-full text-white/70">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-archivo text-base md:text-lg text-white mt-4 italic">
              {packages.pro.note}
            </p>
          </div>
          <div className="w-full mt-6 relative inline-flex h-12 overflow-hidden rounded-full p-[3px] group">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF4500_0%,#FF6A00_50%,#FF4500_100%)]" />
            <Link
              href="https://wa.me/523336767331?text=Hola,%20me%20interesa%20el%20paquete%20Landing%20Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-transparent inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2.5 md:px-6 py-1 text-base font-archivo font-medium backdrop-blur-sm"
            >
              {packages.pro.cta}
            </Link>
          </div>
        </div>

        {/* Tienda Express */}
        <div className="flex flex-col justify-between items-start p-6 w-full h-auto md:hover:-translate-y-4 transition-transform ease-in-out duration-500 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#333333] rounded-3xl">
          <div>
                                <span className="font-archivo text-xl md:text-2xl w-full text-white uppercase block">
              {packages.ecommerce.name}
                                </span>
            <p className="font-archivo text-lg md:text-xl w-full text-white/70 mt-2">
              {packages.ecommerce.description}
            </p>
            <p className="font-archivo text-xl md:text-2xl font-semibold text-[#FF4500] my-4">
              {packages.ecommerce.price}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {packages.ecommerce.features.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-[#FF4500]" />
                  <p className="font-archivo text-base md:text-lg w-full text-white/70">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-archivo text-base text-white/70 mt-4">
              {packages.ecommerce.extras}
            </p>
            <p className="font-archivo text-base md:text-lg text-white mt-2 italic">
              {packages.ecommerce.note}
            </p>
          </div>
          <div className="w-full mt-6 relative inline-flex h-12 overflow-hidden rounded-full p-[3px] group">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF4500_0%,#FF6A00_50%,#FF4500_100%)]" />
            <Link
              href="https://wa.me/523336767331?text=Hola,%20me%20interesa%20el%20paquete%20Tienda%20Express"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-transparent inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2.5 md:px-6 py-1 text-base font-archivo font-medium backdrop-blur-sm"
            >
              {packages.ecommerce.cta}
            </Link>
          </div>
        </div>

        {/* Web a Medida */}
        <div className="flex flex-col justify-between items-start p-6 w-full h-auto md:hover:-translate-y-4 transition-transform ease-in-out duration-500 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#333333] rounded-3xl relative overflow-clip">
          <div className="z-10">
                                <span className="font-archivo text-xl md:text-2xl w-full text-[#FF4500] uppercase block">
              {packages.custom.name}
                                </span>
            <p className="font-archivo text-lg md:text-xl w-full text-white/70 mt-2">
              {packages.custom.description}
            </p>
            <p className="font-archivo text-xl md:text-2xl font-semibold text-white my-4">
              {packages.custom.price}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {packages.custom.features.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-white" />
                  <p className="font-archivo text-base md:text-lg w-full text-white">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-archivo text-base text-white mt-4">
              {packages.custom.extras}
            </p>
            <p className="font-archivo text-base md:text-lg text-white mt-2 italic">
              {packages.custom.note}
            </p>
          </div>
          <Link
            href="https://wa.me/523336767331?text=Hola,%20me%20interesa%20el%20paquete%20Web%20a%20Medida"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full z-10 mt-6"
          >
            <Button className="w-full">{packages.custom.cta}</Button>
          </Link>
          <div className="absolute h-60 aspect-square rounded-full bg-[#FF4500] blur-3xl opacity-50 bottom-0 right-0 z-[1]" />
          <BorderBeam colorFrom="#FF6A00" colorTo="#FF4500" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
