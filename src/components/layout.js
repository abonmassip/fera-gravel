import Header from './Header/Header'
import styles from '@styles/layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.layout}>{children}</main>
    </>
  )
}
