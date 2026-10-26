import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCars, deleteCar } from '../services/CarsAPI'
import { isConvertibleRoof } from '../utilities/options'
import '../css/CreateCar.css'

const ViewCars = () => {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAllCars()
        setCars(data)
      } catch (err) {
        setError('Could not load cars. Is the server running?')
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  const handleDelete = async (id) => {
    await deleteCar(id)
    setCars((prev) => prev.filter((car) => car.id !== id))
  }

  if (loading) return <p className="page">Loading cars...</p>
  if (error) return <p className="page">{error}</p>
  if (cars.length === 0) return <p className="page">No cars yet. Go customize one!</p>

  return (
    <div className="cars-list">
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <h2 className="car-title">
            {isConvertibleRoof(car.roof) ? '🏎️' : '🚗'} {car.name}
          </h2>

          <div className="car-row">
            <div className="car-features">
              <p>🖌️ <strong>Exterior:</strong> {car.exterior}</p>
              <p>🛞 <strong>Wheels:</strong> {car.wheels}</p>
              <p>😎 <strong>Roof:</strong> {car.roof}</p>
              <p>💺 <strong>Interior:</strong> {car.interior}</p>
            </div>

            <div className="car-price">
              <p className="price">💰 ${Number(car.price).toLocaleString()}</p>
              <Link to={`/customcars/${car.id}`}>
                <button className="btn">Details</button>
              </Link>
              <div className="list-actions">
                <Link to={`/edit/${car.id}`}>
                  <button className="btn small">Edit</button>
                </Link>
                <button className="btn small" onClick={() => handleDelete(car.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ViewCars