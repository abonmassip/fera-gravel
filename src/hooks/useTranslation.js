import { useContext } from 'react'
import {
  LanguageContext,
  defaultLocale,
  locales
} from '@/src/contexts/LanguageContext'
import { LangStrings } from '@lib/strings'

export default function useTranslation() {
  const [locale, setLocale] = useContext(LanguageContext)

  function t(key) {
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`)
    }

    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || key
  }

  return {t, locale, setLocale, locales}
}
