import { getContent } from '@lib/files'
import Image from 'next/image'
import { cx } from '@lib/utils'

import map300 from '@public/img/fera300.jpg'
import styles from '@styles/fera.module.scss'
import { montserratM } from '@lib/fonts'

export default function Fera300 ({ htmlContent }) {

  return(
    <>
      <div className={cx(styles.main, montserratM.className)}>
        <div className={styles.map}>
          <Image src={map300} alt="" style={{objectFit: "contain"}}/>
        </div>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const htmlContent = await getContent(params.lang, 'fera300');
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
