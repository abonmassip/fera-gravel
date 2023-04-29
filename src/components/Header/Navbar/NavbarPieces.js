import Link from 'next/link'
import { useRouter } from 'next/router'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import useTranslation from '@/src/hooks/useTranslation'
import useMobileMenuState from '@/src/hooks/useMobileMenuState'
import useRutaState from '@/src/hooks/useRutaState'
import { cx } from '@lib/utils'
import styles from './Navbar.module.scss'

export function NavbarMenu({ children }) {
  const { showMenu } = useMobileMenuState()

  return (
    <NavigationMenu.Root className={cx(styles.root, showMenu ? styles.show : '')}>
      <NavigationMenu.List className={styles.list}>
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export function NavbarButton({ page, onlyMobile = false }) {
  const { setShowMenu } = useMobileMenuState()
  const { t, locale } = useTranslation()
  const router = useRouter()

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
  const { t, locale } = useTranslation()
  const { setRuta } = useRutaState()

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
