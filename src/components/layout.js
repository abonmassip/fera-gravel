import Header from './Header/Header'
import BackgroundImage from './BackgroundImage/BackgroundImage'
import background from '@/public/img/fons_document_fera-06.jpg'

export default function Layout({ children }) {
  return (
    <>
      <BackgroundImage image={background}/>
      <Header />
      <main>{children}</main>
    </>
  )
}
