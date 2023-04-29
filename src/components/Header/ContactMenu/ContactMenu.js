import Image from 'next/image'
import IMAGES from '@/src/lib/images'
import styles from './ContactMenu.module.scss'

export default function ContactMenu() {
  return (
    <div className={styles.contactMenu}>
      <a href="https://www.instagram.com/feragravel/" target="_blank">
        <div className={styles.item}>
          <span>@feragravel</span>
          <Image src={IMAGES.icon.instagram} alt="location" width={24} />
        </div>
      </a>
      <a href="mailto:feragravel@gmail.com">
        <div className={styles.item}>
          <span>feragravel</span>
          <Image src={IMAGES.icon.email} alt="location" width={24} />
        </div>
      </a>
      <a href="tel:+34666554433">
        <div className={styles.item}>
          <span>(+34) 973 043 409</span>
          <Image src={IMAGES.icon.phone} alt="location" width={24} />
        </div>
      </a>
    </div>
  )
}
