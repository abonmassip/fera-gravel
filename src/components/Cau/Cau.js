import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { cx } from '@lib/utils'
import locationIcon from '@public/img/location.png'
import styles from './Cau.module.scss'

function MakeLink({ url, children }) {
  if (url) {
    return <a href={url} target='_blank'>{ children }</a>
  } else {
    return children
  }
}

export default function Caus ({ nom, localitat, link, imatge, maps, content }) {
  const [show, setShow] = useState(false);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef()
  useOutsideAlerter(wrapperRef)

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
          <Image src={locationIcon} alt="location" width={16} />{localitat}
        </MakeLink>

      </div>

      <div className={styles.cauMarkdown} dangerouslySetInnerHTML={{ __html: content }} />

      <button className={styles.moreInfo} onClick={() => setShow(!show)}>+ info</button>

    </div>
  )
}
