import { getFolder, getFile, getImages } from '@lib/files'
import useRutaState from '@/src/hooks/useRutaState'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import Fera from '@components/Fera/Fera'
import RoutesMenu from '@/src/components/RoutesMenu/RoutesMenu'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages'
import IMAGES from '@/src/lib/images'

export default function Rutes ({ rutesPage, rutesData, galleries }) {
  const { ruta } = useRutaState()

  return(
    <>
      <RoutesMenu />
      {
        ruta
          ? <Fera rutes={rutesData} galleries={galleries} />
          : (
            <>
              <BackgroundImage src={IMAGES.graphics.fulles} scale={1.2} opacity={0.15} />
              <MarkdownText content={rutesPage.content}/>
              <FullWidthImage src={IMAGES.images.pista} height="250px" />
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
    galleries[folder] = await getImages(folder)
  }

  return { props: { rutesPage, rutesData, galleries } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
