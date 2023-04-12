import { getContent, getCaus } from '@lib/files'
import { cx } from '@lib/utils'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import Cau from '@components/Cau/Cau'
import styles from '@styles/caus.module.scss'
import { montserratM } from '@lib/fonts'

export default function Caus ({ htmlContent, causData }) {

  return(
    <div className={cx(styles.main, montserratM.className)}>

      <MarkdownText htmlContent={htmlContent} />
      <div className={styles.gridWrapper}>
        {causData.map((cau) => <Cau {...cau} key={cau.id}/>)}
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const htmlContent = await getContent(params.lang, 'caus')
  const causData = await getCaus(params.lang)
  return { props: {htmlContent, causData} }
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
