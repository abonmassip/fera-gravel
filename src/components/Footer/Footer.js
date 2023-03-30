import { useContext } from 'react'
import { LanguageContext } from '@/src/lib/LanguageProvider'
import Link from 'next/link'
import { robotoBold } from '@/src/lib/fonts'

import styles from './Footer.module.css'


export default function Footer() {
  const [locale, setLocale] = useContext(LanguageContext)

  return(
    <div className={styles.main}>
      <ul className={`${styles.menu} ${robotoBold.className}`}>
        <li><Link href={`/${locale}/ruta`}>Fera 500</Link></li>
        <li><Link href={`/${locale}/ruta`}>Fera 300</Link></li>
        <li><Link href={`/${locale}/ruta`}>Fera 200</Link></li>
        <li><Link href={`/${locale}/ruta`}>Fera 150</Link></li>
      </ul>
    </div>
  )
}
