import { Metadata } from "next";

const baseUrl = "https://studioix.agency";
const wwwBaseUrl = "https://www.studioix.agency";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`) || new URL(`${wwwBaseUrl}`),
  keywords: [
    "Agencia de desarrollo MVP",
    "Constructor de MVP para startups",
    "Desarrollo rápido de MVP",
    "Desarrollo de MVP en 6 semanas",
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
  title: "Blog CMS — Studio IX",
  description:
    "Creamos MVPs que transforman ideas en productos escalables y listos para inversores. Asóciate con nosotros para dar vida a tu visión con rapidez, precisión e impacto.",
  openGraph: {
    title: "Blog CMS — Studio IX",
    siteName: "Studio IX",
    description:
      "Creamos MVPs que transforman ideas en productos escalables y listos para inversores. Asóciate con nosotros para dar vida a tu visión con rapidez, precisión e impacto.",
    images: ["/images/thumbnail.png"],
    url: `${baseUrl}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog CMS — Studio IX",
    description:
      "Creamos MVPs que transforman ideas en productos escalables y listos para inversores. Asóciate con nosotros para dar vida a tu visión con rapidez, precisión e impacto.",
    images: ["/images/thumbnail.png"],
    creator: "@studioixagency",
  },
  icons: "/favicon.ico",
};

const SanityLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
};

export default SanityLayout;
