import "../globals.css";

import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { headers } from "next/headers";

import Footer from "@/components/common/footer";
import { Navigation } from "@/components/common/navigation";
import { archivo, cabinetGrotesk } from "@/lib/customFonts";
import { Toaster } from "react-hot-toast";
import { 
  generateDynamicMetadata, 
  generateSchemaOrg, 
  generateHreflangLinks 
} from "@/lib/seoMetadata";
import type { Locale } from "@/hooks/useTranslations";

/**
 * Detecta el idioma del usuario desde los headers del servidor
 */
function detectServerSideLanguage(): Locale {
  try {
    const headersList = headers();
    const acceptLanguage = headersList.get("accept-language") || "";
    
    // Parsear Accept-Language header para extraer idiomas preferidos
    const languages = acceptLanguage
      .split(",")
      .map((lang: string) => lang.split(";")[0].trim().split("-")[0])
      .filter((lang: string) => ["es", "en"].includes(lang));
    
    return languages.length > 0 ? languages[0] as Locale : "es";
  } catch (error) {
    // Fallback a español si hay algún error
    console.warn("Error detecting server-side language:", error);
    return "es";
  }
}

/**
 * Genera metadatos dinámicos basados en el idioma del usuario
 */
export async function generateMetadata(): Promise<Metadata> {
  const detectedLocale = detectServerSideLanguage();
  return await generateDynamicMetadata(detectedLocale);
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Detectar idioma del usuario para contenido dinámico
  const detectedLocale = detectServerSideLanguage();
  
  // Generar Schema.org dinámico basado en idioma
  const schemaOrgData = await generateSchemaOrg(detectedLocale);
  
  // Generar links hreflang para idiomas alternativos
  const hreflangLinks = generateHreflangLinks();
  
  return (
    <html lang={detectedLocale}>
      <head>
        {/* Preload para assets críticos */}
        <link 
          rel="preload" 
          href="/logo/logo_white.svg" 
          as="image" 
          type="image/svg+xml" 
        />
        
        {/* Hreflang tags para SEO multiidioma */}
        {hreflangLinks.map((link) => (
          <link
            key={link.hreflang}
            rel="alternate"
            hrefLang={link.hreflang}
            href={link.href}
          />
        ))}
        
        {/* Schema.org JSON-LD dinámico */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrgData)
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
