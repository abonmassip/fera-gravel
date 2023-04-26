import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const MobileMenuContext = createContext([])
export const RutaContext = createContext([])

export const MobileMenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    window.document.body.className = showMenu ? 'noScroll' : ''
  }, [showMenu])

  return (
    <MobileMenuContext.Provider value={[showMenu, setShowMenu]}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export const RutaProvider = ({ children }) => {
  const router = useRouter()
  const [ruta, setRuta] = useState(null)

  useEffect(() => {
    if (router.route != '/[lang]/ruta') {
      setRuta(null)
    }
  }, [router.route])

  return (
    <RutaContext.Provider value={[ruta, setRuta]}>
      {children}
    </RutaContext.Provider>
  )
}
