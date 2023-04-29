import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
