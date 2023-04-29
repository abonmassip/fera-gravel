import {
  NavbarMenu,
  NavbarButton,
  NavbarDropdown,
  NavbarDropdownButton
} from './NavbarPieces'
import LanguageMenu from '../LanguageMenu/LanguageMenu'
import ContactMenu from '../ContactMenu/ContactMenu'

export default function Navbar() {
  return (
    <NavbarMenu>
      <LanguageMenu />

      <NavbarDropdown title="projecte">
        <NavbarDropdownButton page="lafera" />
        <NavbarDropdownButton page="sostenibilitat" />
        <NavbarDropdownButton page="acces" />
      </NavbarDropdown>

      <NavbarButton page="lafera" onlyMobile />
      <NavbarButton page="sostenibilitat" onlyMobile />
      <NavbarButton page="acces" onlyMobile />

      <NavbarDropdown title="ruta">
        <NavbarDropdownButton page="rutes" />
        <NavbarDropdownButton page="territori" />
      </NavbarDropdown>

      <NavbarButton page="rutes" onlyMobile />
      <NavbarButton page="territori" onlyMobile />

      <NavbarButton page="material" />

      <NavbarDropdown title="passaporticaus">
        <NavbarDropdownButton page="passaport" />
        <NavbarDropdownButton page="caus" />
      </NavbarDropdown>

      <NavbarButton page="passaport" onlyMobile />
      <NavbarButton page="caus" onlyMobile />

      <NavbarButton page="marxandatge" />
      <NavbarButton page="agencia" />

      <ContactMenu />

    </NavbarMenu>
  )
}
