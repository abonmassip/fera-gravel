import { getFile, getImages } from '@lib/files'
import { BackgroundImage } from '@/src/components/ContentImages/ContentImages';
import MarkdownText from '@/src/components/MarkdownText/MarkdownText';
import IMAGES from '@/src/lib/images';
import ImageGallery from '@/src/components/ImageGallery/ImageGallery';
import SingleImage from '@/src/components/Modal/Modal';

export default function Agencia ({ htmlContent, images }) {
  console.log(images[0])
  return(
    <div>
      <BackgroundImage src={IMAGES.graphics.branca} />
      <MarkdownText content={htmlContent} />
      <ImageGallery galleryID="my-test-gallery" images={images} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'agencia');
  const images = await getImages('galeria-agencia');
  return { props: { htmlContent: page.content, images } }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: 'ca' } }, { params: { lang: 'es' } }, { params: { lang: 'en' } }],
    fallback: false
  }
}
