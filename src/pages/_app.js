import { LanguageProvider } from '@lib/LanguageProvider'
import { MobileMenuProvider } from '@lib/context'
import Layout from '@components/layout'

import '@styles/reset.css'
import '@styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <MobileMenuProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MobileMenuProvider>
    </LanguageProvider>
  )
}
