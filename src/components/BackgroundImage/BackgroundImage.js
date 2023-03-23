import Image from 'next/image'
import styles from './BackgroundImage.module.css'

export default function BackgroundImage ({ image }) {
  return (
    <div className={styles.background_image}>
      <Image src={image} alt="" fill style={{objectFit:"cover"}} />
    </div>
  )
}
