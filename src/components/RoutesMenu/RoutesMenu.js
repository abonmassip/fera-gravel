import { useContext } from 'react'
import Link from 'next/link'
import { LanguageContext } from '@lib/LanguageProvider'
import { RutaContext } from '@lib/context'
import { cx } from '@lib/utils'
import styles from './RoutesMenu.module.scss'

const FeraLink = ({ fera, dist }) => {
  const [locale, setLocale] = useContext(LanguageContext)
  const [ruta, setRuta] = useContext(RutaContext)
  return (
    <Link href={`/${locale}/ruta`} onClick={() => setRuta(fera)}>
      <li className={cx(styles.rutaLink, ruta === fera ? styles.active : '')}>
        <div className={styles.name}>
          <h2>FERA {fera}</h2>
        </div>
      </li>
    </Link>
  )
}

export default function RoutesMenu({ horizontal }) {
  return(
    <ul className={cx(styles.menu_rutes, horizontal ? styles.horizontal : '')}>
      <FeraLink fera="500" dist="500km // 13.500mD+" />
      <FeraLink fera="300" dist="300km // 8.000mD+" />
      <FeraLink fera="200" dist="200km // 5.500mD+" />
      <FeraLink fera="150" dist="150km // 3.000mD+" />
    </ul>
  )
}
