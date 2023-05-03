import Head from 'next/head'
import { BackgroundImage } from '@components/ContentImages/ContentImages'
import Cover from '../components/Cover/Cover'
import IMAGES from '@lib/images'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fera Pyrenees Mountain Gravel</title>
        <meta name="description" content="Fera Pyrenees Mountain Gravel" />
      </Head>
      <BackgroundImage src={IMAGES.images.portada} opacity={1} quality={100}/>
      <Cover />
    </>
  )
}
