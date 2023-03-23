import React from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

import styles from './BurgerMenu.module.css'


const menu_styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    top: '0',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block',
    margin: '10px 0'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default function BurgerMenu() {

  const [isMenuOpen, handleMenu] = React.useState(false);

  const handleCloseMenu = () => handleMenu(false);
  const handleStateChange = (state) => handleMenu(state.isOpen);

  return (
    <Menu
      isOpen={isMenuOpen}
      right
      width={'80%'}
      styles={ menu_styles }
      onStateChange={handleStateChange}
    >
      <p className={styles.MenuTitle}>PROJECTE</p>
      <Link id="territori" className="menu-item" href="/projecte/territori" onClick={handleCloseMenu}>Territori</Link>
      <Link id="sostenibilitat" className="menu-item" href="/projecte/sostenibilitat" onClick={handleCloseMenu}>Sostenibilitat</Link>
      <Link id="quisom" className="menu-item" href="/projecte/quisom" onClick={handleCloseMenu}>Qui Som</Link>
      <p className={styles.MenuTitle}>LA RUTA</p>
      <Link id="500" className="menu-item" href="/ruta/500" onClick={handleCloseMenu}>Ruta 500</Link>
      <Link id="300" className="menu-item" href="/ruta/300" onClick={handleCloseMenu}>Ruta 300</Link>
      <Link id="200" className="menu-item" href="/ruta/200" onClick={handleCloseMenu}>Ruta 200</Link>
      <Link id="150" className="menu-item" href="/ruta/150" onClick={handleCloseMenu}>Ruta 150</Link>
      <p className={styles.MenuTitle}>-</p>
      <Link id="material" className="menu-item" href="/material" onClick={handleCloseMenu}>Material</Link>
      <Link id="caus" className="menu-item" href="/caus" onClick={handleCloseMenu}>Caus de la Fera</Link>
      <Link id="collaboradors" className="menu-item" href="/collaboradors" onClick={handleCloseMenu}>Col·laboradors</Link>
      <a id="agencia" className="menu-item" href="https://duckduckgo.com/" onClick={handleCloseMenu}>Agència</a>
    </Menu>
  )
}
