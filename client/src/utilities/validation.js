import { isConvertibleRoof } from './options'

// Combos that aren't allowed. Add more rules here if you want.
const RULES = [
  {
    test: (car) => isConvertibleRoof(car.roof) && car.wheels === 'Speed',
    message: 'Speed wheels are not available on a convertible.'
  },
  {
    test: (car) => isConvertibleRoof(car.roof) && car.interior === 'White',
    message: 'White interior is not available on a convertible.'
  }
]

// Returns an error message if the car has an impossible combo, otherwise null
export const checkCombo = (car) => {
  const broken = RULES.find((rule) => rule.test(car))
  return broken ? broken.message : null
}

// True if picking `value` for `feature` would break a rule
// (used to grey out options before the user submits)
export const isBlocked = (car, feature, value) =>
  checkCombo({ ...car, [feature]: value }) !== null