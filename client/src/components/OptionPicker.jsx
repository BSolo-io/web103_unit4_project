import React, { useState } from 'react'
import { OPTIONS, FEATURES, isConvertibleRoof } from '../utilities/options'
import { isBlocked } from '../utilities/validation'

// Convertible checkbox + EXTERIOR / ROOF / WHEELS / INTERIOR buttons.
// Clicking a button opens a popup of option tiles with a DONE button.
const OptionPicker = ({ car, onPick }) => {
  const [open, setOpen] = useState(null)
  const convertible = isConvertibleRoof(car.roof)

  // Checking/unchecking switches to the first roof of the other type
  const toggleConvertible = () => {
    const firstRoof = OPTIONS.roof.find((roof) => roof.convertible === !convertible)
    onPick('roof', firstRoof.name)
  }

  const choices =
    open === 'roof'
      ? OPTIONS.roof.filter((roof) => roof.convertible === convertible)
      : OPTIONS[open] || []

  return (
    <div className="picker">
      <label className="convertible">
        <input type="checkbox" checked={convertible} onChange={toggleConvertible} />
        Convertible
      </label>

      {FEATURES.map((feature) => (
        <button
          type="button"
          key={feature}
          className={open === feature ? 'btn active' : 'btn'}
          onClick={() => setOpen(open === feature ? null : feature)}
        >
          {feature}
        </button>
      ))}

      {open && (
        <div className="popup">
          <div className="tiles">
            {choices.map((option) => {
              const blocked = isBlocked(car, open, option.name)
              const selected = car[open] === option.name
              return (
                <button
                  type="button"
                  key={option.name}
                  className={selected ? 'tile selected' : 'tile'}
                  disabled={blocked}
                  title={blocked ? 'Not available with your current choices' : option.name}
                  onClick={() => onPick(open, option.name)}
                >
                  <img src={option.image} alt={option.name} />
                  <span>{option.name}</span>
                  <small>{option.price > 0 ? `+$${option.price.toLocaleString()}` : 'Included'}</small>
                </button>
              )
            })}
          </div>
          <button type="button" className="btn" onClick={() => setOpen(null)}>
            Done
          </button>
        </div>
      )}
    </div>
  )
}

export default OptionPicker