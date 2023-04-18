import { getFile } from '@lib/files'
import Image from 'next/image'
import { cx } from '@lib/utils'

import map200 from '@public/img/fera200.jpg'
import styles from '@styles/fera.module.scss'
import { montserratM } from '@lib/fonts'

export default function Fera200 ({ htmlContent }) {

  return(
    <>
      <div className={cx(styles.main, montserratM.className)}>
        <div className={styles.map}>
          <Image src={map200} alt="" style={{objectFit: "contain"}}/>
        </div>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const page = await getFile(params.lang, 'fera200');
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
