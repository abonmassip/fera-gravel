import { useContext } from 'react'
import Image from 'next/image'
import { RutaContext } from '@lib/context'
import MarkdownText from '@components/MarkdownText/MarkdownText'
// import Modal from '@components/Modal/Modal'
import SingleImage from '@components/Modal/Modal'
import IMAGES from '@/src/lib/images'
import ImageGallery from '@/src/components/ImageGallery/ImageGallery';
import styles from './Fera.module.scss'

export default function Fera ({ htmlContent, images }) {
  console.log(IMAGES.maps.fera500)
  const [ruta, setRuta] = useContext(RutaContext)
  console.log(ruta)
  return(
    <div className={styles.main}>
      <div className={styles.map}>
        <div className={styles.mapImage}>
          <SingleImage galleryID={`fera${ruta}`} image={IMAGES.maps[`fera${ruta}`]}/>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.text}>
          <MarkdownText content={htmlContent}/>
          <h1>Galeria</h1>
          <ImageGallery galleryID={`fera${ruta}-gallery`} images={images} />
        </div>
      </div>
    </div>
  )
}
