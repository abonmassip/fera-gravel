import { getContent } from '@lib/files'
import Image from 'next/image'
import { cx } from '@lib/utils'

import accesImage from '@public/img/sostenible-acces.jpg'
import branca from '@public/img/branca.png'
import styles from '@styles/infoPage.module.scss'
import { montserratM } from '@lib/fonts'

export default function Acces ({ htmlContent }) {

  return(
    <div className={cx(styles.main, montserratM.className)}>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>

      <div className={styles.background_image}>
        <Image src={branca} alt="" fill style={{objectPosition: "30vw"}} />
      </div>

      <div className={styles.horizontal_image}>
        <Image src={accesImage} alt="" fill />
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const htmlContent = await getContent(params.lang, 'acces');
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
