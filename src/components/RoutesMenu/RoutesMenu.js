import { useContext } from 'react'
import Link from 'next/link'
import { LanguageContext } from '@lib/LanguageProvider'
import { RutaContext } from '@lib/context'
import { cx } from '@lib/utils'
import styles from './RoutesMenu.module.scss'
import { montserratB } from '@lib/fonts'

const FeraLink = ({ fera, dist }) => {
  const [locale, setLocale] = useContext(LanguageContext)
  const [ruta, setRuta] = useContext(RutaContext)
  return (
    <Link href={`/${locale}/ruta`} onClick={() => setRuta(fera)}>
      <li className={cx(styles.rutaLink, ruta === fera ? styles.active : '')}>
        <h1>FERA {fera}</h1>
        <strong>{dist}</strong>
      </li>
    </Link>
  )
}

export default function RoutesMenu({ horizontal }) {
  return(
    <ul className={cx(styles.menu_rutes, montserratB.className, horizontal ? styles.horizontal : '')}>
      <FeraLink fera="500" dist="500km // 13.500 mD+" />
      <FeraLink fera="300" dist="300km // 8.000 mD+" />
      <FeraLink fera="200" dist="200km // 5.500 mD+" />
      <FeraLink fera="150" dist="150km // 3.000 mD+" />
    </ul>
  )
}
