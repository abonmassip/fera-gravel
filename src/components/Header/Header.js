import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from '@/src/lib/useTranslation'
import { LanguageContext } from '@/src/lib/LanguageProvider'

import Logo from '@/src/components/Logo/Logo'
import Image from 'next/image'
import logoCapFera from '@/public/img/logo-cap-fera.svg'
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { NavbarMenu, NavbarButton, NavbarDropdown, NavbarDropdownButton } from '@/src/components/Navbar/Navbar'
import BurgerMenu from '@/src/components/BurgerMenu/BurgerMenu'

import styles from './Header.module.css'



export default function Header() {
  const { t } = useTranslation()
  const [locale, setLocale] = useContext(LanguageContext)
  const router = useRouter()

  return(
    <div className={styles.header}>
      <div className={styles.nav_container}>
        <div className={styles.nav_logo}>
          <AspectRatio.Root ratio={1/1}>
            <Link href="/" className={styles.nav_logo_link}>
              <div
                className={styles.nav_logo_image}
                // style={{position: 'relative', height: '100%', width: '100%', background: '#c17071', borderRadius: 9999, scale: 2}}
              >
                  <Image src={logoCapFera} alt="Logo" fill priority/>
              </div>
            </Link>
          </AspectRatio.Root>
        </div>

        <div>
          <div className={styles.languages}>
            <a onClick={() => {
              setLocale('ca')
              router.push(router.pathname.replace(/\[lang]/, 'ca'))
            }}>CA</a>
            <a onClick={() => {
              setLocale('es')
              router.push(router.pathname.replace(/\[lang]/, 'es'))
            }}>ES</a>
            <a onClick={() => {
              setLocale('en')
              router.push(router.pathname.replace(/\[lang]/, 'en'))
            }}>EN</a>
          </div>
          <NavbarMenu>
            <NavbarDropdown trigger={t('projecte')}>
              <NavbarDropdownButton href={`/${locale}/territori`}>{t('territori')}</NavbarDropdownButton>
              <NavbarDropdownButton href={`/${locale}/sostenibilitat`}>{t('sostenibilitat')}</NavbarDropdownButton>
              <NavbarDropdownButton href={`/${locale}/quisom`}>{t('quisom')}</NavbarDropdownButton>
            </NavbarDropdown>
            <NavbarDropdown trigger={t('ruta')}>
              <NavbarDropdownButton href={`/ruta/500`}>Fera 500</NavbarDropdownButton>
              <NavbarDropdownButton href={`/ruta/300`}>Fera 300</NavbarDropdownButton>
              <NavbarDropdownButton href={`/ruta/200`}>Fera 200</NavbarDropdownButton>
              <NavbarDropdownButton href={`/ruta/150`}>Fera 150</NavbarDropdownButton>
            </NavbarDropdown>
            <NavbarButton href={`/${locale}/material`}>{t('material')}</NavbarButton>
            <NavbarButton href={`/${locale}/caus`}>{t('caus')}</NavbarButton>
            <NavbarButton href={`/${locale}/collaboradors`}>{t('collaboradors')}</NavbarButton>
            <NavbarButton href={`/${locale}/agencia`}>{t('agencia')}</NavbarButton>
          </NavbarMenu>
        </div>

        <div className={styles.burger_menu}>
          <BurgerMenu />
        </div>
      </div>
    </div>
  )
}
