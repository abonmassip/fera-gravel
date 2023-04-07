import { createContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import logoCapFera from '@public/img/logo-cap-fera.svg'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Navbar from './Navbar/Navbar'
import LanguageMenu from './LanguageMenu/LanguageMenu'
import BurgerButton from './BurgerButton/BurgerButton'

import styles from './Header.module.scss'

export const MobileMenuContext = createContext([])

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  return (
    <MobileMenuContext.Provider value={[ showMenu, setShowMenu ]}>
      <div className={styles.header}>
        <BurgerButton />
        <LanguageMenu />
        <div className={styles.nav_container}>
          {
            router.asPath.split('/').pop()
              ? <div className={styles.nav_logo}>
                  <AspectRatio.Root ratio={1/1}>
                    <Link href="/" className={styles.nav_logo_link} >
                      <div className={styles.nav_logo_image}>
                        <Image src={logoCapFera} alt="Logo" fill/>
                      </div>
                    </Link>
                  </AspectRatio.Root>
                </div>
              : null
          }
          <Navbar />
        </div>
      </div>
    </MobileMenuContext.Provider>
  )
}
