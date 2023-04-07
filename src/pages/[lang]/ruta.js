import { getContent } from '@lib/files'

import styles from '@styles/infoPage.module.scss'
import { montserratM } from '@lib/fonts'

export default function Ruta ({ htmlContent }) {

  return(
    <>
      <div className={`${styles.main} ${montserratM.className}`}>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const htmlContent = await getContent(params.lang, 'ruta');
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
