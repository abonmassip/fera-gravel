import Head from 'next/head'
import useTranslation from '@/src/hooks/useTranslation'
import { getFile } from '@lib/files'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages'
import MarkdownText from '@/src/components/MarkdownText/MarkdownText';
import IMAGES from '@/src/lib/images';

export default function Territori ({ firstContent, secondContent, thirdContent }) {
  const { t } = useTranslation()

  return(
    <>
      <Head>
        <title>Fera Gravel | {t('territori')}</title>
        <meta name="description" content="Fera Pyrenees Mountain Gravel territori" />
      </Head>
      <BackgroundImage src={IMAGES.graphics.fulles} />
      <MarkdownText content={firstContent} />
      <FullWidthImage src={IMAGES.images.territori} height="300px" />
      <MarkdownText content={secondContent} />
      <FullWidthImage src={IMAGES.images.territori_2} height="300px" />
      <MarkdownText content={thirdContent} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const first = await getFile(params.lang, 'territori');
  const second = await getFile(params.lang, 'territori2');
  const third = await getFile(params.lang, 'territori3');
  return { props: { firstContent: first.content, secondContent: second.content, thirdContent: third.content } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
