"use client";

import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { BorderBeam } from "../ui/border-beam";
import Link from "next/link";

const Pricing = () => {
  return (
    <section id="pricing" className="w-full px-3">
      <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center">
        <span className="hidden md:block">Precios Simples y Flexibles</span>
        <span className="md:hidden">Precios Simples</span>
      </h2>
      <p className="font-archivo max-w-[52ch] mx-auto text-lg md:text-xl text-white/80 text-center w-full mt-2">
        Diseño, Desarrollo, o ambos - ¡Cualquier cosa que necesites te cubrimos para asegurarnos de dar vida a tu proyecto!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-12 max-w-[70rem]">
        {/* Landing Express */}
        <div className="flex flex-col justify-between items-start p-6 w-full h-auto md:hover:-translate-y-4 transition-transform ease-in-out duration-500 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#333333] rounded-3xl">
          <div>
            <h4 className="font-archivo text-xl md:text-2xl w-full text-white uppercase">
              Landing Express
            </h4>
            <p className="font-archivo text-lg md:text-xl w-full text-white/70 mt-2">
              Ideal para validar una idea o presentar tu producto de forma profesional y rápida.
            </p>
            <p className="font-archivo text-xl md:text-2xl font-semibold text-[#FF4500] my-4">
              Desde $300 USD
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {[
                "Hasta 5 secciones tipo one-pager",
                "Diseño personalizado",
                "Desarrollo en Next.js o Vite",
                "Hosting de dominio por 1 año",
                "Formulario de contacto integrado",
                "Entrega en 5 días",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-[#FF4500]" />
                  <p className="font-archivo text-base md:text-lg w-full text-white/70">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-archivo text-base md:text-lg text-white mt-4 italic">
              → Perfecto para lanzamientos exprés o presencia inicial de marca.
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
              Solicitar información
            </Link>
          </div>
        </div>

        {/* Landing Pro */}
        <div className="flex flex-col justify-between items-start p-6 w-full h-auto md:hover:-translate-y-4 transition-transform ease-in-out duration-500 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#333333] rounded-3xl">
          <div>
            <h4 className="font-archivo text-xl md:text-2xl w-full text-white uppercase">
              Landing Pro
            </h4>
            <p className="font-archivo text-lg md:text-xl w-full text-white/70 mt-2">
              Para marcas que necesitan contar su historia y construir confianza con sus clientes.
            </p>
            <p className="font-archivo text-xl md:text-2xl font-semibold text-[#FF4500] my-4">
              Desde $600 USD
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {[
                "Hasta 7 secciones tipo one-pager",
                "Animaciones suaves",
                "Optimización SEO básica",
                "Responsive en todos los dispositivos",
                "Integración con Google Analytics / Meta Pixel",
                "Entrega en 7 a 10 días",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-[#FF4500]" />
                  <p className="font-archivo text-base md:text-lg w-full text-white/70">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-archivo text-base md:text-lg text-white mt-4 italic">
              → Ideal para negocios digitales, startups o proyectos con visión a largo plazo.
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
              Solicitar información
            </Link>
          </div>
        </div>

        {/* Tienda Express */}
        <div className="flex flex-col justify-between items-start p-6 w-full h-auto md:hover:-translate-y-4 transition-transform ease-in-out duration-500 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#333333] rounded-3xl">
          <div>
            <h4 className="font-archivo text-xl md:text-2xl w-full text-white uppercase">
              Tienda Express
            </h4>
            <p className="font-archivo text-lg md:text-xl w-full text-white/70 mt-2">
              Tu tienda online, conectada a pasarelas de pago y lista para vender.
            </p>
            <p className="font-archivo text-xl md:text-2xl font-semibold text-[#FF4500] my-4">
              Desde $850 USD
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {[
                "Diseño personalizado y responsive",
                "Listo para cargar productos",
                "Carrito y checkout funcional",
                "Pasarela de pago (Stripe o PayPal)",
                "Página de contacto y agradecimiento",
                "Shopify integrado para gestión de inventario",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-[#FF4500]" />
                  <p className="font-archivo text-base md:text-lg w-full text-white/70">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-archivo text-base text-white/70 mt-4">
              <span className="font-semibold">Extras opcionales:</span> variantes de producto, correos automatizados, integraciones con inventario.
            </p>
            <p className="font-archivo text-base md:text-lg text-white mt-2 italic">
              → Ideal para vender productos físicos o digitales desde el primer día.
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
              Solicitar información
            </Link>
          </div>
        </div>

        {/* Web a Medida */}
        <div className="flex flex-col justify-between items-start p-6 w-full h-auto md:hover:-translate-y-4 transition-transform ease-in-out duration-500 bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#333333] rounded-3xl relative overflow-clip">
          <div className="z-10">
            <h4 className="font-archivo text-xl md:text-2xl w-full text-[#FF4500] uppercase">
              Web a la Medida
            </h4>
            <p className="font-archivo text-lg md:text-xl w-full text-white/70 mt-2">
              Para empresas o startups que necesitan una solución digital robusta, escalable y totalmente personalizada.
            </p>
            <p className="font-archivo text-xl md:text-2xl font-semibold text-white my-4">
              Desde $1,200 USD
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {[
                "Sitio completamente personalizado",
                "Secciones a la medida",
                "2 plantillas extra",
                "Animaciones e interacciones avanzadas",
                "Optimización SEO y performance",
                "Responsive y adaptable a todos los dispositivos",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-white" />
                  <p className="font-archivo text-base md:text-lg w-full text-white">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-archivo text-base text-white mt-4">
              <span className="font-semibold">Extras opcionales:</span> Ecommerce, integraciones API, contenido multi-idioma, migraciones, inteligencia artificial integrada.
            </p>
            <p className="font-archivo text-base md:text-lg text-white mt-2 italic">
              → Pensado para proyectos con visión grande y necesidades específicas.
            </p>
          </div>
          <Link
            href="https://wa.me/523336767331?text=Hola,%20me%20interesa%20el%20paquete%20Web%20a%20Medida"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full z-10 mt-6"
          >
            <Button className="w-full">Solicitar información</Button>
          </Link>
          <div className="absolute h-60 aspect-square rounded-full bg-[#FF4500] blur-3xl opacity-50 bottom-0 right-0 z-[1]" />
          <BorderBeam colorFrom="#FF6A00" colorTo="#FF4500" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
