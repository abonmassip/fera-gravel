import { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { cx } from '@lib/utils'
import { LanguageContext } from '@lib/LanguageProvider'
import { MobileMenuContext } from '@lib/context'

import styles from './LanguageMenu.module.scss'

export default function LanguageMenu() {
  const [locale, setLocale] = useContext(LanguageContext)
  const [showMenu, setShowMenu] = useContext(MobileMenuContext)
  const router = useRouter()

  const getLink = (language) => router.pathname.replace(/\[lang]/,language)

  return (
    <div className={cx(styles.languages, showMenu ? styles.show : '')}>
      <Link href={getLink('ca')} onClick={() => setLocale('ca')}>CA</Link>
      {`/`}
      <Link href={getLink('es')} onClick={() => setLocale('es')}>ES</Link>
      {`/`}
      <Link href={getLink('en')} onClick={() => setLocale('en')}>EN</Link>
    </div>
  )
}
