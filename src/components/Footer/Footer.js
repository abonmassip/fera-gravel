import localFont from 'next/font/local'
import styles from './Footer.module.css'

const myFont = localFont({ src: '../Navbar/wallpainter.woff2' })

export default function Footer() {
  return(
    <div className={styles.main}>
      <ul className={`${styles.menu} ${myFont.className}`}>
        <li>Fera 500</li>
        <li>Fera 300</li>
        <li>Fera 200</li>
        <li>Fera 150</li>
      </ul>
    </div>
  )
}
