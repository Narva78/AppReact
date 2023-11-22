import './Inscription.scss'
import { InscriptionForm } from '../../components/inscription/inscriptionForm/InscriptionForm'
import { useState, useEffect, useRef } from 'react'
import { InscriptionBtn } from '../../components/inscription/inscritpionBtn/InscriptionBtn'

export default function Inscription() {
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    birthday: '',
    mail: '',
    city: '',
    password: '',
    confirmPassword: '',
    genre: '',
  })

  const confirmPasswordRef = useRef(null)

  useEffect(() => {
    if (formData.password !== formData.confirmPassword) {
      confirmPasswordRef.current.setCustomValidity(
        'Les mots de passes ne sont pas identiques'
      )
    } else {
      confirmPasswordRef.current.setCustomValidity('')
    }
  }, [formData.password, formData.confirmPassword])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    if (e.currentTarget.checkValidity()) {
      console.log('Formulaire envoyé avec succès')
    } else {
      console.log('Le formulaire contient des erreurs')
    }
  }

  return (
    <div className="bg_color">
      <form className="bg_color__container" onSubmit={handleSubmit}>
        <h1 className="bg_color__container__title">Sign up</h1>
        <div className="bg_color__container__line">
          <InscriptionForm
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
            name="firstname"
            type="text"
            placeholder="Prénom ..."
            maxLength="35"
            value={formData.firstname}
            onChange={handleInputChange}
            onInvalid={(e) =>
              e.target.setCustomValidity('Veuillez entrer votre prénom ...')
            }
            onInput={(e) => e.target.setCustomValidity('')}
          />
        </div>

        <InscriptionForm
          name="birthday"
          type="date"
          value={formData.birthday}
          onChange={handleInputChange}
          onInvalid={(e) =>
            e.target.setCustomValidity(
              "Veuillez entrer votre date d'anniversaire ..."
            )
          }
          onInput={(e) => e.target.setCustomValidity('')}
        />

        <InscriptionForm
          name="mail"
          type="email"
          placeholder="john.doe@exemple.fr"
          maxLength="55"
          value={formData.mail}
          onChange={handleInputChange}
          onInvalid={(e) =>
            e.target.setCustomValidity('Veuillez entrer votre email ...')
          }
          onInput={(e) => e.target.setCustomValidity('')}
        />

        <InscriptionForm
          name="city"
          type="text"
          placeholder="ville ..."
          maxLength="50"
          value={formData.city}
          onChange={handleInputChange}
          onInvalid={(e) =>
            e.target.setCustomValidity('Veuillez entrer votre ville ...')
          }
          onInput={(e) => e.target.setCustomValidity('')}
        />

        <InscriptionForm
          id="password"
          name="password"
          type="password"
          minLength="8"
          placeholder="mot de passe ..."
          value={formData.password}
          onChange={handleInputChange}
        />
        <InscriptionForm
          ref={confirmPasswordRef}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          minLength="8"
          placeholder="confirmation mdp"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />

        <fieldset>
          <InscriptionForm
            name="genre"
            type="radio"
            label="Homme"
            value="Homme"
            checked={formData.genre === 'Homme'}
            onChange={handleInputChange}
          />
          <InscriptionForm
            name="genre"
            type="radio"
            label="Femme"
            value="Femme"
            checked={formData.genre === 'Femme'}
            onChange={handleInputChange}
          />
          <InscriptionForm
            name="genre"
            type="radio"
            label="Autre"
            value="Autre"
            checked={formData.genre === 'Autre'}
            onChange={handleInputChange}
          />
        </fieldset>

        <InscriptionBtn type="submit">Submit</InscriptionBtn>
      </form>
    </div>
  )
}
