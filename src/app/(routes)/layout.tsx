import "../globals.css";

import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import Footer from "@/components/common/footer";
import { Navigation } from "@/components/common/navigation";
import { archivo, cabinetGrotesk } from "@/lib/customFonts";
import { Toaster } from "react-hot-toast";

const baseUrl = "https://magmastudio.pro";
const wwwBaseUrl = "https://www.magmastudio.pro";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`) || new URL(`${wwwBaseUrl}`),
  keywords: [
    "Agencia de desarrollo Web",
    "Constructor de MVP para startups",
    "Desarrollo de landing pages",
    "Desarrollo de tiendas online",
    "Desarrollo de sistemas web",
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
    "Diseño web Guadalajara",
    "Desarrollo web México",
    "Agencia digital Jalisco",
    "Diseño de sitios web",
    "Optimización SEO"
  ],
  title: "Magma Studio — Desarrollo Web Profesional en Guadalajara",
  description:
    "Somos una agencia de desarrollo web en Guadalajara que transforma ideas en productos digitales escalables. Especialistas en landing pages, e-commerce y desarrollo de software.",
  openGraph: {
    title: "Magma Studio — Desarrollo Web Profesional en Guadalajara",
    siteName: "Magma Studio",
    description:
      "Somos una agencia de desarrollo web en Guadalajara que transforma ideas en productos digitales escalables. Especialistas en landing pages, e-commerce y desarrollo de software.",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Magma Studio - Agencia de Desarrollo Web"
      }
    ],
    url: `${baseUrl}`,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magma Studio — Desarrollo Web Profesional en Guadalajara",
    description:
      "Somos una agencia de desarrollo web en Guadalajara que transforma ideas en productos digitales escalables. Especialistas en landing pages, e-commerce y desarrollo de software.",
    images: ["/images/thumbnail.png"],
    creator: "@magmastudiomx",
  },
  icons: "/favicon.ico",
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Add preconnect for important domains to improve TTFB */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        
        {/* Add preload for critical assets */}
        <link 
          rel="preload" 
          href="/logo/logo_white.svg" 
          as="image" 
          type="image/svg+xml" 
        />
        
        {/* Avoid layout shift by preloading key fonts */}
        <link
          rel="preload"
          href="/assets/fonts/archivo.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/cabinet-grotesk.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Magma Studio",
              url: baseUrl,
              logo: `${baseUrl}/images/logo.png`,
              description: "Agencia de desarrollo web en Guadalajara especializada en landing pages, e-commerce y desarrollo de software.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Guadalajara, Jalisco",
                addressLocality: "Guadalajara",
                addressRegion: "Jalisco",
                postalCode: "44100",
                addressCountry: "MX"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+52-33-XXXX-XXXX",
                contactType: "customer service",
                areaServed: "MX",
                availableLanguage: ["Spanish", "English"]
              },
              sameAs: [
                "https://twitter.com/magmastudiomx",
                "https://linkedin.com/company/magma-studio",
                "https://instagram.com/magmastudio"
              ]
            })
          }}
        />
      </head>
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
        <SpeedInsights />
        <Navigation />
        <div className="min-h-screen w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
