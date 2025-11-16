'use client'

import { useState } from 'react'
import PredictionForm from '@/components/forms/prediction-form'
import LoadingState from '@/components/states/loading-state'
import ErrorState from '@/components/states/error-state'

export default function PredictionPage({ onSubmit }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (data) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to get prediction. Please try again.')
      }

      const result = await response.json()
      onSubmit(data, result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setLoading(false)
    }
  }

  if (loading) {
    return <LoadingState />
  }

  if (error) {
    return <ErrorState error={error} />
  }

  return (
    <main className="min-h-screen bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h1 className="section-title text-4xl sm:text-5xl">Predict Your Score</h1>
            <p className="section-subtitle text-lg">Fill out the form below with your academic information</p>
          </div>

          <PredictionForm onSubmit={handleSubmit} />
        </div>
      </div>
    </main>
  )
}
