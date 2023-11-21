import './Inscription.css'
import { InscriptionForm } from '../../components/inscription/inscriptionForm/InscriptionForm'
import { InscriptionBtn } from '../../components/inscription/inscriptionBtn/InscriptionBtn'
import { useState } from 'react'
//import DatePicker from 'react-datepicker'
//import 'react-datepicker/dist/react-datepicker.css'

export default function Inscription() {
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    birthday: '',
    mail: '',
    city: '',
    password: '',
    genre: '',
  })

  //const [startDate, setStartDate] = useState(new Date())

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePasswordInvalid = (e) => {
    if (e.target.value === '') {
      e.target.setCustomValidity('Veuillez entrer le mot de passe ...')
    } else if (e.target.value.length < 8) {
      e.target.setCustomValidity(
        'Le mot de passe doit contenir au moins 8 caractères.'
      )
    } else {
      e.target.setCustomValidity('')
    }
  }

  const verifPassword = (e) => {
    if (e.target.value !== formData.password) {
      e.target.setCustomValidity('Les mots de passe ne correspondent pas.')
    } else {
      e.target.setCustomValidity('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="container__title">Sign up</h1>
      <div className="container__line">
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

      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Sélectionnez une date"
  /> */}

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
        maxlength="55"
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
        maxlength="50"
        value={formData.city}
        onChange={handleInputChange}
        onInvalid={(e) =>
          e.target.setCustomValidity('Veuillez entrer votre ville ...')
        }
        onInput={(e) => e.target.setCustomValidity('')}
      />

      <InscriptionForm
        name="password"
        type="password"
        minlength="8"
        placeholder="mot de passe ..."
        value={formData.password}
        onChange={handleInputChange}
        onInvalid={handlePasswordInvalid}
        onInput={(e) => e.target.setCustomValidity('')}
      />

      <InscriptionForm
        name="confirm_password"
        type="password"
        minlength="8"
        placeholder="confirmation mdp"
        value={formData.password}
        onChange={handleInputChange}
        onInvalid={verifPassword}
        onInput={(e) => e.target.setCustomValidity('')}
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
        />
      </fieldset>

      <InscriptionBtn type="submit" href="#!">
        Submit
      </InscriptionBtn>
    </form>
  )
}
