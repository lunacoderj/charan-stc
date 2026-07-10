import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { te } from '../locales/te';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  
  // Telugu is currently disabled until real content is added. 
  // Set isTeluguEnabled to true when ready.
  const isTeluguEnabled = false;

  useEffect(() => {
    const saved = localStorage.getItem('app_lang');
    if (saved && isTeluguEnabled) {
      setLang(saved);
    }
  }, [isTeluguEnabled]);

  const toggleLang = () => {
    if (!isTeluguEnabled) return;
    const newLang = lang === 'en' ? 'te' : 'en';
    setLang(newLang);
    localStorage.setItem('app_lang', newLang);
  };

  const t = (section, key) => {
    const dict = lang === 'te' ? te : en;
    return dict[section]?.[key] || en[section]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isTeluguEnabled }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
