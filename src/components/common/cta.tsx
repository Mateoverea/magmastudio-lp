"use client";

import { Check, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../wrapper/wrapper";
import { motion } from "framer-motion";
import { CornerDownLeft, Loader } from "lucide-react";

import confetti from "canvas-confetti";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { ctaFormSchema } from "@/schema";
import { useState, useTransition } from "react";
import { Textarea } from "../ui/textarea";
import toast from "react-hot-toast";
import { createCtaProspect } from "../../../actions";

const Cta = () => {
  const [isPending, startTransition] = useTransition();

  const handleConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("contacto@magmastudio.mx");
    setCopied(true);
    toast.success("Email copiado al portapapeles!");
    setTimeout(() => setCopied(false), 4000);
  };

  const form = useForm<z.infer<typeof ctaFormSchema>>({
    resolver: zodResolver(ctaFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectBrief: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ctaFormSchema>) => {
    startTransition(async () => {
      const result = await createCtaProspect(values);
      if (result.success) {
        form.reset();
        handleConfetti();
        toast.success("Nos pondremos en contacto contigo pronto");
      } else {
        if (result.error === "Email already exists") {
          toast.error("El email ya existe");
        } else {
          toast.error("Algo salió mal");
        }
      }
    });
  };

  return (
    <section className="bg-[#7a290e] h-fit md:h-[82vh] w-full md:mt-40 px-3 md:px-0 overflow-hidden">
      <Wrapper className="w-full py-12 md:py-20 lg:py-24 h-full flex flex-col md:flex-row md:justify-between gap-12 md:gap-10 lg:gap-16 items-center md:px-0 group lg:px-[1rem] xl:px-[4rem] 2xl:px-[6rem] 3xl:px-[8rem] 4xl:px-[10rem] 5xl:px-[0rem] my-4">
        <div className="w-full md:w-[40%] lg:w-[40%] flex flex-col items-start h-full justify-center">
          <Link className="h-full" href="/">
          </Link>
          <div className="h-full flex flex-col justify-center mt-8 md:mt-0">
            <h3 className="font-cabinetGrotesk uppercase text-white font-semibold text-5xl md:text-5xl lg:text-7xl tracking-tighter leading-[0.85]">
              Obtén una estimación de tu proyecto
            </h3>
          </div>
        </div>
        <div className="w-full md:w-[60%] lg:w-[55%] flex flex-col items-start h-full overflow-hidden">
          <div className="w-full flex items-center justify-between mb-4">
            <h4 className="font-archivo uppercase text-white text-lg">
              Escríbenos
            </h4>

            <div
              onClick={copyToClipboard}
              className="flex items-center gap-2 cursor-pointer text-lg text-white font-archivo"
            >
              <div
                className={`inline-flex gap-2 items-center w-fit ${
                  copied ? "scale-0 hidden" : "scale-100"
                }`}
              >
                {" "}
                <Copy
                  className={`h-5 w-5 transition-all duration-300 ${
                    copied ? "scale-0" : "scale-100"
                  }`}
                />
                Copiar
              </div>
              <div
                className={`inline-flex gap-2 items-center w-fit ${
                  copied ? "scale-100" : "scale-0 hidden"
                }`}
              >
                <Check
                  className={`h-5 w-5 transition-all duration-300 ${
                    copied ? "scale-100" : "scale-0"
                  }`}
                />
                Copiado
              </div>
            </div>
          </div>

          <motion.div
            className="relative inline-block cursor-pointer w-full overflow-visible mb-2"
            onClick={() => {
              navigator.clipboard.writeText("contacto@magmastudio.mx");
              toast.success("Email copiado al portapapeles!");
            }}
            whileHover="hover"
            initial="initial"
          >
            <p className="text-white font-archivo text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium truncate">
              contacto@magmastudio.mx
            </p>
            <motion.div
              className="absolute -bottom-2 left-0 h-[3px] bg-white w-full origin-left"
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            />
          </motion.div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6 md:gap-8 w-full h-full mt-8 md:mt-10"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-white">
                        Nombre <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-transparent border-b border-b-white/50 focus:border-b-2 focus:border-b-white placeholder:text-white/70 text-white py-2"
                          disabled={isPending}
                          placeholder="Tu Nombre"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-white">
                        Contacto <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-transparent border-b border-b-white/50 focus:border-b-2 focus:border-b-white placeholder:text-white/70 text-white py-2"
                          disabled={isPending}
                          placeholder="Tu Correo Electrónico"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="projectBrief"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Mensaje <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isPending}
                        placeholder="Breve descripción del proyecto"
                        className="md:min-h-[120px] lg:min-h-[140px] resize-none bg-transparent border-b border-b-white/50 focus:border-b-2 focus:border-b-white placeholder:text-white/70 text-white py-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-white" />
                  </FormItem>
                )}
              />
            </form>
            <div className="w-full mt-8 md:mt-10 mb-4">
              <button
                onClick={() => form.handleSubmit(onSubmit)()}
                disabled={isPending}
                className="relative w-full inline-flex h-12 md:h-14 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group disabled:opacity-70"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF6A00_0%,#FF4500_50%,#FF6A00_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#FF4500] px-6 py-1 text-lg md:text-xl font-archivo font-medium text-white backdrop-blur-3xl">
                  {isPending ? "Enviando..." : "Enviar Formulario"}
                  {isPending ? (
                    <Loader className="ml-2 animate-spin text-white" />
                  ) : (
                    <CornerDownLeft className="ml-2 text-white" />
                  )}
                </span>
              </button>
            </div>
          </Form>
        </div>
      </Wrapper>
    </section>
  );
};

export default Cta;
