import { pool } from '../config/database.js'

// GET all cars
const getCars = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM cars ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

// GET one car by id
const getCarById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('SELECT * FROM cars WHERE id = $1', [id])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

// CREATE a car
const createCar = async (req, res) => {
  try {
    const { name, exterior, wheels, roof, interior, price } = req.body
    const results = await pool.query(
      `INSERT INTO cars (name, exterior, wheels, roof, interior, price)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [name, exterior, wheels, roof, interior, price]
    )
    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

// UPDATE a car
const updateCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { name, exterior, wheels, roof, interior, price } = req.body
    const results = await pool.query(
      `UPDATE cars
       SET name = $1, exterior = $2, wheels = $3, roof = $4, interior = $5, price = $6
       WHERE id = $7
       RETURNING *`,
      [name, exterior, wheels, roof, interior, price, id]
    )
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

// DELETE a car
const deleteCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('DELETE FROM cars WHERE id = $1 RETURNING *', [id])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar
}
