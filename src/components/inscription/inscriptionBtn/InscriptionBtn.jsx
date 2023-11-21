import './InscriptionBtn.css'

export const InscriptionBtn = ({ href, type, children }) => {
  return (
    <div className="btn">
      <button type={type}>
        <span>{children}</span>
      </button>
    </div>
  )
}
