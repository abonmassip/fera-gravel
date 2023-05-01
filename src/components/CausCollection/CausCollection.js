import Image from 'next/image'
import MarkdownText from '../MarkdownText/MarkdownText'
import styles from './CausCollection.module.scss'

function MakeLink ({ src, children, ...rest }) {
  return src ? <a href={src} target='_blank' {...rest}>{ children }</a> : children
}

export default function CausCollection ({ caus, images }) {
  return (
    <div className={styles.causCollection}>
      {
        caus.map((cau) => {
          return (
            <div key={cau.id} className={styles.cauCard}>

              <MakeLink src={cau.link} className={styles.link}>
                <div className={styles.image} >
                  <Image src={images[cau.id].largeURL} alt="" width={300} height={300}/>
                </div>

                <div className={styles.local}>
                  <h3>{cau.nom}</h3>
                  <p className={styles.localitat}>{cau.localitat}</p>
                </div>
              </MakeLink>

              <div className={styles.text}>
                <MarkdownText content={cau.content}/>
              </div>

            </div>
          )
        })
      }
    </div>
  )
}
