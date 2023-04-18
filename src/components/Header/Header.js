import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import logoCapFera from '@public/img/logo-cap-fera.svg'
import Navbar from './Navbar/Navbar'
import LanguageMenu from './LanguageMenu/LanguageMenu'
import BurgerButton from './BurgerButton/BurgerButton'

import styles from './Header.module.scss'

export default function Header() {
  const router = useRouter()

  return (
      <div className={styles.header}>
        <BurgerButton />
        <LanguageMenu />
        <div className={styles.nav_container}>
          {
            router.asPath.split('/').pop()
              ? <Link href="/" className={styles.nav_logo}>
                  <Image src={logoCapFera} alt="logo" fill/>
                </Link>
              : null
          }
          <Navbar />
        </div>
      </div>
  )
}
