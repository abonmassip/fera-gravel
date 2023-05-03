import Head from 'next/head'
import useTranslation from '@/src/hooks/useTranslation'
import { getFile } from '@lib/files'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages';
import MarkdownText from '@/src/components/MarkdownText/MarkdownText';
import IMAGES from '@/src/lib/images';

export default function Agencia ({ htmlContent }) {
  const { t } = useTranslation()

  return(
    <div>
      <Head>
        <title>Fera Gravel | {t('agencia')}</title>
        <meta name="description" content="Fera Pyrenees Mountain Gravel agència" />
      </Head>
      <BackgroundImage src={IMAGES.graphics.branca} />
      <MarkdownText content={htmlContent} />
      <FullWidthImage src={IMAGES.images.altres} height={300} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'agencia');
  return { props: { htmlContent: page.content } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
