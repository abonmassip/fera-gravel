import { getFile, getFolder } from '@lib/files'
import { BackgroundImage } from '@/src/components/ContentImages/ContentImages'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import CausCollection from '@/src/components/CausCollection/CausCollection'
import IMAGES from '@/src/lib/images'

export default function Caus ({ htmlContent, caus }) {
  return(
    <div>
      <BackgroundImage src={IMAGES.graphics.branca}/>
      <MarkdownText content={htmlContent} />
      <CausCollection caus={caus} />
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
