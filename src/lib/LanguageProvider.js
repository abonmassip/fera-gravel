import { createContext, useEffect, useState } from 'react'

export const defaultLocale = 'ca'
export const locales = ['ca', 'es', 'en']
export const LanguageContext = createContext([])

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('ca')

  useEffect(() => {
    if (!window) {
      return
    }

    const language = localStorage.getItem('lang') || locale;
    setLocale(language);
  }, [locale])

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  )
}
