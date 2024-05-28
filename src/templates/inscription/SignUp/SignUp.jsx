import './SignUp.scss'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { InscriptionForm } from '../../../components/inscription/inscriptionForm/InscriptionForm'
import { ProgressBar } from '../../../components/inscription/progressBar/ProgressBar'
import { HelpPassword } from '../../../components/inscription/password/help/HelpPassword'
import { StrengthPassword } from '../../../components/inscription/password/StrengthPassword/StrengthPassword'
import ReCAPTCHA from 'react-google-recaptcha'

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    birthday: '',
    codePostal: '',
    ville: '',
    password: '',
    confirmPassword: '',
    genre: '',
  })

  const [communes, setCommunes] = useState([])
  const [error, setError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [password, setPassword] = useState('')
  const confirmPasswordRef = useRef(null)

  const onChange = () => {}

  useEffect(() => {
    if (currentStep < 3) {
      setPassword('')
    }

    if (currentStep === 3) {
      if (password !== formData.confirmPassword) {
        confirmPasswordRef.current.setCustomValidity(
          'Les mots de passes ne sont pas identiques'
        )
      } else {
        confirmPasswordRef.current.setCustomValidity('')
      }
    }
  }, [password, formData.confirmPassword, currentStep])

  const validatePassword = (password) => {
    const validations = {
      minLength: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      specialChars: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      number: /\d/.test(password),
    }
    return validations
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCodePostalBlur = async () => {
    try {
      const response = await axios.get(
        `https://geo.api.gouv.fr/communes?codePostal=${formData.codePostal}`
      )
      setCommunes(response.data)
      setError('')
    } catch (error) {
      console.error('Erreur lors de la récupération des communes', error)
      setError('Aucune commune avec ce code postal.')
    }
  }

  const goToNextStep = () => {
    if (!isSubmitted && currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goToPreviousStep = () => {
    if (
      window.confirm(
        "Êtes-vous sûr de vouloir revenir à l'étape précédente ? Les données rentrées seront perdues."
      )
    ) {
      if (currentStep === 2) {
        setFormData({ ...formData, birthday: '' })
      }

      if (currentStep === 3) {
        setPasswordError('')
      }

      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const passwordValidations = validatePassword(password)
    console.log(passwordValidations)
    console.log(formData)

    const allValid = Object.values(passwordValidations).every(Boolean)
    console.log(allValid)
    if (!allValid) {
      let errorMessages = []
      if (!passwordValidations.minLength)
        errorMessages.push('au moins 8 caractères')
      if (!passwordValidations.uppercase) errorMessages.push('une majuscule')
      if (!passwordValidations.specialChars)
        errorMessages.push('un caractère spécial')
      if (!passwordValidations.number) errorMessages.push('un chiffre')

      let errorMessage =
        'Le mot de passe doit contenir au moins : ' +
        errorMessages.join(', ') +
        '.'

      setPasswordError(errorMessage)

      console.log(errorMessages)
    } else {
      console.log('Formulaire envoyé avec succès')
      setIsSubmitted(true)
    }
  }

  return (
    <div className="bg">
      <div className="bg__container">
        <h1 className="bg__container__h1">Sign in</h1>
        <ProgressBar currentStep={currentStep} />
        <form onSubmit={handleSubmit} className="bg__container__form">
          <div
            id="step1"
            className={`bg__container__form__step ${
              currentStep === 1 ? 'active' : ''
            }`}
            style={{ '--step-index': currentStep - 1 }}
          >
            {currentStep === 1 && (
              <>
                <h3 className="bg__container__titleh3">Basic info</h3>
                <InscriptionForm
                  label="Nom :"
                  name="name"
                  type="text"
                  maxLength="35"
                  placeholder="Nom ..."
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onInvalid={(e) =>
                    e.target.setCustomValidity('Veuillez entrer votre nom ...')
                  }
                  onInput={(e) => e.target.setCustomValidity('')}
                />
                <InscriptionForm
                  label="Prénom :"
                  name="firstname"
                  type="text"
                  placeholder="Prénom ..."
                  autoComplete="firstname"
                  maxLength="35"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      'Veuillez entrer votre prénom ...'
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity('')}
                />

                <InscriptionForm
                  label="Code Postal :"
                  name="codePostal"
                  type="text"
                  placeholder="78120"
                  autoComplete="zipCode"
                  value={formData.codePostal}
                  onChange={handleInputChange}
                  onBlur={handleCodePostalBlur}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      'Veuillez entrer votre Code Postal ...'
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity('')}
                />
                {error && <div style={{ color: 'red' }}>{error}</div>}

                <InscriptionForm
                  label="Ville :"
                  name="ville"
                  type="select"
                  value={formData.ville}
                  onChange={handleInputChange}
                  options={communes.map((commune) => ({
                    label: commune.nom,
                    value: commune.nom,
                  }))}
                  onInvalid={(e) =>
                    e.target.setCustomValidity('Veuillez choisir une Ville ...')
                  }
                  onInput={(e) => e.target.setCustomValidity('')}
                />

                <button className="button_next" onClick={goToNextStep}>
                  Suivant
                </button>
              </>
            )}
          </div>
          <div
            id="step2"
            className={`bg__container__form__step ${
              currentStep === 2 ? 'active' : ''
            }`}
            style={{ '--step-index': currentStep - 1 }}
          >
            {currentStep === 2 && (
              <>
                <h3 className="bg__container__titleh3">Personal info</h3>
                <InscriptionForm
                  label="Email :"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.fr"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      'Veuillez entrer votre email ...'
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity('')}
                />

                <InscriptionForm
                  label="Naissance :"
                  name="birthday"
                  type="date"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      'Veuillez entrer votre date de naissance ...'
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity('')}
                />

                <div className="radio_line">
                  <InscriptionForm
                    label="Homme"
                    name="genre"
                    type="radio"
                    value="Homme"
                    checked={formData.genre === 'Homme'}
                    onChange={handleInputChange}
                  />
                  <InscriptionForm
                    label="Femme"
                    name="genre"
                    type="radio"
                    value="Femme"
                    checked={formData.genre === 'Femme'}
                    onChange={handleInputChange}
                  />
                  <InscriptionForm
                    label="Transgenre"
                    name="genre"
                    type="radio"
                    value="Transgenre"
                    checked={formData.genre === 'Transgenre'}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="btn_line">
                  <button className="button_back" onClick={goToPreviousStep}>
                    Retour
                  </button>
                  <button className="button_next" onClick={goToNextStep}>
                    Suivant
                  </button>
                </div>
              </>
            )}
          </div>
          <div
            id="step3"
            className={`bg__container__form__step ${
              currentStep === 3 ? 'active' : ''
            }`}
            style={{ '--step-index': currentStep - 1 }}
          >
            {currentStep === 3 && (
              <>
                <h3 className="bg__container__titleh3">Password</h3>
                <div className="bg__container__form__step__field">
                  <label
                    htmlFor="password"
                    className="bg__container__form__step__field__label"
                  >
                    Mot de passe :
                  </label>
                  <HelpPassword />
                </div>
                <InscriptionForm
                  id="password"
                  name="password"
                  type="password"
                  minLength="8"
                  placeholder="mot de passe ..."
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <StrengthPassword password={password} />
                {passwordError && (
                  <div style={{ color: 'red' }}>{passwordError}</div>
                )}

                <InscriptionForm
                  label="Confirmation Mot de Passe :"
                  ref={confirmPasswordRef}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  minLength="8"
                  placeholder="confirmation mdp"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <div className="recaptcha">
                  <ReCAPTCHA
                    sitekey="6LeovCEpAAAAAExOMjAi5j3ar2EP6s6mpEOtrgGt"
                    onChange={onChange}
                  />
                </div>
                <div className="btn_line">
                  <button className="button_back" onClick={goToPreviousStep}>
                    Retour
                  </button>
                  <button
                    type="submit"
                    className="button_next"
                    onClick={goToNextStep}
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
