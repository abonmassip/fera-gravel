import Header from './Header/Header'
import styles from '@styles/layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
