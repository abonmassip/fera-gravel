import { useContext } from 'react'
import { MobileMenuContext } from '../Header'
import { cx } from '@lib/utils'

import styles from './BurgerButton.module.scss'

export default function BurgerButton () {
  const [showMenu, setShowMenu] = useContext(MobileMenuContext)

  return (
    <button
      className={cx(styles.menu_toggle, showMenu ? styles.nav_open : '')}
      onClick={() => setShowMenu(!showMenu)}
    >
      <div className={styles.menu_toggle_group}>
        <span className={cx(styles.menu_toggle_bar, styles.top)}> </span>
        <span className={cx(styles.menu_toggle_bar, styles.middle)}> </span>
        <span className={cx(styles.menu_toggle_bar, styles.bottom)}> </span>
      </div>
    </button>
  )
}
