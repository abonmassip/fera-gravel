import { getFile } from '@lib/files'
import IMAGES from '@lib/images'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages'
import MarkdownText from '@components/MarkdownText/MarkdownText'

export default function Acces ({ htmlContent }) {
  return(
    <div>
      <BackgroundImage src={IMAGES.graphics.branca} />
      <MarkdownText htmlContent={htmlContent}/>
      <FullWidthImage src={IMAGES.images.finestra} height="300px"/>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'acces');
  return { props: { htmlContent: page.content } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
