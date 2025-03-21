import { Timeline } from "@/components/ui/timeline";
const OurProcess = () => {
  const data = [
    {
      title: "Descubrimiento y Estrategia",
      step: "Paso 01",
      description:
        "Analizamos tu idea, definimos las características principales y creamos una estrategia de desarrollo ágil que lleva tu producto al mercado rápidamente.",
    },
    {
      title: "Diseño y Prototipado",
      step: "Paso 02",
      description:
        "Creamos interfaces de usuario intuitivas y prototipos interactivos para validar la funcionalidad principal de tu proyecto antes de comenzar el desarrollo completo.",
    },
    {
      title: "Construcción e Iteración",
      step: "Paso 03",
      description:
        "Comenzamos el desarrolloutilizando tecnologías modernas, enfocándonos en características esenciales mientras mantenemos flexibilidad para escalabilidad y mejoras futuras.",
    },
    {
      title: "Mantenimiento y Mejoras",
      step: "Paso 04",
      description:
        "Te ayudamos a continuar mejorando tu producto y a implementar mejoras basadas en datos para preparar tu producto para el crecimiento y la expansión.",
    },
  ];
  return (
    <div id="how-it-works" className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default OurProcess;
