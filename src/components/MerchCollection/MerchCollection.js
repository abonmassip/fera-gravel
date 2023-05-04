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
          const { id, nom, link, content } = brand
          const imageUrl = images[id] ? images[id].largeURL : images['default'].largeURL

          return (
            <div key={id} className={styles.merchCard}>
              <div className={styles.image}>
                <MakeLink src={link} className={styles.link}>
                  <div className={styles.imageWrapper}>
                    <Image src={imageUrl} alt="" width={300} height={300}/>
                  </div>
                </MakeLink>
              </div>

              <div className={styles.text}>
                <MakeLink src={link} className={styles.link}>
                  <h1>{nom}</h1>
                  <p className={styles.web}>{link}</p>
                </MakeLink>
                <div className={styles.markdown}>
                  <MarkdownText content={content} />
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
