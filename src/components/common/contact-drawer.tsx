"use client";

import { ArrowRight, CornerDownLeft, Loader } from "lucide-react";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import confetti from "canvas-confetti";
import BouncyComponent from "./bouncy-radio";

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
import { prospectFormSchema } from "@/schema";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { createProspect } from "../../../actions";
import { Textarea } from "../ui/textarea";

export function ContactDrawer() {
  const [isPending, startTransition] = useTransition();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  const form = useForm<z.infer<typeof prospectFormSchema>>({
    resolver: zodResolver(prospectFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectBrief: "",
      projectType: "web-application",
    },
  });

  const onSubmit = async (values: z.infer<typeof prospectFormSchema>) => {
    startTransition(async () => {
      const result = await createProspect(values);
      if (result.success) {
        form.reset();
        handleConfetti();
        setIsDrawerOpen(false);
        toast.success("Nos contactaremos contigo pronto");
      } else {
        if (result.error === "Email already exists") {
          toast.error("El email ya existe");
        } else {
          console.error("Form submission error:", result.error);
          if (typeof result.error === 'object') {
            const errorMessage = JSON.stringify(result.error);
            toast.error(`Error de validación: ${errorMessage}`);
          } else {
            toast.error(`Error: ${result.error || "Algo salió mal"}`);
          }
        }
      }
    });
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild className="hidden md:block">
        <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF4500_0%,#FF6A00_50%,#1A1A1A_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#1A1A1A] px-4 md:px-6 py-1 text-base font-archivo font-medium text-white backdrop-blur-3xl">
            Crea tu Proyecto
            <ArrowRight className="ml-2" />
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="h-fit md:h-[75dvh] py-5 md:py-6 w-full flex flex-col md:flex-row justify-between items-start md:items-center px-3 md:px-20">
          <div className="md:w-[45%] flex flex-col items-start w-full lg:mt-10">
            <div className="hidden md:block text-start">
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-5xl tracking-tighter lg:text-6xl text-[#1A1A1A] text-start md:mt-0">
                Nos Alegra
              </h2>
              
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-5xl tracking-tighter lg:text-6xl text-[#1A1A1A] text-start md:-mt-3">
                 Que Hayas Elegido
              </h2>
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-5xl tracking-tighter lg:text-6xl text-[#7a290e] text-start md:-mt-3">
                Magma Studio®
              </h2>
            </div>

            <div className="hidden md:block">
              <div
                onClick={() => form.handleSubmit(onSubmit)()}
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group mt-10"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF4500_0%,#FF6A00_50%,#FF4500_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white pl-6 pr-6 py-1 text-base font-archivo font-medium text-[#1A1A1A] backdrop-blur-3xl">
                  {isPending ? "Enviando..." : "Enviar Formulario"}
                  {isPending ? (
                    <Loader className="ml-2 animate-spin text-[#FF4500]" />
                  ) : (
                    <CornerDownLeft className="ml-2" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full md:w-[50%] gap-8 md:gap-6">
            <div className="md:hidden w-full">
              <div className="w-full flex items-center justify-center">
                <div className="w-12 h-1.5 bg-[#1A1A1A]/10 rounded-full" />
              </div>
            </div>

            <div className=" md:hidden">
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-5xl tracking-tighter lg:text-8xl text-[#1A1A1A] text-start md:mt-0">
                Nos alegra <br /> que hayas elegido{" "}
                <span className="text-[#FF4500]">Magma Studio®</span>
              </h2>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 md:gap-10 w-full"
              >
                <div className="flex items-center justify-between gap-4 md:gap-8 w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <FormLabel>
                          Nombre <span className=" text-[#FF4500]">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            placeholder="Tu Nombre"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <FormLabel>
                          Contacto <span className=" text-[#FF4500]">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            placeholder="Tu Correo Electrónico"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col items-start gap-2.5 md:gap-4 w-full">
                  <h4 className=" font-archivo font-semibold text-xl text-[#1A1A1A]">
                    Necesito ayuda con
                  </h4>
                  <BouncyComponent disabled={isPending} />
                </div>
                <FormField
                  control={form.control}
                  name="projectBrief"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Mensaje <span className=" text-[#FF4500]">*</span>
                      </FormLabel>{" "}
                      <FormControl>
                        <Textarea
                          disabled={isPending}
                          placeholder="Breve descripción del proyecto"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
              <div className="md:hidden w-full">
                <div
                  onClick={() => form.handleSubmit(onSubmit)()}
                  className="relative w-full inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF4500_0%,#FF6A00_50%,#FF4500_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white pl-3 pr-6 py-1 text-base font-archivo font-medium text-[#1A1A1A] backdrop-blur-3xl">
                    {isPending ? "Enviando..." : "Enviar Formulario"}
                    {isPending ? (
                      <Loader className="ml-2 animate-spin text-[#FF4500]" />
                    ) : (
                      <CornerDownLeft className="ml-2" />
                    )}{" "}
                  </span>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
