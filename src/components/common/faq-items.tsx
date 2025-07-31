import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslationArray } from "@/hooks/useTranslations";

export function FaqItems() {
  const { getArray } = useTranslationArray("faq.items"); // Para las preguntas FAQ
  const faqItems = getArray(); // Obtener las preguntas traducidas

  return (
    <Accordion
      type="single"
      className="w-full md:max-w-4xl mt-10 border border-[#333333] rounded-2xl px-2 pt-2.5 md:pt-6 bg-[#333333]"
    >
      {faqItems.map((item, index) => (
        <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
          <AccordionTrigger>
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
