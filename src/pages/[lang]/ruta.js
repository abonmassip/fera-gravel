import { useContext } from 'react'
import { getFolder, getFile } from '@lib/files'
import { RutaContext } from '@lib/context'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import Fera from '@components/Fera/Fera'
import RoutesMenu from '@/src/components/RoutesMenu/RoutesMenu'
import { BackgroundImage, FullWidthImage } from '@/src/components/ContentImages/ContentImages'
import IMAGES from '@/src/lib/images'

export default function Ruta ({ htmlContent, rutes }) {
  const [ruta, setRuta] = useContext(RutaContext)

  return(
    <>
      <RoutesMenu horizontal />
      {
        ruta
          ? <Fera htmlContent={rutes[ruta]}/>
          : (
            <>
              <BackgroundImage src={IMAGES.graphics.fulles} scale={1.2} opacity={0.15} />
              <FullWidthImage src={IMAGES.images.pista} height="250px" />
              <MarkdownText htmlContent={htmlContent}/>
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
  return { props: { htmlContent: page.content, rutes } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
