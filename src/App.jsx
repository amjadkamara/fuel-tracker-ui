import React, { useEffect, useState } from 'react'
import Home from './pages/Home'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main>
        <Home />
      </main>
    </div>
  )
}
