import { getFile } from '@lib/files'
import { BackgroundImage } from '@/src/components/ContentImages/ContentImages';
import MarkdownText from '@/src/components/MarkdownText/MarkdownText';
import IMAGES from '@/src/lib/images';

export default function Marxandatge ({ htmlContent }) {
  return(
    <>
      <BackgroundImage src={IMAGES.graphics.fulles} />
      <MarkdownText content={htmlContent}/>
    </>
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
