import Image from 'next/image'
import MarkdownText from '@/src/components/MarkdownText/MarkdownText'
import styles from './MerchCollection.module.scss'

function MakeLink ({ src, children, ...rest }) {
  return src ? <a href={src} target='_blank' {...rest}>{ children }</a> : children
}

export default function MerchCollection ({ merch, images }) {
  return (
    <div className={styles.merchCollection}>
      {
        merch.map((brand) => {
          return (
            <div key={brand.id} className={styles.merchCard}>
              <div className={styles.image}>
                <MakeLink src={brand.link} className={styles.link}>
                  <div className={styles.imageWrapper}>
                    <Image src={images[brand.id].largeURL} alt="" width={300} height={300}/>
                  </div>
                </MakeLink>
              </div>

              <div className={styles.text}>
                <MakeLink src={brand.link} className={styles.link}>
                  <h1>{brand.nom}</h1>
                  <p className={styles.web}>{brand.link}</p>
                </MakeLink>
                <div className={styles.markdown}>
                  <MarkdownText content={brand.content} />
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
