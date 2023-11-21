import './NavLink.css'

export const NavLink = ({ href, children }) => {
  return (
    <a href={href} className="nav_link">
      {children}
    </a>
  )
}
