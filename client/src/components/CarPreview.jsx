import React from 'react'
import { findOption } from '../utilities/options'

// Simple drawing of a car that changes as options are picked
const CarPreview = ({ car }) => {
  const body = findOption('exterior', car.exterior)?.color || '#888'
  const seats = findOption('interior', car.interior)?.color || '#333'

  const roofs = {
    Hardtop: <path d="M95 70 L135 40 H225 L260 70 Z" fill={body} />,
    Sunroof: (
      <g>
        <path d="M95 70 L135 40 H225 L260 70 Z" fill={body} />
        <rect x="160" y="44" width="40" height="8" rx="2" fill="#9fd3ff" />
      </g>
    ),
    'Panoramic Glass': <path d="M95 70 L135 40 H225 L260 70 Z" fill="#9fd3ff" opacity="0.8" />,
    'Carbon Fiber': <path d="M95 70 L135 40 H225 L260 70 Z" fill="#2b2b2b" stroke="#555" strokeDasharray="4 3" />,
    Convertible: null
  }

  const wheelStyle = {
    Standard: { rim: '#bbbbbb', spokes: 0 },
    Roadster: { rim: '#d4af37', spokes: 5 },
    Speed: { rim: '#e74c3c', spokes: 8 }
  }[car.wheels] || { rim: '#bbbbbb', spokes: 0 }

  const Wheel = ({ cx }) => (
    <g>
      <circle cx={cx} cy="110" r="22" fill="#111" />
      <circle cx={cx} cy="110" r="12" fill={wheelStyle.rim} />
      {Array.from({ length: wheelStyle.spokes }).map((_, i) => {
        const angle = (i * 2 * Math.PI) / wheelStyle.spokes
        return (
          <line
            key={i}
            x1={cx}
            y1="110"
            x2={cx + Math.cos(angle) * 12}
            y2={110 + Math.sin(angle) * 12}
            stroke="#111"
            strokeWidth="2"
          />
        )
      })}
    </g>
  )

  return (
    <svg viewBox="0 0 360 140" width="100%" style={{ maxWidth: 420 }}>
      {roofs[car.roof]}
      {/* windows / seats peek through */}
      <rect x="140" y="55" width="80" height="18" fill={seats} />
      {/* car body */}
      <path d="M30 70 H330 Q345 70 345 90 V105 H30 Q20 105 20 90 V80 Q20 70 30 70 Z" fill={body} />
      <Wheel cx={90} />
      <Wheel cx={270} />
    </svg>
  )
}

export default CarPreview
