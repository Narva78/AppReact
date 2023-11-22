import './ItemMenu.scss'

export const ItemMenu = ({ href, children }) => {
  return (
    <a href={href} className="itemMenu">
      {children}
    </a>
  )
}
