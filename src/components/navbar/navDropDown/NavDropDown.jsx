import './NavDropDown.css'
import { useState } from 'react'
import Profil from '../../../svg/profil.svg'

export const NavDropDown = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="dropDown" onMouseLeave={() => setOpen(false)}>
      <button className="dropDown__button" onMouseEnter={() => setOpen(true)}>
        <img src={Profil} alt="" /> ▼
      </button>
      {open && (
        <div className="dropDown__content" onMouseEnter={() => setOpen(true)}>
          {children}
        </div>
      )}
    </div>
  )
}
