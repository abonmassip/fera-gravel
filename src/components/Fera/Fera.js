import { useContext } from 'react'
import Image from 'next/image'
import { RutaContext } from '@lib/context'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import Modal from '@components/Modal/Modal'
import IMAGES from '@/src/lib/images'
import styles from './Fera.module.scss'

export default function Fera ({ htmlContent }) {
  const [ruta, setRuta] = useContext(RutaContext)
  return(
    <div className={styles.main}>
      <div className={styles.map}>
        <Modal>
          <Image src={IMAGES.maps[`fera${ruta}`]}  alt="" style={{objectFit: "contain"}} fill />
        </Modal>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.text}>
          <MarkdownText htmlContent={htmlContent}/>
        </div>
      </div>
    </div>
  )
}
