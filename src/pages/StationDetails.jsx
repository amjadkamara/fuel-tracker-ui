import React from 'react'
import { useParams } from 'react-router-dom'

export default function StationDetails() {
  const { id } = useParams()

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Station Details</h1>
      <p className="text-gray-600 dark:text-gray-300">Details for station ID: {id}</p>
    </div>
  )
}
