"use client";

import { FaqItems } from "./faq-items";

export const FAQs = () => {
  return (
    <section id="faqs" className="relative px-3 lg:px-0 pt-12 pb-12 md:pt-14 md:pb-24">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl tracking-tighter lg:text-7xl text-white text-center mt-6">
          Preguntas Frecuentes
        </h2>
        <p className=" font-archivo max-w-[70ch] text-lg md:text-2xl text-white/80 text-center w-full mt-2">
          Las preguntas más comunes que nos hacen.
        </p>
        <FaqItems />
      </div>
    </section>
  );
};
