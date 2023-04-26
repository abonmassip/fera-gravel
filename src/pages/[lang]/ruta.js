import { useContext } from 'react'
import { getFolder, getFile, getImages } from '@lib/files'
import { RutaContext } from '@lib/context'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import Fera from '@components/Fera/Fera'
import RoutesMenu from '@/src/components/RoutesMenu/RoutesMenu'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages'
import IMAGES from '@/src/lib/images'

export default function Ruta ({ htmlContent, rutes, galeries, test }) {
  const [ruta, setRuta] = useContext(RutaContext)

  return(
    <>
      <RoutesMenu horizontal />
      {
        ruta
          ? <Fera htmlContent={rutes[ruta]} images={galeries[`galeria${[ruta]}`]}/>
          : (
            <>
              <BackgroundImage src={IMAGES.graphics.fulles} scale={1.2} opacity={0.15} />
              <MarkdownText content={htmlContent}/>
              <FullWidthImage src={IMAGES.images.pista} height="250px" />
            </>
          )
      }
    </>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'ruta');
  const rutesData = await getFolder(params.lang, 'rutes')
  const rutes = rutesData.reduce((acc, {id, content}) => ({...acc, [id]: content}), {})
  const galeria150 = await getImages('galeria-fera150');
  const galeria200 = await getImages('galeria-fera200');
  const galeria300 = await getImages('galeria-fera300');
  const galeria500 = await getImages('galeria-fera500');
  return { props: {
    htmlContent: page.content,
    rutes,
    galeries: { galeria150, galeria200, galeria300, galeria500 }
  } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
