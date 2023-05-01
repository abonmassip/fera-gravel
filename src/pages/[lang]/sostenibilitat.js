import { getFile } from '@lib/files'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages'
import IMAGES from '@lib/images'

export default function Sostenibilitat ({ firstContent, secondContent }) {
  return(
    <>
      <BackgroundImage src={IMAGES.graphics.fulles} scale={1.2} opacity={0.15} />
      <MarkdownText content={firstContent}/>
      <FullWidthImage src={IMAGES.images.sostenible} height={200} />
      <MarkdownText content={secondContent}/>
      <FullWidthImage src={IMAGES.images.sostenible_o_acces} height={300}/>
    </>
  )
}

export async function getStaticProps({ params }) {
  const first = await getFile(params.lang, 'sostenibilitat');
  const second = await getFile(params.lang, 'sostenibilitat2');
  return { props: { firstContent: first.content, secondContent: second.content } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
