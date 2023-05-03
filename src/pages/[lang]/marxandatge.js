import Head from 'next/head'
import useTranslation from '@/src/hooks/useTranslation'
import { getFile, getFolder, getImages } from '@lib/files'
import { BackgroundImage } from '@/src/components/ContentImages/ContentImages';
import MarkdownText from '@/src/components/MarkdownText/MarkdownText';
import MerchCollection from '@/src/components/MerchCollection/MerchCollection';
import IMAGES from '@/src/lib/images';

export default function Marxandatge ({ merchPage, merchData, merchImages }) {
  const { t } = useTranslation()

  return(
    <>
      <Head>
        <title>Fera Gravel | {t('marxandatge')}</title>
        <meta name="description" content="Fera Pyrenees Mountain Gravel marxandatge" />
      </Head>
      <BackgroundImage src={IMAGES.graphics.fulles} />
      <MarkdownText content={merchPage.content}/>
      <MerchCollection merch={merchData} images={merchImages} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const merchPage = await getFile(params.lang, 'marxandatge')
  const merchData = await getFolder(params.lang, 'marxandatge')
  const merchImagesArray = await getImages('galeria-marxandatge')
  const merchImages = merchImagesArray.reduce((acc, el) => (acc[el.id] = {...el}, acc), {})

  return { props: { merchPage, merchData, merchImages } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
