import { getFile, getFolder } from '@lib/files'
import { BackgroundImage } from '@/src/components/ContentImages/ContentImages'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import Cau from '@components/Cau/Cau'
import IMAGES from '@/src/lib/images'
import styles from '@styles/caus.module.scss'

export default function Caus ({ htmlContent, caus }) {
  return(
    <div className={styles.main}>
      <BackgroundImage src={IMAGES.graphics.branca}/>
      <MarkdownText htmlContent={htmlContent} />
      <div className={styles.gridWrapper}>
        {caus.map((cau) => <Cau {...cau} key={cau.id}/>)}
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'caus')
  const caus = await getFolder(params.lang, 'caus')
  return { props: { htmlContent: page.content, caus } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
