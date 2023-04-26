import { useContext } from 'react'
import Link from 'next/link'
import { LanguageContext } from '@lib/LanguageProvider'
import { RutaContext } from '@lib/context'

import Image from 'next/image'
import styles from './Cover.module.scss'
import IMAGES from '@lib/images'

function FeraLink ({ fera, dist }) {
  const [locale, setLocale] = useContext(LanguageContext)
  const [ruta, setRuta] = useContext(RutaContext)
  return (
    <Link href={`/${locale}/ruta`} onClick={() => setRuta(fera)}>
      <li className={styles.rutaLink}>
        <h1>FERA {fera}</h1>
        <strong className={styles.subtitol}>{dist}</strong>
      </li>
    </Link>
  )
}

export default function Cover() {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image src={IMAGES.logo.main} alt="Logo" fill priority/>
      </div>

      <div className={styles.rutes}>
        <Image src={IMAGES.graphics.branca} width="60" alt="" style={{rotate: "40deg"}}/>
          <ul className={styles.menu_rutes}>
            <FeraLink fera="500" dist="500km // 13.500mD+" />
            <FeraLink fera="300" dist="300km // 8.000mD+" />
            <FeraLink fera="200" dist="200km // 5.500mD+" />
            <FeraLink fera="150" dist="150km // 3.000mD+" />
          </ul>
        <Image src={IMAGES.graphics.branca} width="60" alt="" style={{rotate: "220deg"}}/>
      </div>
    </div>
  )
}
