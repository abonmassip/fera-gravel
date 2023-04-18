import { getFile } from '@lib/files'
import Image from 'next/image'
import { cx } from '@lib/utils'
import MarkdownText from '@components/MarkdownText/MarkdownText'
import Modal from '@components/Modal/Modal'

import map500 from '@public/img/fera500.jpg'
import branca from '@public/img/branca.png'
import styles from '@styles/fera.module.scss'
import { montserratM } from '@lib/fonts'

export default function Fera500 ({ htmlContent }) {

  return(
    <div className={cx(styles.main, montserratM.className)}>
      <div className={styles.background_image}>
        <Image src={branca} alt=""  style={{objectPosition: "100vw -100vh", scale: "0.4"}} />
      </div>
      <div className={styles.map}>
        <Modal>
          <Image src={map500}  alt="" style={{objectFit: "contain"}} fill />
        </Modal>
      </div>

      <div className={styles.text}>
        <MarkdownText htmlContent={htmlContent}/>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'fera500');
  return { props: { htmlContent: page.content } }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { lang: 'ca' } },
      { params: { lang: 'es' } },
      { params: { lang: 'en' } }
    ],
    fallback: false
  }
}
