import { getContent } from '@/src/lib/files'
import Footer from '@/src/components/Footer/Footer'

import styles from './projecte.module.css'

export default function Ruta ({ htmlContent }) {

  return(
    <>
      <div className={styles.main}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
      <Footer />
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
