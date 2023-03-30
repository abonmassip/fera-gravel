import Image from 'next/image'
import mapa from '@/public/img/planol.png'

import styles from './ruta.module.css'

export default function Ruta150 () {
  return(
    <div className={styles.ruta_container}>
      <div className={styles.ruta_map}>
        {/* <Image src={mapa} alt="mapa" fill/> */}
      </div>
      <div className={styles.ruta_info}>
      </div>
    </div>
  )
}
