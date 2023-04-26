import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import IMAGES from '@/src/lib/images'
import Navbar from './Navbar/Navbar'
import BurgerButton from './BurgerButton/BurgerButton'

import styles from './Header.module.scss'

export default function Header() {
  const router = useRouter()

  return (
      <div className={styles.header}>
        <BurgerButton />
        <div className={styles.nav_container}>
          {
            router.asPath.split('/').pop()
              ? <Link href="/" className={styles.nav_logo}>
                  <Image src={IMAGES.logo.head} alt="logo" fill/>
                </Link>
              : null
          }
          <Navbar />
        </div>
      </div>
  )
}
