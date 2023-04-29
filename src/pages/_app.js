import { LanguageProvider } from '@/src/contexts/LanguageContext'
import { RutaProvider } from '@/src/contexts/RutaContext'
import { MobileMenuProvider } from '@/src/contexts/MobileMenuContext'
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
