import { getContent } from '@lib/files'

import styles from '@styles/infoPage.module.scss'

export default function Material ({ htmlContent }) {

  return(
    <div className={styles.main}>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const htmlContent = await getContent(params.lang, 'material');
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
