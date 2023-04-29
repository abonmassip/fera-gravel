import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const defaultLocale = 'ca'
export const locales = ['ca', 'es', 'en']
export const LanguageContext = createContext([])

export const LanguageProvider = ({ children }) => {
  const router = useRouter()
  const defaultLocale = router.query.lang ? router.query.lang : 'ca'
  const [locale, setLocale] = useState(defaultLocale)


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
