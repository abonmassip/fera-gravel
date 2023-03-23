import { LanguageProvider } from '@/src/lib/LanguageProvider'
import Layout from '@/src/components/layout'
import '@/src/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  )
}
