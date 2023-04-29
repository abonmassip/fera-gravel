import Link from 'next/link'
import useTranslation from '@/src/hooks/useTranslation'
import useRutaState from '@/src/hooks/useRutaState'

import Image from 'next/image'
import styles from './Cover.module.scss'
import IMAGES from '@lib/images'

function FeraLink ({ fera, dist }) {
  const { locale } = useTranslation()
  const { setRuta } = useRutaState()
  return (
    <Link href={`/${locale}/rutes`} onClick={() => setRuta(fera)}>
      <li className={styles.rutaLink}>
        <h1>FERA {fera}</h1>
        <strong>{dist}</strong>
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
