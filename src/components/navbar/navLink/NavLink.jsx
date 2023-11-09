import './NavLink.css'

export const NavLink = ({ href, children }) => {
  return (
    <button href={href} className="nav_link">
      {children}
    </button>
  )
}
