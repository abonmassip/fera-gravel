import { useState, useRef } from 'react'
import Image from 'next/image'
import { cx, useOutsideAlerter } from '@lib/utils'
import MarkdownText from '../MarkdownText/MarkdownText'
import IMAGES from '@/src/lib/images'
import styles from './CausCollection.module.scss'

export default function CausCollection ({ caus, images }) {
  console.log('caus ', caus)
  console.log('images', images)
  return (
    <div className={styles.causCollection}>
      <h1>EN CONSTRUCCIO!</h1>
      {
        caus.map((cau) => {
          {/* return <Cau {...cau} key={cau.id}/> */}
          return (
            <div key={cau.id} className={styles.wrapper}>
              <div className={styles.image} >
                <Image src={images[cau.id].largeURL} alt="" width={300} height={300}/>
              </div>
              <div>
                <div>
                  <h2 className={styles.nom}>{cau.nom}</h2>
                  <div className={styles.localitat}>
                    <Image src={IMAGES.icon.location} alt="location" width={16} />
                    <p>{cau.localitat}</p>
                  </div>
                  <div className={styles.info}>
                    <MarkdownText content={cau.content}/>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

function MakeLink ({ url, children }) {
  return url ? <a href={url} target='_blank'>{ children }</a> : children
}

function Cau (props) {
  const { nom, localitat, link, imatge, maps, content } = props
  const [show, setShow] = useState(false);
  const wrapperRef = useRef()
  useOutsideAlerter(wrapperRef, () => setShow(false))

  return (
    <div ref={wrapperRef} className={cx(styles.cau, show ? styles.show : '')}>

      <div className={styles.title}>
        <MakeLink url={link}>
          <img className={styles.cauImage} src={imatge} alt="" />
          <h1>{nom}</h1>
        </MakeLink>
      </div>

      <div className={styles.location}>
        <MakeLink url={maps}>
          <Image src={IMAGES.icon.location} alt="location" width={16} />
          {localitat}
        </MakeLink>
      </div>

      <div className={styles.cauMarkdown} dangerouslySetInnerHTML={{ __html: content }} />

      <button className={styles.moreInfo} onClick={() => setShow(!show)}>+ info</button>

    </div>
  )
}
