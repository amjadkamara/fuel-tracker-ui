import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Settings from './pages/Settings'
import StationDetails from './pages/StationDetails.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/station/:id" element={<StationDetails />} />
      </Routes>
    </div>
  )
}
