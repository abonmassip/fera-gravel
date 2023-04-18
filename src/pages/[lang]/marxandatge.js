import { getFile } from '@lib/files'
import { BackgroundImage } from '@/src/components/ContentImages/ContentImages';
import MarkdownText from '@/src/components/MarkdownText/MarkdownText';
import IMAGES from '@/src/lib/images';
import styles from '@styles/infoPage.module.scss'

export default function Marxandatge ({ htmlContent }) {
  return(
    <div className={styles.main}>
      <BackgroundImage src={IMAGES.graphics.fulles} />
      <MarkdownText htmlContent={htmlContent}/>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'marxandatge');
  return { props: { htmlContent: page.content } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
