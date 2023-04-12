import { getContent } from '@lib/files'
import Image from 'next/image'
import { cx } from '@lib/utils'

import map500 from '@public/img/fera500.jpg'
import branca from '@public/img/branca.png'
import styles from '@styles/fera.module.scss'
import { montserratM } from '@lib/fonts'

export default function Fera500 ({ htmlContent }) {

  return(
    <>
      <div className={styles.background_image}>
        <Image
          src={branca}
          alt=""
          style={{objectPosition: "100vw -100vh", scale: "0.4"}}
        />
      </div>
      <div className={cx(styles.main, montserratM.className)}>
        <div className={styles.map}>
          <Image
            src={map500}
            alt=""
            style={{objectFit: "contain"}}
            fill
          />
        </div>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const htmlContent = await getContent(params.lang, 'fera500');
  return { props: {htmlContent} }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { lang: 'ca' } },
      { params: { lang: 'es' } },
      { params: { lang: 'en' } }
    ],
    fallback: false
  }
}
