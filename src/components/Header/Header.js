import { useContext, useState } from 'react'
import { LanguageContext } from '@/src/lib/LanguageProvider'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '@/src/components/Logo/Logo'
import Image from 'next/image'
import logoCapFera from '@/public/img/logo-cap-fera.svg'
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { NavbarMenu, NavbarButton, NavbarDropdown, NavbarDropdownButton } from './Navbar/Navbar'
import BurgerMenu from '@/src/components/BurgerMenu/BurgerMenu'

import styles from './Header.module.css'

function LanguageLink({language}) {
  const [locale, setLocale] = useContext(LanguageContext)
  const router = useRouter()

  return (
    <a
      className={locale === language ? styles.active : ''}
      onClick={() => {
        setLocale(language)
        router.push(router.pathname.replace(/\[lang]/,language))
      }}
    >
      {language}
    </a>
  )
}

export default function Header() {
  const [route, setRoute] = useState('home')

  return (
    <div className={styles.header}>
      <div className={styles.nav_container}>
        <div className={styles.nav_logo}>
          <AspectRatio.Root ratio={1/1}>
            <Link href="/" className={styles.nav_logo_link} onClick={() => setRoute('home')}>
              <div className={styles.nav_logo_image}>
                <Image src={logoCapFera} alt="Logo" fill priority/>
              </div>
            </Link>
          </AspectRatio.Root>
        </div>

        <div>
          <div className={styles.languages}>
            <LanguageLink language="ca" />
            <LanguageLink language="es" />
            <LanguageLink language="en" />
          </div>

          <NavbarMenu>
            <NavbarDropdown titol="projecte">
              <NavbarDropdownButton page="territori" route={route} setRoute={setRoute} />
              <NavbarDropdownButton page="sostenibilitat" route={route} setRoute={setRoute} />
              <NavbarDropdownButton page="quisom" route={route} setRoute={setRoute} />
            </NavbarDropdown>
            <NavbarButton page="ruta" route={route} setRoute={setRoute} />
            <NavbarButton page="material" route={route} setRoute={setRoute} />
            <NavbarButton page="caus" route={route} setRoute={setRoute} />
            <NavbarButton page="collaboradors" route={route} setRoute={setRoute} />
            <NavbarButton page="agencia" route={route} setRoute={setRoute} />
          </NavbarMenu>
        </div>

        <div className={styles.burger_menu}>
          <BurgerMenu />
        </div>
      </div>
    </div>
  )
}
