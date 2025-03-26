import { z } from "zod";

export const prospectFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Debe tener al menos 2 palabras" })
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)+$/, {
      message: "Ingrese su nombre completo",
    }),
  email: z.string().email({
    message: "Ingrese una dirección válida",
  }),
  projectType: z.string().min(1, {
    message: "Tipo de proyecto es requerido",
  }),
  projectBrief: z
    .string()
    .min(10, {
      message: "Debe tener al menos 10 palabras",
    })
    .max(200, {
      message: "No debe ser más largo de 200 palabras",
    }),
});
export const ctaFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Debe tener al menos 2 palabras" })
    .regex(/^[a-zA-Z]+(?: [a-zA-Z]+)+$/, {
      message: "Ingrese su nombre completo",
    }),
  email: z.string().email({
    message: "Ingrese una dirección válida",
  }),
  projectBrief: z
    .string()
    .min(10, {
      message: "Debe tener al menos 10 palabras",
    })
    .max(200, {
      message: "No debe ser más largo de 200 palabras",
    }),
});

export const leadFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Debe tener al menos 2 palabras",
  }),
  email: z.string().email({
    message: "Ingrese una dirección válida",
  }),
});
