import './Navbar.css'
import { NavLink } from './navLink/NavLink'
import { NavDropDown } from './navDropDown/NavDropDown'

export default function Navbar() {
  return (
    <nav className="navBar">
      <ul className="navBar_list">
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
              <li>
                <NavLink href="/about">Profil</NavLink>
              </li>
              <li>
                <NavLink href="/about">Contact</NavLink>
              </li>
              <li>
                <NavLink href="/about">Deconnexion</NavLink>
              </li>
            </ul>
          </NavDropDown>
        </li>
      </ul>
    </nav>
  )
}
