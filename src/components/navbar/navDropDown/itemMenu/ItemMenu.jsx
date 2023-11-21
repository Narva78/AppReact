import './ItemMenu.css'

export const ItemMenu = ({ href, children }) => {
  return (
    <a href={href} className="itemMenu">
      {children}
    </a>
  )
}
