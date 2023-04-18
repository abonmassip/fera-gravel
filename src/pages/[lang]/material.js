import { getFile } from '@lib/files'
import { BackgroundImage } from '@/src/components/ContentImages/ContentImages';
import MarkdownText from '@components/MarkdownText/MarkdownText';
import IMAGES from '@/src/lib/images';
import styles from '@styles/infoPage.module.scss'

export default function Material ({ htmlContent }) {
  return(
    <div className={styles.main}>
      <BackgroundImage src={IMAGES.graphics.branca}/>
      <MarkdownText htmlContent={htmlContent}/>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'material');
  return { props: { htmlContent: page.content } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
