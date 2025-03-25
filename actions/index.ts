"use server";

import prisma from "@/lib/db";
import { ctaFormSchema, leadFormSchema, prospectFormSchema } from "@/schema";
import nodemailer from "nodemailer";
import { z } from "zod";

const gmailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function createProspect(
  values: z.infer<typeof prospectFormSchema>
) {
  try {
    const validatedFields = prospectFormSchema.parse(values);

    const existingLead = await prisma.prospects.findUnique({
      where: {
        email: validatedFields.email,
      },
    });

    if (existingLead) {
      return {
        success: false,
        error: "Email already exists",
      };
    }

    const formattedProjectType = validatedFields.projectType
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Create prospect in database
    const prospect = await prisma.prospects.create({
      data: {
        name: validatedFields.name,
        email: validatedFields.email,
        projectType: formattedProjectType,
        projectBrief: validatedFields.projectBrief,
      },
    });

    // Send email notification
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              background-color: #000000;
              color: #ffffff;
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #111111;
              padding: 30px;
              border-radius: 20px;
            }
            .logo {
              text-align: center;
              margin-bottom: 30px;
            }
            .logo img {
              width: 150px;
            }
            .prospect-details {
              background-color: #1a1a1a;
              padding: 20px;
              border-radius: 12px;
              margin-top: 24px;
            }
            .title {
              text-align: center;
              font-size: 20px;
              color: #ffffff;
            }
            .label {
              color: #888888;
              font-size: 14px;
            }
            .value {
              font-size: 16px;
              color: #ffffff;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <img src="public/logo.png" alt="Magma Studio Logo">
            </div>
            <h2 class="title">Nuevo proyecto</h2>
            <div class="prospect-details">
              <p class="label">Nombre</p>
              <p class="value">${prospect.name}</p>
              
              <p class="label">Correo electrónico</p>
              <p class="value">${prospect.email}</p>
              
              <p class="label">Tipo de proyecto</p>
              <p class="value">${prospect.projectType}</p>
              
              <p class="label">Descripción del proyecto</p>
              <p class="value">${prospect.projectBrief}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const plainText = `
    Nuevo proyecto
    
    Nombre: ${prospect.name}
    Correo electrónico: ${prospect.email}
    Tipo de proyecto: ${prospect.projectType}
    Descripción del proyecto: ${prospect.projectBrief}
    `;

    await gmailTransporter.sendMail({
      from: '"Magma Studio" <magmastudio.mx@gmail.com>',
      to: "braimahabiola5@gmail.com, jojoamankwa@gmail.com",
      subject: `Nuevo proyecto de ${prospect.name}`,
      text: plainText,
      html: emailHtml,
    });

    return { success: true, data: prospect };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    console.log(error);
    return { success: false, error: "Algo salió mal." };
  }
}

