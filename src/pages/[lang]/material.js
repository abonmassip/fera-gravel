import Head from 'next/head'
import useTranslation from '@/src/hooks/useTranslation'
import { getFile } from '@lib/files'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages';
import MarkdownText from '@components/MarkdownText/MarkdownText';
import IMAGES from '@/src/lib/images';

export default function Material ({ material_bicicleta, material_seguretat, material_transport }) {
  const { t } = useTranslation()

  return(
    <>
      <Head>
        <title>Fera Gravel | {t('material')}</title>
        <meta name="description" content="Fera Pyrenees Mountain Gravel material" />
      </Head>
      <BackgroundImage src={IMAGES.graphics.branca}/>
      <MarkdownText content={material_bicicleta.content}/>
      <FullWidthImage src={IMAGES.images.material_bicicleta} height={200}/>
      <MarkdownText content={material_seguretat.content}/>
      <FullWidthImage src={IMAGES.images.material_3} height={200}/>
      <MarkdownText content={material_transport.content}/>
      <FullWidthImage src={IMAGES.images.material} height={200}/>
    </>
  )
}

export async function getStaticProps({ params }) {
  const material_bicicleta = await getFile(params.lang, 'material-bicicleta');
  const material_seguretat = await getFile(params.lang, 'material-seguretat');
  const material_transport = await getFile(params.lang, 'material-transport');
  return { props: { material_bicicleta, material_seguretat, material_transport } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
