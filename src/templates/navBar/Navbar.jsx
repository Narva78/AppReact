import './Navbar.scss'
import { NavLink } from '../../components/navbar/navLink/NavLink'
import { NavDropDown } from '../../components/navbar/navDropDown/NavDropDown'
import { ItemMenu } from '../../components/navbar/navDropDown/itemMenu/ItemMenu'
import Home from '../../svg/home.svg'

export default function Navbar() {
  return (
    <nav className="navBar">
      <ul className="navBar_list">
        <li className="navBar_list__item">
          <NavLink href="/home">
            <img src={Home} alt="Home" />
          </NavLink>
        </li>
        <li className="navBar_list__item">
          <NavLink href="/about">Accueil</NavLink>
        </li>
        <li className="navBar_list__item">
          <NavLink href="/about">Accueil2</NavLink>
        </li>
        <li className="navBar_list__item">
          <NavLink href="/about">Accueil3</NavLink>
        </li>
        <li className="navBar_list__item">
          <NavDropDown>
            <ul className="navBar_list">
              <li className="navBar_list__item">
                <ItemMenu href="/about">Profil</ItemMenu>
              </li>
              <li className="navBar_list__item">
                <ItemMenu href="/about">Contact</ItemMenu>
              </li>
              <li className="navBar_list__item">
                <ItemMenu href="/about">Deconnexion</ItemMenu>
              </li>
            </ul>
          </NavDropDown>
        </li>
      </ul>
    </nav>
  )
}
