'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, type Locale } from '@/hooks/useTranslations';

// Configuración de idiomas disponibles
const languages = [
  { 
    code: 'es' as Locale, 
    name: 'Español', 
    shortName: 'ES'
  },
  { 
    code: 'en' as Locale, 
    name: 'English', 
    shortName: 'EN'
  },
];

export function LanguageSelector() {
  const { locale, setLocale, isDetecting } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  // Mostrar loading si está detectando
  if (isDetecting) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#333333]/50 animate-pulse">
        <span className="text-sm">🌐</span>
        <span className="text-sm text-white/60 hidden md:block">
          Detectando...
        </span>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#333333] hover:bg-[#444444] transition-colors border border-[#555555] group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={`Cambiar idioma. Actual: ${currentLanguage.name}`}
      >
        <span className="text-sm text-white font-archivo hidden md:block group-hover:text-[#d85a00] transition-colors">
          {currentLanguage.shortName}
        </span>
        
        {/* Flecha indicadora */}
        <motion.svg
          className="w-3 h-3 text-white/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 bg-[#333333] rounded-lg border border-[#555555] shadow-xl shadow-black/20 z-[2147483001] overflow-hidden"
          >
            {languages.map((language, index) => (
              <motion.button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#444444] transition-colors text-left min-w-[140px] ${
                  locale === language.code 
                    ? 'bg-[#d85a00] text-white' 
                    : 'text-white/90 hover:text-white'
                } ${index === 0 ? 'rounded-t-lg' : ''} ${index === languages.length - 1 ? 'rounded-b-lg' : ''}`}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-archivo font-medium">
                    {language.name}
                  </span>
                  <span className="text-xs text-white/60">
                    {language.shortName}
                  </span>
                </div>
                
                {/* Indicador de idioma actual */}
                {locale === language.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto w-2 h-2 bg-white rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSelector;