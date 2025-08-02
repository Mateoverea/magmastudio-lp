import { Timeline } from "@/components/ui/timeline";
import { useTranslationArray } from "@/hooks/useTranslations";

const OurProcess = () => {
  const { getArray } = useTranslationArray("process.steps"); // Para los pasos del proceso
  const data = getArray(); // Obtener los pasos traducidos
  return (
    <div id="how-it-works" className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default OurProcess;
