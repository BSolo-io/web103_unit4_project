import { pool } from './database.js'

// Run once with: node config/reset.js  (from the server folder)
// Wipes and rebuilds the table. Change the columns to match your item.

const createCarsTable = async () => {
  const query = `
    DROP TABLE IF EXISTS cars;

    CREATE TABLE cars (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      exterior VARCHAR(50) NOT NULL,
      wheels VARCHAR(50) NOT NULL,
      roof VARCHAR(50) NOT NULL,
      interior VARCHAR(50) NOT NULL,
      price INTEGER NOT NULL
    );
  `

  try {
    await pool.query(query)
    console.log('✅ cars table created')
  } catch (err) {
    console.error('⚠️ error creating cars table', err)
  }
}

const seedCars = async () => {
  // Optional sample row so the list page isn't empty
  const query = `
    INSERT INTO cars (name, exterior, wheels, roof, interior, price)
    VALUES ($1, $2, $3, $4, $5, $6)
  `
  const values = ['Sample Car', 'Red', 'Standard', 'Hardtop', 'Black', 65000]

  try {
    await pool.query(query, values)
    console.log('✅ sample car added')
  } catch (err) {
    console.error('⚠️ error seeding cars', err)
  }
}

const reset = async () => {
  await createCarsTable()
  await seedCars()
  await pool.end()
}

reset()
