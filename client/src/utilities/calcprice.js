import { BASE_PRICE, FEATURES, findOption } from './options'

// Base price + the price of every picked option
export const calcPrice = (car) => {
  let total = BASE_PRICE

  for (const feature of FEATURES) {
    const option = findOption(feature, car[feature])
    if (option) total += option.price
  }

  return total
}