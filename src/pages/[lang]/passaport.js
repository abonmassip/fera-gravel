import Head from 'next/head'
import useTranslation from '@/src/hooks/useTranslation'
import { getFile } from '@lib/files'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages';
import MarkdownText from '@/src/components/MarkdownText/MarkdownText';
import IMAGES from '@/src/lib/images';

export default function Passaport ({ htmlContent }) {
  const { t } = useTranslation()

  return(
    <>
      <Head>
        <title>Fera Gravel | {t('passaport')}</title>
        <meta name="description" content="Fera Pyrenees Mountain Gravel passaport" />
      </Head>
      <BackgroundImage src={IMAGES.graphics.aguila} opacity={0.04}/>
      <MarkdownText content={htmlContent}/>
      <FullWidthImage src={IMAGES.images.passaport_de_la_fera} height={300}/>
    </>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'passaport');
  return { props: { htmlContent: page.content } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
