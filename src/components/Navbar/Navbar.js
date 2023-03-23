import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styles from './Navbar.module.css'
import localFont from 'next/font/local'

const myFont = localFont({ src: './wallpainter.woff2' })

export function NavbarMenu({ children }) {
  return (
    <NavigationMenu.Root className={styles.NavigationMenuRoot}>
      <NavigationMenu.List className={styles.NavigationMenuList}>
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export function NavbarButton({ href, children}) {
  return (
    <NavigationMenu.Item className={styles.NavigationMenuItem}>
      <NavigationMenu.Link className={styles.NavigationMenuLink} asChild>
        <Link href={href} className={myFont.className}>{children}</Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  )
}

export function NavbarDropdown({ trigger, children }) {
  return (
    <NavigationMenu.Item className={styles.NavigationMenuItem}>
      <NavigationMenu.Trigger className={`${styles.NavigationMenuTrigger} ${myFont.className}`}>{trigger}</NavigationMenu.Trigger>
      <NavigationMenu.Content style={{ position: "absolute", top: "100%" }}>
        <ul className={styles.menu_list}>
          {children}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  )
}

export function NavbarDropdownButton({ href, children }) {
  return (
    <li>
      <NavigationMenu.Link className={styles.NavigationMenuLink} asChild>
        <Link href={href} className={myFont.className}>{children}</Link>
      </NavigationMenu.Link>
    </li>
  )
}
