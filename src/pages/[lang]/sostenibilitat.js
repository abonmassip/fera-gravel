import { getFile } from '@lib/files'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import {
  BackgroundImage,
  FullWidthImage,
  ImageAndText
} from '@/src/components/ContentImages/ContentImages'
import IMAGES from '@lib/images'

export default function Sostenibilitat ({ firstContent, secondContent }) {
  return(
    <>
      <BackgroundImage src={IMAGES.graphics.fulles} scale={1.2} opacity={0.15} />
      <MarkdownText content={firstContent}/>
      <ImageAndText src={IMAGES.images.ovelles} text={secondContent} ratio={[20, 80]} height={150} />
      <FullWidthImage src={IMAGES.images.carreteraBosc} height={300}/>
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
