import './SignUp.scss'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { InscriptionForm } from '../../../components/inscription/inscriptionForm/InscriptionForm'
import { ProgressBar } from '../../../components/inscription/progressBar/ProgressBar'
import { HelpPassword } from '../../../components/inscription/password/help/HelpPassword'
import { StrengthPassword } from '../../../components/inscription/password/StrengthPassword/StrengthPassword'

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
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [password, setPassword] = useState('')
  const confirmPasswordRef = useRef(null)

  useEffect(() => {
    if (currentStep < 3) {
      setPassword('')
    }

    if (currentStep === 3) {
      if (formData.password !== formData.confirmPassword) {
        confirmPasswordRef.current.setCustomValidity(
          'Les mots de passes ne sont pas identiques'
        )
      } else {
        confirmPasswordRef.current.setCustomValidity('')
      }
    }
  }, [formData.password, formData.confirmPassword, currentStep])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCodePostalBlur = async () => {
    try {
      console.log('Requête API pour le code postal:', formData.codePostal)
      const response = await axios.get(
        `https://geo.api.gouv.fr/communes?codePostal=${formData.codePostal}`
      )
      console.log("Réponse de l'API:", response.data)
      setCommunes(response.data)
      setError('')
    } catch (error) {
      console.error('Erreur lors de la récupération des communes', error)
      setError('Aucune commune avec ce code postal.')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    if (e.currentTarget.checkValidity()) {
      console.log('Formulaire envoyé avec succès')
      setIsSubmitted(true)
    } else {
      console.log('Le formulaire contient des erreurs')
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
      setCurrentStep(currentStep - 1)
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
                  placeholder="Nom ..."
                  maxLength="35"
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
                  placeholder="john.doe@exemple.fr"
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
                  value={formData.password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <StrengthPassword password={password} />

                <InscriptionForm
                  label="Confirmation Mot de Passe :"
                  ref={confirmPasswordRef}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  minLength="8"
                  placeholder="confirmation mdp"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
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
