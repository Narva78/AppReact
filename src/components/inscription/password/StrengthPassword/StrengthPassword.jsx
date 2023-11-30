import './StrengthPassword.scss'
import zxcvbn from 'zxcvbn'

export const StrengthPassword = ({ password }) => {
  const passwordStrength = zxcvbn(password)
  const hasMinLength = password.length >= 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  const hasNumber = /\d/.test(password)

  const num = (passwordStrength.score * 100) / 4

  const createPassLabel = () => {
    switch (passwordStrength.score) {
      case 0:
        return 'Trop faible'
      case 1:
        return 'Faible'
      case 2:
        return 'Correct'
      case 3:
        return 'Fort'
      case 4:
        return 'Très fort'
      default:
        return 'none'
    }
  }

  const functionProgressColor = () => {
    switch (passwordStrength.score) {
      case 0:
        return '#828282'
      case 1:
        return '#EA1111'
      case 2:
        return '#FFAD00'
      case 3:
        return '#9bc158'
      case 4:
        return '#00b500'
      default:
        return 'none'
    }
  }

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: functionProgressColor(),
  })

  return (
    <>
      <div className="progress">
        <div className="progress__bar" style={changePasswordColor()}></div>
      </div>
      <div className="progress__label">
        <p style={{ color: functionProgressColor() }}>{createPassLabel()}</p>
        <ul>
          {hasMinLength && (
            <li>
              <span className="progress__label__checkmark">✔</span> Au moins 8
              caractères
            </li>
          )}
          {hasUppercase && (
            <li>
              <span className="progress__label__checkmark">✔</span> Au moins une
              majuscule
            </li>
          )}
          {hasNumber && (
            <li>
              <span className="progress__label__checkmark">✔</span> Au moins un
              chiffre
            </li>
          )}
          {hasSpecialChar && (
            <li>
              <span className="progress__label__checkmark">✔</span> Au moins un
              caractère spécial
            </li>
          )}
        </ul>
      </div>
    </>
  )
}