export async function createLead(values: z.infer<typeof leadFormSchema>) {
  try {
    const validatedFields = leadFormSchema.parse(values);

    const existingLead = await prisma.leads.findUnique({
      where: {
        email: validatedFields.email,
      },
    });

    if (existingLead) {
      return {
        success: false,
        error: "El correo electrónico ya existe.",
      };
    }

    // Create lead in database
    const lead = await prisma.leads.create({
      data: {
        firstName: validatedFields.firstName,
        email: validatedFields.email,
      },
    });

    // Send email with PDF
    const emailHtml = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: #000000;
        color: #ffffff;
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #111111;
        padding: 30px;
        border-radius: 20px;
      }
      .logo {
        text-align: center;
        margin-bottom: 30px;
      }
      .logo img {
        width: 150px;
      }
      .content {
        text-align: center;
        margin: 30px 0;
      }
      .button {
        display: inline-block;
        background-color: #455CE9;
        color: #ffffff;
        padding: 15px 30px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: bold;
        margin-top: 20px;
      }
      .footer {
        margin-top: 30px;
        text-align: center;
        color: #888888;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">
        <img src="public/logo.png" alt="Magma Studio Logo">
      </div>
      <div class="content">
        <h1 style="color: #ffffff">Gracias por descargar nuestro Folleto!</h1>
        <p style="color: #ffffff" font-size: 16px;>Hola ${lead.firstName},</p>
        <p style="color: #ffffff; font-size: 14px;">Gracias por tu interés en nuestro Folleto. Este guía completa te ayudará a navegar por el proceso de construir tu primer MVP.</p>
        <a href="https://res.cloudinary.com/dlnsqeeos/image/upload/v1738945596/PDF/The%20Ultimate%20Blueprint%20For%20MVP%20Success.pdf" class="button">
          Descarga tu Folleto
        </a>
        <p style="margin-top: 30px; color: #ffffff; font-size: 14px;">Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.</p>
      </div>
      <div class="footer">
        © ${new Date().getFullYear()} Magma Studio. Todos los derechos reservados.
      </div>
    </div>
  </body>
</html>
`;

    const plainText = `
Gracias por descargar nuestro Folleto!

Hola ${lead.firstName},

Gracias por tu interés en nuestro Folleto. Este guía completa te ayudará a navegar por el proceso de construir tu primer MVP.

Descarga tu Folleto aquí: https://res.cloudinary.com/dlnsqeeos/image/upload/v1738945596/PDF/The%20Ultimate%20Blueprint%20For%20MVP%20Success.pdf

Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.

© ${new Date().getFullYear()} Magma Studio. Derechos reservados.
`;

    await gmailTransporter.sendMail({
      from: '"Magma Studio" <magmastudio.mx@gmail.com>',
      to: lead.email,
      subject: "Tu proyecto está listo! 🚀",
      text: plainText,
      html: emailHtml,
    });

    return { success: true, data: lead };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    console.log(error);
    return { success: false, error: "Something went wrong." };
  }
}

export async function createCtaProspect(values: z.infer<typeof ctaFormSchema>) {
  try {
    const validatedFields = ctaFormSchema.parse(values);

    const existingLead = await prisma.prospects.findUnique({
      where: {
        email: validatedFields.email,
      },
    });

    if (existingLead) {
      return {
        success: false,
        error: "Email already exists",
      };
    }

    const prospect = await prisma.prospects.create({
      data: {
        name: validatedFields.name,
        email: validatedFields.email,
        projectType: "Other",
        projectBrief: validatedFields.projectBrief,
      },
    });

    // Send email notification
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              background-color: #000000;
              color: #ffffff;
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #111111;
              padding: 30px;
              border-radius: 20px;
            }
            .logo {
              text-align: center;
              margin-bottom: 30px;
            }
            .logo img {
              width: 150px;
            }
            .prospect-details {
              background-color: #1a1a1a;
              padding: 20px;
              border-radius: 12px;
              margin-top: 24px;
            }
            .title {
              text-align: center;
              font-size: 20px;
              color: #ffffff;
            }
            .label {
              color: #888888;
              font-size: 14px;
            }
            .value {
              font-size: 16px;
              color: #ffffff;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <img src="public/logo.png" alt="Magma Studio Logo">
            </div>
            <h2 class="title">Nuevo proyecto</h2>
            <div class="prospect-details">
              <p class="label">Nombre</p>
              <p class="value">${prospect.name}</p>
              
              <p class="label">Correo electrónico</p>
              <p class="value">${prospect.email}</p>
              
              <p class="label">Tipo de proyecto</p>
              <p class="value">${prospect.projectType}</p>
              
              <p class="label">Descripción del proyecto</p>
              <p class="value">${prospect.projectBrief}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const plainText = `
    Nuevo proyecto
    
    Nombre: ${prospect.name}
    Correo electrónico: ${prospect.email}
    Tipo de proyecto: ${prospect.projectType}
    Descripción del proyecto: ${prospect.projectBrief}
    `;

    await gmailTransporter.sendMail({
      from: '"Magma Studio" <magmastudio.mx@gmail.com>',
      to: "braimahabiola5@gmail.com, jojoamankwa@gmail.com",
      subject: `Nuevo proyecto de ${prospect.name}`,
      text: plainText,
      html: emailHtml,
    });

    return { success: true, data: prospect };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    console.log(error);
    return { success: false, error: "Algo salió mal." };
  }
}
