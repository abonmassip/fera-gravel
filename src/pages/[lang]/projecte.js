import { getContent } from '@lib/files'
import Image from 'next/image'
import { cx } from '@lib/utils'

import logoBlack from '@public/img/logo-negre.jpg'
import branca from '@public/img/branca.png'
import styles from '@styles/infoPage.module.scss'
import { montserratM } from '@lib/fonts'

export default function Projecte ({ htmlContent }) {

  return(
    <div className={cx(styles.main, montserratM.className)}>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>

      <Image src={logoBlack} alt="" width="200" className={styles.logo}/>

      <div className={styles.background_image}>
        <Image src={branca} alt="" fill style={{objectPosition: "-40vw"}}/>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const htmlContent = await getContent(params.lang, 'projecte');
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
