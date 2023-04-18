import { getFile } from '@lib/files'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages'
import MarkdownText from '@/src/components/MarkdownText/MarkdownText';
import IMAGES from '@/src/lib/images';

export default function Territori ({ firstContent, secondContent, thirdContent }) {
  return(
    <div>
      <BackgroundImage src={IMAGES.graphics.fulles} />
      <MarkdownText htmlContent={firstContent} />
      <FullWidthImage src={IMAGES.images.foguera} height="300px" />
      <MarkdownText htmlContent={secondContent} />
      <FullWidthImage src={IMAGES.images.antenes} height="300px" />
      <MarkdownText htmlContent={thirdContent} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const first = await getFile(params.lang, 'territori');
  const second = await getFile(params.lang, 'territori2');
  const third = await getFile(params.lang, 'territori3');
  return { props: { firstContent: first.content, secondContent: second.content, thirdContent: third.content } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
