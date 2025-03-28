import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqItems() {
  return (
    <Accordion
      type="single"
      className="w-full md:max-w-4xl mt-10 md:mb-20 border border-[#333333] rounded-2xl px-2 py-2.5 md:py-6 bg-[#333333]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          ¿Cómo es su proceso de desarrollo?
        </AccordionTrigger>
        <AccordionContent>
          Dividimos el proyecto en etapas: descubrimiento, diseño, desarrollo y entrega. 
          Durante todo el proceso tendrás comunicación constante con nosotros por Slack, 
          avances semanales y demos en vivo. Queremos que estés al tanto y 100% alineado.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>¿Con qué tecnologías trabajan?</AccordionTrigger>
        <AccordionContent>
          Usamos tecnologías modernas como React, Next.js, TypeScript y Node.js. 
          Esto nos permite crear productos rápidos, escalables y listos para el futuro.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>¿Qué necesitan para empezar un proyecto?</AccordionTrigger>
        <AccordionContent>
          Solo necesitamos tu idea, un brief (si lo tienes) y cualquier material que ya tengas. 
          En una llamada inicial definimos metas, tiempos y presupuesto para asegurarnos 
          de que vamos por el camino correcto desde el día uno.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>¿Ofrecen soporte después del lanzamiento?</AccordionTrigger>
        <AccordionContent>
          Sí. Podemos ayudarte con mantenimiento, correcciones, mejoras, actualizaciones o monitoreo. 
          Estamos aquí para que tu proyecto siga creciendo después de salir al aire.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>¿Hay costos ocultos?</AccordionTrigger>
        <AccordionContent>
          No. Todo está claro desde el inicio. Si algo extra se requiere (como herramientas de terceros), 
          siempre lo hablamos antes de avanzar.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>¿Cuándo empieza a correr el tiempo de entrega?</AccordionTrigger>
        <AccordionContent>
          Comienza una vez que tenemos todo: anticipo, materiales y objetivos claros. 
          Desde ahí, corremos contigo.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>¿Cómo empiezo?</AccordionTrigger>
        <AccordionContent>
          Escríbenos por WhatsApp o llena el formulario del sitio. 
          Agendamos una llamada para conocernos y si todo hace match, arrancamos normalmente 
          en 1 o 2 semanas después de tu aprobación.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
