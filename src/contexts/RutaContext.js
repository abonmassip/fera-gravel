import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const RutaContext = createContext([])

export const RutaProvider = ({ children }) => {
  const [ruta, setRuta] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (router.route != '/[lang]/rutes') {
      setRuta(null)
    }
  }, [router.route])

  return (
    <RutaContext.Provider value={[ruta, setRuta]}>
      {children}
    </RutaContext.Provider>
  )
}
