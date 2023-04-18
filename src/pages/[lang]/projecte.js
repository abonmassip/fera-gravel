import { getFile } from '@lib/files'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import { BackgroundImage, CenteredImage } from '@/src/components/ContentImages/ContentImages'
import IMAGES from '@lib/images'

export default function Projecte ({ htmlContent }) {
  return(
    <>
      <BackgroundImage src={IMAGES.graphics.branca} />
      <MarkdownText htmlContent={htmlContent} />
      <CenteredImage src={IMAGES.logos.logoBlack} width="200px" height="200px" />
    </>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'projecte')
  return { props: { htmlContent: page.content } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
