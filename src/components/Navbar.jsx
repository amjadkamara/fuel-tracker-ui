import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {
  const { isDark, setIsDark } = useContext(ThemeContext)
  const location = useLocation()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-4 py-3 mb-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex gap-4 text-sm font-semibold">
          <Link
            to="/"
            className={`hover:underline ${
              location.pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
            }`}
          >
            Home
          </Link>
          <Link
            to="/search"
            className={`hover:underline ${
              location.pathname === '/search' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
            }`}
          >
            Search
          </Link>
          <Link
            to="/settings"
            className={`hover:underline ${
              location.pathname === '/settings' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
            }`}
          >
            Settings
          </Link>
        </div>

        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  )
}
