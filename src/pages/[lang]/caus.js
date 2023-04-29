import { getFile, getFolder, getImages } from '@lib/files'
import { BackgroundImage } from '@/src/components/ContentImages/ContentImages'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import CausCollection from '@/src/components/CausCollection/CausCollection'
import IMAGES from '@/src/lib/images'

export default function Caus ({ causPage, causData, causImages }) {
  return(
    <div>
      <BackgroundImage src={IMAGES.graphics.branca}/>
      <MarkdownText content={causPage.content} />
      <CausCollection caus={causData} images={causImages} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const causPage = await getFile(params.lang, 'caus')
  const causData = await getFolder(params.lang, 'caus')
  const causImagesArray = await getImages('caus');
  const causImages = causImagesArray.reduce((acc, el) => (acc[el.id] = {...el}, acc), {})
  return { props: { causPage, causData, causImages } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
