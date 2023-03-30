import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import useTranslation from '@/src/lib/useTranslation'
import { useContext } from 'react'
import { LanguageContext } from '@/src/lib/LanguageProvider'

import styles from './Navbar.module.css'
import { robotoBold } from '@/src/lib/fonts'

export function NavbarMenu({ children }) {
  return (
    <NavigationMenu.Root className={styles.NavigationMenuRoot}>
      <NavigationMenu.List className={styles.NavigationMenuList}>
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export function NavbarButton({ page, route, setRoute }) {
  const { t } = useTranslation()
  const [locale, setLocale] = useContext(LanguageContext)
  return (
    <NavigationMenu.Item className={styles.NavigationMenuItem}>
      <NavigationMenu.Link className={styles.NavigationMenuLink} asChild active={route === page}>
          <Link href={`/${locale}/${page}`} className={robotoBold.className} onClick={() => setRoute(page)}>
            {t(page).toUpperCase()}
          </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  )
}

export function NavbarDropdown({ titol, children }) {
  const { t } = useTranslation()

  return (
    <NavigationMenu.Item className={styles.NavigationMenuItem}>
      <NavigationMenu.Trigger className={`${styles.NavigationMenuTrigger} ${robotoBold.className}`}>
        {t(titol).toUpperCase()}
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className={styles.NavigationMenuContent}>
        <ul className={styles.menu_list}>
          {children}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  )
}

export function NavbarDropdownButton({ page, route, setRoute }) {
  const { t } = useTranslation()
  const [locale, setLocale] = useContext(LanguageContext)
  return (
    <li className={styles.menu_button}>
      <NavigationMenu.Link className={styles.NavigationMenuLink} asChild active={route === page}>
          <Link href={`/${locale}/${page}`} className={robotoBold.className} onClick={() => setRoute(page)}>
            {t(page).toUpperCase()}
          </Link>
      </NavigationMenu.Link>
    </li>
  )
}
