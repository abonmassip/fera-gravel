import { useContext } from 'react'
import { RutaContext } from '@/src/contexts/RutaContext'

export default function useRutaState() {
  const [ruta, setRuta] = useContext(RutaContext)

  return {ruta, setRuta}
}
