import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LanguageContext } from '@lib/LanguageProvider'
import { cx } from '@lib/utils'

import branca from '@public/img/branca.png'
import styles from './Footer.module.scss'
import { montserratB } from '@lib/fonts'


export default function Footer() {
  const [locale, setLocale] = useContext(LanguageContext)

  return(
    <div className={cx(styles.main, montserratB.className)}>

      <Image className={styles.branca} src={branca} width="60" alt="" style={{rotate: "40deg"}}/>

      <ul className={styles.menu_rutes}>

        <Link href={`/${locale}/fera500`}>
          <li>
            <h1>FERA 500</h1>
            <strong>500km // 13.500 mD+</strong>
          </li>
        </Link>

        <Link href={`/${locale}/fera300`}>
          <li>
            <h1>FERA 300</h1>
            <strong>300km // 8.000 mD+</strong>
          </li>
        </Link>

        <Link href={`/${locale}/fera200`}>
          <li>
            <h1>FERA 200</h1>
            <strong>200km // 5.500 mD+</strong>
          </li>
        </Link>

        <Link href={`/${locale}/fera150`}>
          <li>
            <h1>FERA 150</h1>
            <strong>150km // 3.000 mD+</strong>
          </li>
        </Link>

      </ul>

      <Image className={styles.branca} src={branca} width="60" alt="" style={{rotate: "220deg"}}/>

    </div>
  )
}
