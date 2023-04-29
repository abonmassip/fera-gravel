import { useState, useRef } from 'react'
import Image from 'next/image'
import { cx, useOutsideAlerter } from '@lib/utils'
import IMAGES from '@/src/lib/images'
import styles from './Cau.module.scss'

function MakeLink ({ url, children }) {
  return url ? <a href={url} target='_blank'>{ children }</a> : children
}

export default function Cau ({ nom, localitat, link, imatge, maps, content }) {
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
