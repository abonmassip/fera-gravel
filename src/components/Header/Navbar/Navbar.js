import {
  NavbarMenu,
  NavbarButton,
  NavbarDropdown,
  NavbarDropdownButton
} from './NavbarPieces'

export default function Navbar() {
  return (
    <NavbarMenu>

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
        <NavbarDropdownButton page="fera500" />
        <NavbarDropdownButton page="fera300" />
        <NavbarDropdownButton page="fera200" />
        <NavbarDropdownButton page="fera150" />
      </NavbarDropdown>

      <NavbarButton page="ruta" onlyMobile />
      <NavbarButton page="territori" onlyMobile />
      <NavbarButton page="fera500" onlyMobile />
      <NavbarButton page="fera300" onlyMobile />
      <NavbarButton page="fera200" onlyMobile />
      <NavbarButton page="fera150" onlyMobile />

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
