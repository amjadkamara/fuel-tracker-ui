// src/pages/Home.jsx
import React from 'react'
import FuelCard from '../components/FuelCard'
import stations from '../data/fuelStations.json'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Nearby Fuel Stations</h1>


      {stations.map((station) => (
        <FuelCard key={station.id} station={station} />
      ))}
    </div>
  )
}

export default Home
