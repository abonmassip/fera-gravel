import {
  NavbarMenu,
  NavbarButton,
  NavbarDropdown,
  NavbarDropdownButton
} from './NavbarPieces'
import LanguageMenu from '../LanguageMenu/LanguageMenu'

export default function Navbar() {
  return (
    <NavbarMenu>
      <LanguageMenu />
      <NavbarDropdown title="projecte">
        <NavbarDropdownButton page="projecte" />
        <NavbarDropdownButton page="sostenibilitat" />
        <NavbarDropdownButton page="acces" />
      </NavbarDropdown>

      <NavbarButton page="projecte" onlyMobile />
      <NavbarButton page="sostenibilitat" onlyMobile />
      <NavbarButton page="acces" onlyMobile />

      <NavbarDropdown title="ruta">
        <NavbarDropdownButton page="ruta" />
        <NavbarDropdownButton page="territori" />
      </NavbarDropdown>

      <NavbarButton page="ruta" onlyMobile />
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

    </NavbarMenu>
  )
}
