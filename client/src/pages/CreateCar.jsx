import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCar } from '../services/CarsAPI'
import { calcPrice } from '../utilities/calcprice'
import { checkCombo } from '../utilities/validation'
import OptionPicker from '../components/OptionPicker'
import CarSummary from '../components/CarSummary'
import '../css/CreateCar.css'

const CreateCar = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [car, setCar] = useState({
    name: '',
    exterior: 'Black',
    roof: 'Hardtop',
    wheels: 'Standard',
    interior: 'Black'
  })

  const price = calcPrice(car)

  const pick = (feature, value) => {
    setCar((prev) => ({ ...prev, [feature]: value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!car.name.trim()) return setError('Give your car a name.')

    const comboError = checkCombo(car)
    if (comboError) return setError(comboError)

    await createCar({ ...car, price })
    navigate('/customcars')
  }

  return (
    <form className="page" onSubmit={handleSubmit}>
      <div className="create-bar">
        <OptionPicker car={car} onPick={pick} />

        <div className="create-actions">
          <input
            type="text"
            placeholder="My New Car"
            value={car.name}
            onChange={(e) => pick('name', e.target.value)}
          />
          <button type="submit" className="btn">Create</button>
        </div>
      </div>

      {error && <p className="error">⚠️ {error}</p>}

      <div className="page-body">
        <div className="side">
          <div className="price-box">💰 ${price.toLocaleString()}</div>
        </div>
        <CarSummary car={car} />
      </div>
    </form>
  )
}

export default CreateCar