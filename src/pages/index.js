import Head from 'next/head'
import Image from 'next/image'
import Logo from '@/src/components/Logo/Logo'
import Footer from '@/src/components/Footer/Footer'
import backgroundImage from '@/public/img/fons_document_fera-04.jpg'
import { robotoBold } from '@/src/lib/fonts'

import styles from '@/src/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>FERA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.main}>
        <div style={{width: 1200, height: 500, position: "absolute", overflow: "hidden", borderRadius: 20, zIndex: -1}}>
          <Image src={backgroundImage} alt="" fill style={{objectFit:"cover"}} />
        </div>
        <div style={{width: 300, height: 300}}>
          <Logo />
        </div>
        <div className={robotoBold.className}>
          <h1>FERA.</h1>
          <h2>PYRENEES MOUNTAIN GRAVEL</h2>
        </div>
      </div>


      <Footer />
    </>
  )
}
