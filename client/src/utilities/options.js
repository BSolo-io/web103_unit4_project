// All the choices a user can pick, with how much each adds to the price.
// Change names, prices, colors, or icons here and every page updates.

export const BASE_PRICE = 50000

export const FEATURES = ['exterior', 'roof', 'wheels', 'interior']

export const OPTIONS = {
  exterior: [
    { name: 'Black', price: 0, color: '#1a1a1a', icon: '🚗', image: '/images/exterior/black.jpg' },
    { name: 'Red', price: 1000, color: '#b3261e', icon: '🚗', image: '/images/exterior/red.jpg' },
    { name: 'Green', price: 1200, color: '#1e7a46', icon: '🚗', image: '/images/exterior/green.jpg' },
    { name: 'Blue', price: 1000, color: '#1f5fbf', icon: '🚗', image: '/images/exterior/blue.jpg' },
    { name: 'Yellow', price: 1500, color: '#e6b800', icon: '🚗', image: '/images/exterior/yellow.jpg' }
  ],
  roof: [
    // convertible: true = only shows when the "Convertible" box is checked
    { name: 'Hardtop', price: 0, color: '#3a3a3a', icon: '🏠', convertible: false, image: '/images/roof/hardtop.jpg' },
    { name: 'Sunroof', price: 1500, color: '#5b7c99', icon: '☀️', convertible: false, image: '/images/roof/sunroof.jpg' },
    { name: 'Panoramic Glass', price: 3000, color: '#9fd3ff', icon: '🔭', convertible: false, image: '/images/roof/panoramic-glass.jpg' },
    { name: 'Carbon Fiber', price: 4500, color: '#222222', icon: '🕸️', convertible: false, image: '/images/roof/carbon-fiber.jpg' },
    { name: 'Soft Top', price: 5000, color: '#6b5b4b', icon: '⛺', convertible: true, image: '/images/roof/soft-top.jpg' },
    { name: 'Retractable Hardtop', price: 7000, color: '#4a4a4a', icon: '🔄', convertible: true, image: '/images/roof/retractable-hardtop.jpg' }
  ],
  wheels: [
    { name: 'Standard', price: 0, color: '#9e9e9e', icon: '⚙️', image: '/images/wheels/standard.jpg' },
    { name: 'Roadster', price: 2500, color: '#c9a227', icon: '🛞', image: '/images/wheels/roadster.jpg' },
    { name: 'Speed', price: 5000, color: '#c0392b', icon: '⚡', image: '/images/wheels/speed.jpg' }
  ],
  interior: [
    { name: 'Black', price: 0, color: '#222222', icon: '💺', image: '/images/interior/black.jpg' },
    { name: 'Beige', price: 800, color: '#d8c3a5', icon: '💺', image: '/images/interior/beige.jpg' },
    { name: 'Red', price: 1500, color: '#a93226', icon: '💺', image: '/images/interior/red.jpg' },
    { name: 'White', price: 1200, color: '#f2f2f2', icon: '💺', image: '/images/interior/white.jpg' }
  ]
}

// Find the full option (price, color, icon) for a feature by its name
export const findOption = (feature, name) =>
  OPTIONS[feature].find((option) => option.name === name)

// Is this roof a convertible roof?
export const isConvertibleRoof = (roofName) => !!findOption('roof', roofName)?.convertible

// Pick black or white text so it's readable on any background color
export const textOn = (hex = '#333333') => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return r * 0.299 + g * 0.587 + b * 0.114 > 150 ? '#111' : '#fff'
}