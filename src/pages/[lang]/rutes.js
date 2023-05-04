import Head from 'next/head'
import useTranslation from '@/src/hooks/useTranslation'
import { getFolder, getFile, getImages } from '@lib/files'
import useRutaState from '@/src/hooks/useRutaState'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import Fera from '@components/Fera/Fera'
import RoutesMenu from '@/src/components/RoutesMenu/RoutesMenu'
import { BackgroundImage, CenteredImage } from '@/src/components/ContentImages/ContentImages'
import IMAGES from '@/src/lib/images'

export default function Rutes ({ rutesPage, rutesData, galleries }) {
  const { ruta } = useRutaState()
  const { t } = useTranslation()

  return(
    <>
      <Head>
        <title>Fera Gravel | {t('rutes')}</title>
        <meta name="description" content="Fera Pyrenees Mountain Gravel rutes" />
      </Head>
      <RoutesMenu />
      {
        ruta
          ? (
            <>
              <Fera rutes={rutesData} galleries={galleries} />
            </>
          )
          : (
            <>
              <BackgroundImage src={IMAGES.graphics.fulles} />
              <MarkdownText content={rutesPage.content}/>
              <CenteredImage src={IMAGES.graphics.fera} height={400}/>
            </>
          )
      }
    </>
  )
}

export async function getStaticProps({ params }) {
  const rutesPage = await getFile(params.lang, 'rutes');
  const rutesFolder = await getFolder(params.lang, 'rutes')
  const rutesData = rutesFolder.reduce((acc, el) => (acc[el.id] = {...el}, acc), {})
  const galleries = {};
  for (const folder of Object.keys(rutesData)) {
    galleries[folder] = await getImages(`galeria-${folder}`)
  }

  return { props: { rutesPage, rutesData, galleries } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
