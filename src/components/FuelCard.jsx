// src/components/FuelCard.jsx
import React from 'react'

const FuelCard = ({ station }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md transition-transform transform hover:scale-[1.02] hover:shadow-lg duration-200 w-full max-w-md mx-auto mb-4">


      <div className="flex justify-between items-center mb-2">
        <span className="text-2xl">🚗</span>
        <h2 className="text-lg font-bold">{station.name}</h2>
      </div>

      <div className="text-gray-800 dark:text-gray-100 mb-1">
  ⛽ <span className="font-semibold">${station.pricePerLiter} / liter</span>
      </div>

      <div className="text-sm text-gray-600 mb-1">
        📍 {station.address}, {station.city}
      </div>

      <div className="text-sm text-gray-600">
        🕒 {station.hours}
      </div>
    </div>
  )
}

export default FuelCard
