import "../globals.css";

import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

import Footer from "@/components/common/footer";
import { Navigation } from "@/components/common/navigation";
import { archivo, cabinetGrotesk } from "@/lib/customFonts";
import { Toaster } from "react-hot-toast";

const baseUrl = "https://magmastudio.mx";
const wwwBaseUrl = "https://www.magmastudio.mx";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`) || new URL(`${wwwBaseUrl}`),
  keywords: [
    "Agencia de desarrollo Web",
    "Constructor de MVP para startups",
    "Desarrollo rápido de MVP",
    "Desarrollo de MVP",
    "Producto mínimo viable",
    "Agencia para startups tecnológicas",
    "Prototipado rápido",
    "Estrategia de producto",
    "Desarrollo de software",
    "Validación de producto",
    "Consultoría para startups",
    "Diseño de productos digitales",
    "Desarrollo de aplicaciones web",
    "Desarrollo de aplicaciones móviles",
    "Desarrollo full-stack",
  ],
  title: "Magma Studio — Desarrollo Web",
  description:
    "Somos una agencia de desarrollo web que transforma ideas en productos escalables y listos para el mercado.",
  openGraph: {
    title: "Magma Studio — Desarrollo Web",
    siteName: "Magma Studio",
    description:
      "Somos una agencia de desarrollo web que transforma ideas en productos escalables y listos para el mercado.",
    images: ["/images/thumbnail.png"],
    url: `${baseUrl}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Magma Studio — Desarrollo Web",
    description:
      "Somos una agencia de desarrollo web que transforma ideas en productos escalables y listos para el mercado.",
    images: ["/images/thumbnail.png"],
    creator: "@magmastudiomx",
  },
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={cn(
          "antialiased bg-[#1A1A1A] select-none",
          `${archivo.variable} ${cabinetGrotesk.variable}`
        )}
      >
        <Toaster
          containerStyle={{ zIndex: "214748300544 !important" }}
          toastOptions={{
            position: "bottom-center",
            style: {
              border: "1px solid #333333",
              fontFamily: "--var(font-archivo)",
              padding: "16px",
              borderRadius: "1000px",
              background: "#1A1A1A",
              color: "#FFF",
            },
          }}
        />
        <Analytics />
        <Navigation />
        <div className="min-h-screen w-full">{children}</div>
        <Footer />
        {/* <Popup /> */}
      </body>
    </html>
  );
}
