import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCar, deleteCar } from '../services/CarsAPI'
import { isConvertibleRoof } from '../utilities/options'
import CarSummary from '../components/CarSummary'
import '../css/CreateCar.css'

const CarDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)

  useEffect(() => {
    const fetchCar = async () => {
      const data = await getCar(id)
      setCar(data)
    }
    fetchCar()
  }, [id])

  const handleDelete = async () => {
    await deleteCar(id)
    navigate('/customcars')
  }

  if (!car) return <p className="page">Loading...</p>

  return (
    <div className="page">
      <h2 className="car-title">
        {isConvertibleRoof(car.roof) ? '🏎️' : '🚗'} {car.name}
      </h2>

      <div className="page-body">
        <div className="side">
          <p className="price">💰 ${Number(car.price).toLocaleString()}</p>
          <div className="side-buttons">
            <Link to={`/edit/${car.id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button className="btn" onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <CarSummary car={car} />
      </div>
    </div>
  )
}

export default CarDetails