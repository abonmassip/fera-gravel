import { useContext } from 'react'
import { MobileMenuContext } from '@/src/contexts/MobileMenuContext'

export default function useMobileMenuState() {
  const [showMenu, setShowMenu] = useContext(MobileMenuContext)

  return {showMenu, setShowMenu}
}
