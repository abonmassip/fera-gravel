import Head from 'next/head'
import { getFile } from '@lib/files'
import useTranslation from '@/src/hooks/useTranslation'
import IMAGES from '@lib/images'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages'
import MarkdownText from '@components/MarkdownText/MarkdownText'

export default function Acces ({ htmlContent }) {
  const { t } = useTranslation()

  return(
    <>
      <Head>
        <title>Fera Gravel | {t('acces')}</title>
        <meta name="description" content="Fera Pyrenees Mountain Gravel accés" />
      </Head>
      <BackgroundImage src={IMAGES.graphics.branca} />
      <MarkdownText content={htmlContent}/>
      <FullWidthImage src={IMAGES.images.acces} height={300}/>
    </>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'acces');
  return { props: { htmlContent: page.content } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
