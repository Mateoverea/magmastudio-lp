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
          Nuestro proceso de desarrollo ágil está estructurado en fases claras:
          descubrimiento, diseño, desarrollo e implementación. Mantenemos
          comunicación diaria a través de Slack, actualizaciones semanales de progreso
          y sesiones regulares de demostración para asegurar la alineación con tu visión.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>¿Con qué tecnologías trabajan?</AccordionTrigger>
        <AccordionContent>
          Nos especializamos en tecnologías web modernas que incluyen React, Next.js,
          TypeScript y Node.js. Nuestro stack tecnológico está cuidadosamente
          seleccionado para proporcionar soluciones escalables y de alto rendimiento
          que cumplan con los estándares actuales de la industria y preparen su
          aplicación para el futuro.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          ¿Qué necesitan para comenzar un proyecto?
        </AccordionTrigger>
        <AccordionContent>
          Para comenzar, necesitamos tu brief del proyecto, guías de marca (si están
          disponibles) y requisitos de contenido. Durante nuestra consulta inicial,
          discutiremos tus objetivos, cronograma y presupuesto para asegurar que
          podamos entregar la mejor solución posible para tus necesidades.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>¿Ofrecen soporte post-lanzamiento?</AccordionTrigger>
        <AccordionContent>
          Sí, ofrecemos paquetes completos de soporte post-lanzamiento. Esto incluye
          corrección de errores, monitoreo de rendimiento, actualizaciones de seguridad
          y optimizaciones continuas. Estamos comprometidos a asegurar el éxito a largo
          plazo de tu producto más allá del lanzamiento inicial.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>¿Hay costos ocultos?</AccordionTrigger>
        <AccordionContent>
          No, nuestros precios son completamente transparentes. La cotización del
          proyecto incluye todos los costos de desarrollo, pruebas e implementación.
          Cualquier requisito adicional o servicios de terceros serán discutidos y
          aprobados por ti antes de su implementación.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          ¿Cuándo comienza el cronograma de seis semanas?
        </AccordionTrigger>
        <AccordionContent>
          El cronograma comienza después del inicio del proyecto y la recepción de todos
          los materiales requeridos. Esto incluye contratos firmados, pago inicial y
          activos del proyecto. Proporcionaremos un calendario detallado durante el
          inicio para asegurar expectativas y plazos claros.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>¿Cómo empiezo?</AccordionTrigger>
        <AccordionContent>
          Agenda una consulta a través de nuestro sitio web o formulario de contacto.
          Programaremos una llamada de descubrimiento para discutir las necesidades de
          tu proyecto. Si somos una buena opción, te proporcionaremos una propuesta
          y típicamente podemos comenzar dentro de 1-2 semanas después de completar
          el proceso de incorporación.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
