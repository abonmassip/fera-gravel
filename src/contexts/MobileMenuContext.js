import { createContext, useState, useEffect } from 'react'

export const MobileMenuContext = createContext([])

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
