import { getContent } from '@lib/files'
import Image from 'next/image'
import { cx } from '@lib/utils'

import sostenibleImage from '@public/img/sostenible.jpg'
import fulles from '@public/img/fulles.png'
import styles from '@styles/infoPage.module.scss'
import { montserratM } from '@lib/fonts'

export default function Sostenibilitat ({ htmlContent }) {

  return(
    <div className={cx(styles.main, montserratM.className)}>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>

      <div className={styles.background_image}>
        <Image src={fulles} alt="" fill style={{objectPosition: "-800px -200px", rotate: "-40deg"}} />
      </div>

      <div className={styles.horizontal_image}>
        <Image src={sostenibleImage} alt="" fill />
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const htmlContent = await getContent(params.lang, 'sostenibilitat');
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
