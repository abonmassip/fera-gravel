import { useState } from 'react'

import styles from './Modal.module.scss'

export default function Modal ({ children }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      {
        isOpen
          ? <div className={styles.modal}>
              <button className={styles.closeButton} onClick={() => setOpen(false)}>
                X
              </button>
              <div>
                {children}
              </div>
            </div>

          : <div style={{cursor: 'pointer'}} onClick={() => setOpen(true)}>
              {children}
            </div>
      }
    </>
  )
}
