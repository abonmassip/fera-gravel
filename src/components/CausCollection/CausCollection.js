import Cau from '@components/Cau/Cau'
import styles from './CausCollection.module.scss'

export default function CausCollection ({ caus }) {
  return (
    <div className={styles.gridWrapper}>
      {caus.map((cau) => <Cau {...cau} key={cau.id}/>)}
    </div>
  )
}
