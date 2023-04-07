import { LanguageProvider } from '@lib/LanguageProvider'
import Layout from '@components/layout'

import '@styles/reset.css'
import '@styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  )
}
