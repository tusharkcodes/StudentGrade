import { useState } from 'react'
import Navigation from './components/navigation'
import HomePage from './components/pages/home-page'
import PredictionPage from './components/pages/prediction-page'
import ResultsPage from './components/pages/results-page'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [results, setResults] = useState(null)
  const [formData, setFormData] = useState(null)

  const handlePredictionSubmit = (data, predictionResults) => {
    setFormData(data)
    setResults(predictionResults)
    setCurrentPage('results')
  }

  const handleBackHome = () => {
    setCurrentPage('home')
    setResults(null)
    setFormData(null)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === 'predict' && <PredictionPage onSubmit={handlePredictionSubmit} />}
      {currentPage === 'results' && results && (
        <ResultsPage 
          results={results} 
          formData={formData} 
          onBackHome={handleBackHome}
        />
      )}
    </div>
  )
}

export default App
