import useRutaState from '@/src/hooks/useRutaState'
import { cx } from '@lib/utils'
import styles from './RoutesMenu.module.scss'

const FeraLink = ({ fera, children }) => {
  const { ruta, setRuta } = useRutaState()
  const classActive = ruta === fera ? styles.active : ''
  return (
    <li onClick={() => setRuta(fera)}>
      <div className={cx(styles.rutaButton, classActive)}>
        {children}
      </div>
    </li>
  )
}

export default function RoutesMenu() {
  return(
    <ul className={styles.menu_rutes}>
      <FeraLink fera="500">
        <h1>FERA 500</h1>
        <strong>500km // 13.500mD+</strong>
      </FeraLink>
      <FeraLink fera="300">
        <h1>FERA 300</h1>
        <strong>300km // 8.000mD+</strong>
      </FeraLink>
      <FeraLink fera="200">
        <h1>FERA 200</h1>
        <strong>200km // 5.500mD+</strong>
      </FeraLink>
      <FeraLink fera="150">
        <h1>FERA 150</h1>
        <strong>150km // 3.000mD+</strong>
      </FeraLink>
    </ul>
  )
}
