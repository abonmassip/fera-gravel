import Head from 'next/head'
import { getFile } from '@lib/files'
import useTranslation from '@/src/hooks/useTranslation'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages'
import IMAGES from '@lib/images'

export default function Sostenibilitat ({ sostenibilitatText, ingressosText }) {
  const { t } = useTranslation()

  return(
    <>
      <Head>
        <title>Fera Gravel | {t('sostenibilitat')}</title>
        <meta name="description" content="Fera Pyrenees Mountain Gravel sostenibilitat" />
      </Head>
      <BackgroundImage src={IMAGES.graphics.fulles} scale={1.2} />
      <MarkdownText content={sostenibilitatText.content}/>
      <FullWidthImage src={IMAGES.images.sostenible} height={200} />
      <MarkdownText content={ingressosText.content}/>
      <FullWidthImage src={IMAGES.images.sostenible_o_acces} height={300}/>
    </>
  )
}

export async function getStaticProps({ params }) {
  const sostenibilitatText = await getFile(params.lang, 'sostenibilitat');
  const ingressosText = await getFile(params.lang, 'sostenibilitat-ingressos');
  return { props: { sostenibilitatText, ingressosText } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
