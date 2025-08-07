import { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';

// Tipos para mayor seguridad
export type Locale = 'es' | 'en';
export type TranslationKey = string;

interface TranslationData {
  [key: string]: any;
}

// Configuración simple
const DEFAULT_LOCALE: Locale = 'es';
const COOKIE_NAME = 'magma-locale';

class TranslationService {
  private translations: Record<Locale, TranslationData> = {} as Record<Locale, TranslationData>;
  private currentLocale: Locale = DEFAULT_LOCALE;
  private listeners: Set<() => void> = new Set();

  constructor() {
    this.loadTranslations();
    this.currentLocale = this.getStoredLocale();
  }

  // Cargar traducciones de forma síncrona simple
  private loadTranslations() {
    try {
      this.translations.es = require('@/i18n/locales/es.json');
      this.translations.en = require('@/i18n/locales/en.json');
    } catch (error) {
      console.warn('Error loading translations:', error);
      // Fallback básico si no se pueden cargar
      this.translations.es = {};
      this.translations.en = {};
    }
  }

  // Obtener idioma guardado
  private getStoredLocale(): Locale {
    const stored = Cookies.get(COOKIE_NAME) as Locale;
    return stored && ['es', 'en'].includes(stored) ? stored : DEFAULT_LOCALE;
  }

  // Detectar idioma automáticamente
  async detectUserLocale(): Promise<Locale> {
    try {
      // 1. Si ya hay un idioma guardado, usarlo
      const stored = this.getStoredLocale();
      if (stored !== DEFAULT_LOCALE) {
        return stored;
      }

      // 2. Detectar idioma del navegador (consistente con server-side)
      if (typeof window !== 'undefined') {
        console.log('[Client Debug] Using browser language detection');
        
        // Usar navigator.language para consistencia con Accept-Language header
        const browserLang = navigator.language.split('-')[0] as Locale;
        console.log(`[Client Debug] navigator.language: ${navigator.language}`);
        console.log(`[Client Debug] Browser language detected: ${browserLang}`);
        
        if (['es', 'en'].includes(browserLang)) {
          return browserLang;
        }
      }

      // 4. Fallback al español (idioma por defecto de Magma Studio)
      return DEFAULT_LOCALE;
    } catch (error) {
      console.warn('Error detecting locale:', error);
      return DEFAULT_LOCALE;
    }
  }

  // Obtener traducción con dot notation (ej: "hero.title")
  translate(key: TranslationKey, locale?: Locale): string {
    const targetLocale = locale || this.currentLocale;
    const translations = this.translations[targetLocale] || this.translations[DEFAULT_LOCALE];
    
    if (!translations) return key;

    // Soporte para keys anidadas con puntos
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) break;
    }

    return typeof result === 'string' ? result : key;
  }

  // Cambiar idioma
  setLocale(locale: Locale) {
    this.currentLocale = locale;
    Cookies.set(COOKIE_NAME, locale, { expires: 365 }); // 1 año
    this.notifyListeners();
  }

  // Obtener idioma actual
  getLocale(): Locale {
    return this.currentLocale;
  }

  // Obtener traducciones para un locale específico (método público)
  getTranslations(locale?: Locale): TranslationData {
    const targetLocale = locale || this.currentLocale;
    return this.translations[targetLocale] || this.translations[DEFAULT_LOCALE];
  }

  // Sistema de subscripción para cambios
  subscribe(callback: () => void) {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(callback => callback());
  }
}

// Instancia singleton
const translationService = new TranslationService();

// Hook principal
export function useTranslations() {
  const [locale, setLocaleState] = useState<Locale>(translationService.getLocale());
  const [isDetecting, setIsDetecting] = useState(false);

  // Detectar idioma al cargar por primera vez
  useEffect(() => {
    const detectLanguage = async () => {
      setIsDetecting(true);
      const detectedLocale = await translationService.detectUserLocale();
      translationService.setLocale(detectedLocale);
      setIsDetecting(false);
    };

    // Solo detectar si estamos en el idioma por defecto
    if (locale === DEFAULT_LOCALE && Cookies.get(COOKIE_NAME) === undefined) {
      detectLanguage();
    }
  }, []);

  // Suscribirse a cambios de idioma
  useEffect(() => {
    return translationService.subscribe(() => {
      setLocaleState(translationService.getLocale());
    });
  }, []);

  // Función para traducir
  const t = useCallback((key: TranslationKey): string => {
    return translationService.translate(key);
  }, [locale]);

  // Función para cambiar idioma
  const setLocale = useCallback((newLocale: Locale) => {
    translationService.setLocale(newLocale);
  }, []);

  return {
    t,
    locale,
    setLocale,
    isDetecting,
    availableLocales: ['es', 'en'] as const
  };
}

// Hook específico para arrays (FAQs, features, etc.)
export function useTranslationArray(key: TranslationKey) {
  const { t, locale } = useTranslations();
  
  const getArray = useCallback((): any[] => {
    const translations = translationService.getTranslations(locale);
    
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) break;
    }

    return Array.isArray(result) ? result : [];
  }, [key, locale]);

  return { getArray, t };
}

export default useTranslations;