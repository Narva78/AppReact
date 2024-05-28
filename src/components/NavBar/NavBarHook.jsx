import './NavBarHook.scss'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5'

export const NavBarHook = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setShowMenu(false)
    }
  }

  /* useEffect est un hook React utile lorsque :
    - l'on veut intéragir avec le DOM
    - Appels API & Gestion des Données
    - Abonnements et Désabonnements
  */
  useEffect(() => {
    // Ajoute un écouteur d'évènement pour les touches du clavier
    document.addEventListener('keydown', handleKeyDown)

    // Fonction de nettoyage qui retire l'écouteur d'évènement
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="home" className="nav__logo">
          React App
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? 'show-menu' : ''}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__list__item">
              <NavLink
                to="/home"
                className="nav__list__item__link"
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__list__item">
              <NavLink
                to="#"
                className="nav__list__item__link"
                onClick={closeMenuOnMobile}
              >
                News
              </NavLink>
            </li>
            <li className="nav__list__item">
              <NavLink
                to="/about-us"
                className="nav__list__item__link"
                onClick={closeMenuOnMobile}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav__list__item">
              <NavLink
                to="/favoris"
                className="nav__list__item__link"
                onClick={closeMenuOnMobile}
              >
                Favoris
              </NavLink>
            </li>
            <li className="nav__list__item">
              <NavLink
                to="#"
                className="nav__list__item__link"
                onClick={closeMenuOnMobile}
              >
                Localisation
              </NavLink>
            </li>
            <li className="nav__list__item">
              <NavLink to="SignUp" className="nav__list__item__link nav__cta">
                Inscription
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  )
}
