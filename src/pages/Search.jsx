// src/pages/Search.jsx
import React, { useState } from 'react'
import stations from '../data/fuelStations.json'
import FuelCard from '../components/FuelCard'

export default function Search() {
  const [city, setCity] = useState('')
  const [sortBy, setSortBy] = useState('priceAsc')

  const filteredStations = stations
    .filter((station) =>
      station.city.toLowerCase().includes(city.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'priceAsc':
          return a.pricePerLiter - b.pricePerLiter
        case 'priceDesc':
          return b.pricePerLiter - a.pricePerLiter
        case 'nameAsc':
          return a.name.localeCompare(b.name)
        case 'nameDesc':
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Search Fuel Stations</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 rounded border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
        >
          <option value="priceAsc">Price (low to high)</option>
          <option value="priceDesc">Price (high to low)</option>
          <option value="nameAsc">Name (A–Z)</option>
          <option value="nameDesc">Name (Z–A)</option>
        </select>
      </div>

      {filteredStations.map((station) => (
        <FuelCard key={station.id} station={station} />
      ))}
    </div>
  )
}
