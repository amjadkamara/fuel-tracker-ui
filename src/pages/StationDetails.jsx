import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import stations from '../data/fuelStations.json'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'




// Helper to force map to resize correctly
function MapResizeHandler() {
  const map = useMap()

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize()
    }, 100) // slight delay helps with layout
  }, [map])

  return null
}

export default function StationDetails() {
  const { id } = useParams()
  const station = stations.find((s) => s.id === parseInt(id))

  const mapWrapperRef = useRef(null)

  if (!station) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Station not found</h1>
      </div>
    )
  }

  return (
    <div className="p-4">
      {/* Info Card */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md w-full max-w-md mx-auto mb-4">
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

        <div className="text-sm text-gray-600 mb-1">
          🕒 {station.hours}
        </div>

        
      </div>

      {/* Map Card */}
      {station.latitude && station.longitude && (
  <div
    ref={mapWrapperRef}
    className="w-full max-w-md mx-auto h-64 rounded-2xl overflow-hidden shadow-md"
  >
    <MapContainer
      center={[station.latitude, station.longitude]}
      zoom={13}
      scrollWheelZoom={false}
      whenCreated={(mapInstance) => {
        setTimeout(() => {
          mapInstance.invalidateSize()
        }, 200)
      }}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[station.latitude, station.longitude]}>
        <Popup>
          {station.name} <br /> {station.address}, {station.city}
        </Popup>
      </Marker>
    </MapContainer>
        </div>
      )}
    </div>
  )
}

