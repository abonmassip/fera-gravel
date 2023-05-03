import Head from 'next/head'
import useTranslation from '@/src/hooks/useTranslation'
import { getFile, getFolder, getImages } from '@lib/files'
import { BackgroundImage } from '@/src/components/ContentImages/ContentImages'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import CausCollection from '@/src/components/CausCollection/CausCollection'
import IMAGES from '@/src/lib/images'

export default function Caus ({ causPage, causData, causImages }) {
  const { t } = useTranslation()

  return(
    <div>
      <Head>
        <title>Fera Gravel | {t('caus')}</title>
        <meta name="description" content="Fera Pyrenees Mountain Gravel caus de la fera" />
      </Head>
      <BackgroundImage src={IMAGES.graphics.branca}/>
      <MarkdownText content={causPage.content} />
      <CausCollection caus={causData} images={causImages} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const causPage = await getFile(params.lang, 'caus')
  const causData = await getFolder(params.lang, 'caus')
  const causImagesArray = await getImages('galeria-caus');
  const causImages = causImagesArray.reduce((acc, el) => (acc[el.id] = {...el}, acc), {})
  return { props: { causPage, causData, causImages } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
