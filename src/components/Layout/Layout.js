import Header from '@components/Header/Header'
import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2023 Fera Gravel. All rights reserved.</p>
      </footer>
    </div>
  )
}
