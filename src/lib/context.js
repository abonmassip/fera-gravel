import { createContext, useState } from 'react'

export const MobileMenuContext = createContext([])

export const MobileMenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <MobileMenuContext.Provider value={[showMenu, setShowMenu]}>
      {children}
    </MobileMenuContext.Provider>
  )
}
