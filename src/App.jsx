// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout' // 🧱 Layout wrapper with Navbar
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Settings from './pages/Settings'
import StationDetails from './pages/StationDetails'

export default function App() {
  return (
    <Routes>
      {/* Wrap all main routes in Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/station/:id" element={<StationDetails />} /> {/* <-- ✅ wrapped now */}
      </Route>
    </Routes>
  )
}
