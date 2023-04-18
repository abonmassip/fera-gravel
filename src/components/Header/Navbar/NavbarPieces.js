import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import useTranslation from '@lib/useTranslation'
import { cx } from '@lib/utils'
import { LanguageContext } from '@lib/LanguageProvider'
import { RutaContext } from '@lib/context'
import { MobileMenuContext } from '@lib/context'

import styles from './Navbar.module.scss'
import { montserratXB } from '@lib/fonts'

export function NavbarMenu({ children }) {
  const [showMenu, setShowMenu] = useContext(MobileMenuContext)

  return (
    <NavigationMenu.Root className={cx(styles.root, showMenu ? styles.show : '')}>
      <NavigationMenu.List className={cx(styles.list, montserratXB.className)}>
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export function NavbarButton({ page, onlyMobile = false }) {
  const [showMenu, setShowMenu] = useContext(MobileMenuContext)
  const router = useRouter()
  const { t } = useTranslation()
  const [locale, setLocale] = useContext(LanguageContext)

  return (
    <NavigationMenu.Item className={cx(styles.item, onlyMobile ? styles.onlyMobile : '')}>
      <NavigationMenu.Link className={styles.link} active={router.asPath.split('/').pop() === page} asChild>
          <Link href={`/${locale}/${page}`} onClick={() => setShowMenu(false)}>
            {t(page).toUpperCase()}
          </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  )
}

export function NavbarDropdown({ title, children }) {
  const { t } = useTranslation()

  return (
    <NavigationMenu.Item className={cx(styles.item, styles.onlyDesktop)}>
      <NavigationMenu.Trigger className={styles.trigger}>
        {t(title).toUpperCase()}
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className={styles.content}>
        <ul className={styles.menu_list}>
          {children}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  )
}

export function NavbarDropdownButton({ page }) {
  const router = useRouter()
  const { t } = useTranslation()
  const [locale, setLocale] = useContext(LanguageContext)
  const [ruta, setRuta] = useContext(RutaContext)

  return (
    <li className={styles.menu_button}>
      <NavigationMenu.Link className={styles.link} active={router.asPath.split('/').pop() === page} asChild>
        <Link href={`/${locale}/${page}`} onClick={() => setRuta(null)}>
          {t(page).toUpperCase()}
        </Link>
      </NavigationMenu.Link>
    </li>
  )
}
