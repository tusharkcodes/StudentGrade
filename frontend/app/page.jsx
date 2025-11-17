'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import HomePage from '@/components/pages/home-page'
import PredictionPage from '@/components/pages/prediction-page'
import ResultsPage from '@/components/pages/results-page'

export default function App() {
  console.log("Inside the App")
  const [currentPage, setCurrentPage] = useState('home')
  const [formData, setFormData] = useState(null)
  const [results, setResults] = useState(null)

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  const handlePredictionSubmit = (data, result) => {
    setFormData(data)
    setResults(result)
    setCurrentPage('results')
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && (
        <HomePage onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'predict' && (
        <PredictionPage onSubmit={handlePredictionSubmit} />
      )}
      
      {currentPage === 'results' && results && formData && (
        <ResultsPage 
          results={results} 
          formData={formData}
          onBackHome={() => handleNavigate('home')}
        />
      )}
    </div>
  )
}
