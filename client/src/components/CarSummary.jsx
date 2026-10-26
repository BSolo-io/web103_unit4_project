import React from 'react'
import { FEATURES, findOption } from '../utilities/options'

const LABELS = {
  exterior: '🖌️ Exterior',
  roof: '😎 Roof',
  wheels: '🛞 Wheels',
  interior: '💺 Interior'
}

// 2x2 grid showing a picture of each picked option.
// Pictures swap as choices change. Hover a tile to see its name and price.
const CarSummary = ({ car }) => (
  <div className="summary">
    {FEATURES.map((feature) => {
      const option = findOption(feature, car[feature])
      return (
        <div key={feature} className="summary-tile">
          {option?.image && <img src={option.image} alt={car[feature]} />}
          <div className="summary-info">
            <p>
              <strong>{LABELS[feature]}:</strong> {car[feature]}
            </p>
            <p>💵 ${(option?.price || 0).toLocaleString()}</p>
          </div>
        </div>
      )
    })}
  </div>
)

export default CarSummary