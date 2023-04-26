import { LanguageProvider } from '@lib/LanguageProvider'
import { MobileMenuProvider, RutaProvider } from '@lib/context'
import Layout from '@components/Layout/Layout'

import '@styles/reset.css'
import '@styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <MobileMenuProvider>
        <RutaProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RutaProvider>
      </MobileMenuProvider>
    </LanguageProvider>
  )
}
