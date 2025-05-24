// src/pages/Settings.jsx
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Settings() {
  const { isDark, setIsDark } = useContext(ThemeContext)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
        <span className="text-gray-900 dark:text-gray-100">🌙 Dark Mode</span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isDark}
            onChange={toggleDarkMode}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 relative">
            <div className="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-full" />
          </div>
        </label>
      </div>
    </div>
  )
}

