import Head from 'next/head'
import useTranslation from '@/src/hooks/useTranslation'
import { getFile } from '@lib/files'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import { BackgroundImage, CenteredImage } from '@/src/components/ContentImages/ContentImages'
import IMAGES from '@lib/images'

export default function LaFera ({ htmlContent }) {
  const { t } = useTranslation()

  return(
    <>
      <Head>
        <title>Fera Gravel | {t('lafera')}</title>
        <meta name="description" content="Fera Pyrenees Mountain Gravel" />
      </Head>
      <BackgroundImage src={IMAGES.graphics.branca} />
      <MarkdownText content={htmlContent} />
      <CenteredImage src={IMAGES.logo.black} width={200} height={200} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'lafera')
  return { props: { htmlContent: page.content } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
