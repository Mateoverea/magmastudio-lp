import { Metadata } from "next";
import type { Locale } from "@/hooks/useTranslations";

// Tipos para las traducciones SEO
interface SEOTranslations {
  seo: {
    site: {
      title: string;
      description: string;
      keywords: string[];
    };
    organization: {
      name: string;
      description: string;
      logo_alt: string;
      address: {
        locality: string;
        region: string;
        country: string;
      };
    };
    social: {
      twitter_creator: string;
    };
  };
}

// URLs base del sitio
const baseUrl = "https://magmastudio.pro";
const wwwBaseUrl = "https://www.magmastudio.pro";

/**
 * Detecta el idioma del usuario basado en headers del servidor
 * Esta función puede ser llamada tanto del lado del servidor como del cliente
 */
export function detectUserLanguage(): Locale {
  // En el servidor, podemos usar headers de aceptar idioma
  if (typeof window === "undefined") {
    try {
      // Acceder a los headers de la request (esto funcionará en server components)
      const headers = require("next/headers");
      const acceptLanguage = headers.headers().get("accept-language") || "";
      
      // Parsear Accept-Language header
      const languages = acceptLanguage
        .split(",")
        .map((lang: string) => lang.split(";")[0].trim().split("-")[0])
        .filter((lang: string) => ["es", "en"].includes(lang));
      
      return languages.length > 0 ? languages[0] as Locale : "es";
    } catch (error) {
      // Fallback si no podemos acceder a headers
      return "es";
    }
  }
  
  // En el cliente, usar navigator.language
  const browserLang = navigator.language.split("-")[0] as Locale;
  return ["es", "en"].includes(browserLang) ? browserLang : "es";
}

/**
 * Carga las traducciones SEO desde los archivos JSON
 */
export async function loadSEOTranslations(locale: Locale): Promise<SEOTranslations> {
  try {
    // Importar dinámicamente las traducciones
    const translations = await import(`@/i18n/locales/${locale}.json`);
    return translations.default;
  } catch (error) {
    console.warn(`Failed to load SEO translations for locale: ${locale}, falling back to Spanish`);
    const fallback = await import("@/i18n/locales/es.json");
    return fallback.default;
  }
}

/**
 * Genera metadatos dinámicos basados en el idioma
 */
export async function generateDynamicMetadata(locale?: Locale): Promise<Metadata> {
  // Detectar idioma si no se proporciona
  const detectedLocale = locale || detectUserLanguage();
  
  // Cargar traducciones SEO
  const translations = await loadSEOTranslations(detectedLocale);
  const seo = translations.seo;
  
  // Determinar locale para OpenGraph (es -> es_MX, en -> en_US)
  const ogLocale = detectedLocale === "es" ? "es_MX" : "en_US";
  
  return {
    metadataBase: new URL(baseUrl) || new URL(wwwBaseUrl),
    title: seo.site.title,
    description: seo.site.description,
    keywords: seo.site.keywords,
    
    // OpenGraph metadata
    openGraph: {
      title: seo.site.title,
      siteName: seo.organization.name,
      description: seo.site.description,
      images: [
        {
          url: "/images/thumbnail.png",
          width: 1200,
          height: 630,
          alt: seo.organization.logo_alt,
        },
      ],
      url: baseUrl,
      locale: ogLocale,
      type: "website",
    },
    
    // Twitter metadata
    twitter: {
      card: "summary_large_image",
      title: seo.site.title,
      description: seo.site.description,
      images: ["/images/thumbnail.png"],
      creator: seo.social.twitter_creator,
    },
    
    // Iconos y configuraciones básicas
    icons: "/favicon.ico",
    
    // URLs alternativas (hreflang será manejado por separado)
    alternates: {
      canonical: baseUrl,
      languages: {
        "es-MX": `${baseUrl}`,
        "en-US": `${baseUrl}`,
      },
    },
    
    // Configuración de robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    
    // Verificación de Google (mantener el valor existente)
    verification: {
      google: "your-google-site-verification",
    },
  };
}

/**
 * Genera Schema.org JSON-LD dinámico basado en el idioma
 */
export async function generateSchemaOrg(locale?: Locale): Promise<object> {
  // Detectar idioma si no se proporciona
  const detectedLocale = locale || detectUserLanguage();
  
  // Cargar traducciones SEO
  const translations = await loadSEOTranslations(detectedLocale);
  const seo = translations.seo;
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seo.organization.name,
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: seo.organization.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${seo.organization.address.locality}, ${seo.organization.address.region}`,
      addressLocality: seo.organization.address.locality,
      addressRegion: seo.organization.address.region,
      postalCode: "44100",
      addressCountry: detectedLocale === "es" ? "MX" : "MX", // Siempre México, pero podríamos adaptarlo
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+52-33-XXXX-XXXX",
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      "https://instagram.com/magmastudio",
    ],
  };
}

/**
 * Genera hreflang tags para idiomas alternativos
 */
export function generateHreflangLinks(): Array<{ hreflang: string; href: string }> {
  return [
    {
      hreflang: "es-MX",
      href: baseUrl,
    },
    {
      hreflang: "en-US", 
      href: baseUrl,
    },
    {
      hreflang: "x-default",
      href: baseUrl,
    },
  ];
}