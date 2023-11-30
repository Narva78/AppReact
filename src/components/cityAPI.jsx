import React, { useState } from 'react'
import axios from 'axios'

const CityAPI = () => {
  const [zipcode, setZipcode] = useState('')
  const [city, setCity] = useState('')
  const [cities, setCities] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const handleZipcodeBlur = async () => {
    try {
      const response = await axios.get(
        `https://geo.api.gouv.fr/communes?codePostal=${zipcode}`
      )
      setCities(response.data)
      setErrorMessage('')
    } catch (error) {
      console.error('Erreur lors de la récupération des communes', error)
      setErrorMessage('Aucune commune avec ce code postal.')
    }
  }

  return (
    <form>
      <div className="form-group">
        <label>Code Postal</label>
        <input
          type="text"
          className="form-control"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          onBlur={handleZipcodeBlur}
        />
        {errorMessage && <div style={{ color: '#f55' }}>{errorMessage}</div>}
      </div>

      <div>
        <label>Ville</label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          {cities.map((c) => (
            <option key={c.code} value={c.nom}>
              {c.nom}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}

export default CityAPI
