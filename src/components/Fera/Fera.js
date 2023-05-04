import useRutaState from '@/src/hooks/useRutaState'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import IMAGES from '@/src/lib/images'
import ImageGallery, { SingleImage } from '@/src/components/ImageGallery/ImageGallery';
import styles from './Fera.module.scss'

function SubFera({ fera150, gallery }) {
  return (
    <details>
      <summary><strong>{fera150.nom}</strong></summary>
      <MarkdownText content={fera150.content}/>
      { gallery && <ImageGallery galleryID={`id-gallery`} images={gallery} /> }
    </details>
  )
}

export default function Fera ({ rutes, galleries }) {
  const { ruta } = useRutaState()
  const map = `fera${ruta}`
  const subRutes = Object.entries(rutes)
    .filter(([key, value]) => value.id.includes('150-'))
    .reduce((acc, [key, value]) => (acc[key] = value, acc), {})

  return(
    <div className={styles.main}>
      <div className={styles.map}>
        <div className={styles.mapImage}>
          <SingleImage galleryID={map} image={IMAGES.maps[map]}/>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.text}>
          <MarkdownText content={rutes[`fera${ruta}`].content}/>
          {
            ruta == '150'
              ? Object.entries(subRutes).map(([key, fera150]) => {
                  return <SubFera key={key} fera150={fera150} gallery={galleries[fera150.id]} />
                })
              : <ImageGallery galleryID={`fera${ruta}-gallery`} images={galleries[`fera${[ruta]}`]} />
          }
        </div>
      </div>
    </div>
  )
}
