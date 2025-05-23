import React from 'react'

export default function About() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">About FuelTracker</h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        FuelTracker is a simple app that helps users find nearby fuel stations,
        compare prices, and view station details including addresses and hours.
        Built with React and Tailwind CSS, it's optimized for mobile and desktop.
      </p>
    </div>
  )
}
