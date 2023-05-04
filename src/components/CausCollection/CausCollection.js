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
          const { id, nom = `⚠️falta nom!`, localitat = `⚠️falta localitat!`, link, content } = cau
          const imageUrl = images[id] ? images[id].largeURL : images['default'].largeURL

          return (
            <div key={id} className={styles.cauCard}>

              <MakeLink src={link} className={styles.link}>
                <div className={styles.image} >
                  <Image src={imageUrl} alt="" width={300} height={300}/>
                </div>

                <div className={styles.local}>
                  <h3>{nom}</h3>
                  <p className={styles.localitat}>{localitat}</p>
                </div>
              </MakeLink>

              <div className={styles.text}>
                <MarkdownText content={content}/>
              </div>

            </div>
          )
        })
      }
    </div>
  )
}
