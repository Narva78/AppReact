import './HelpPassword.scss'

export const HelpPassword = () => {
  return (
    <div className="info">
      <span className="info__icone">?</span>
      <span className="info__bulle">
        Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1
        chiffre et 1 caractère spécial
      </span>
    </div>
  )
}
