import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { LanguageContext } from '@/src/contexts/LanguageContext'
import styles from './LanguageMenu.module.scss'

export default function LanguageMenu() {
  const [locale, setLocale] = useContext(LanguageContext)
  const router = useRouter()

  const getLink = (language) => router.pathname.replace(/\[lang]/,language)

  return (
    <div className={styles.languages}>
      <Link href={getLink('ca')} onClick={() => setLocale('ca')}>CA</Link>
      {`/`}
      <Link href={getLink('es')} onClick={() => setLocale('es')}>ES</Link>
      {`/`}
      <Link href={getLink('en')} onClick={() => setLocale('en')}>EN</Link>
    </div>
  )
}
