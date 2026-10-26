import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCar, updateCar, deleteCar } from '../services/CarsAPI'
import { calcPrice } from '../utilities/calcprice'
import { checkCombo } from '../utilities/validation'
import OptionPicker from '../components/OptionPicker'
import CarSummary from '../components/CarSummary'
import '../css/CreateCar.css'

const EditCar = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)
  const [error, setError] = useState('')

  // Load the saved car so the page starts with its current choices
  useEffect(() => {
    const fetchCar = async () => {
      const data = await getCar(id)
      setCar(data)
    }
    fetchCar()
  }, [id])

  if (!car) return <p className="page">Loading...</p>

  const price = calcPrice(car)

  const pick = (feature, value) => {
    setCar((prev) => ({ ...prev, [feature]: value }))
    setError('')
  }

  const handleUpdate = async () => {
    if (!car.name.trim()) return setError('Give your car a name.')

    const comboError = checkCombo(car)
    if (comboError) return setError(comboError)

    await updateCar(id, { ...car, price })
    navigate(`/customcars/${id}`)
  }

  const handleDelete = async () => {
    await deleteCar(id)
    navigate('/customcars')
  }

  return (
    <div className="page">
      <div className="title-row">
        <h2>🏎️</h2>
        <input
          className="name-input"
          type="text"
          value={car.name}
          onChange={(e) => pick('name', e.target.value)}
        />
      </div>

      <OptionPicker car={car} onPick={pick} />

      {error && <p className="error">⚠️ {error}</p>}

      <div className="page-body">
        <div className="side">
          <p className="price">💰 ${price.toLocaleString()}</p>
          <div className="side-buttons">
            <button className="btn" onClick={handleUpdate}>Update</button>
            <button className="btn" onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <CarSummary car={car} />
      </div>
    </div>
  )
}

export default EditCar