import useMobileMenuState from '@/src/hooks/useMobileMenuState'
import { cx } from '@lib/utils'

import styles from './BurgerButton.module.scss'

export default function BurgerButton () {
  const { showMenu, setShowMenu } = useMobileMenuState()

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
