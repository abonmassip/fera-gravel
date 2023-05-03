import Image from 'next/image'
import IMAGES from '@/src/lib/images'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
      <a href="https://www.instagram.com/feragravel/" target="_blank">
        <Image src={IMAGES.icon.instagram} alt="location" width={18} />
      </a>
      <a href="mailto:fera@feragravel.com">
        <Image src={IMAGES.icon.email} alt="location" width={18} />
      </a>
      <a href="tel:+34973043409">
        <Image src={IMAGES.icon.phone} alt="location" width={18} />
      </a>
      </div>
      <p>© 2023 Fera Gravel. All rights reserved.</p>
    </footer>
  )
}
