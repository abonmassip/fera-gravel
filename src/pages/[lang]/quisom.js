import { getContent } from '@/src/lib/files'

import styles from './projecte.module.css'

export default function QuiSom ({ htmlContent }) {

  return(
    <div className={styles.main}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
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
