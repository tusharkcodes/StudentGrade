import ScoreChart from '../charts/score-chart'
import PerformanceMetrics from '../results/performance-metrics'
import InsightsSection from '../results/insights-section'

export default function ResultsPage({ results, formData, onBackHome }) {
  return (
    <main className="min-h-screen bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="section-title text-4xl sm:text-5xl">Your Results</h1>
            <p className="section-subtitle text-lg mt-2">Personalized analysis and recommendations</p>
          </div>
          <button
            onClick={onBackHome}
            className="btn-secondary"
          >
            ← Back Home
          </button>
        </div>

        {/* Main Score Card */}
        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 card space-y-6">
            <div>
              <p className="text-sm text-slate-400 uppercase tracking-wide">Predicted Score</p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-6xl font-bold text-blue-400">{results.predicted_score.toFixed(1)}</span>
                <span className="text-2xl text-slate-400">/100</span>
              </div>
            </div>

            <div className="h-64">
              <ScoreChart score={results.predicted_score} previousScore={formData.Previous_Scores} />
            </div>

            <div className="pt-4 border-t border-slate-700">
              <h3 className="font-semibold text-slate-50 mb-2">Performance Summary</h3>
              <p className="text-slate-400 leading-relaxed">{results.performance_summary}</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <PerformanceMetrics formData={formData} />
          </div>
        </div>

        {/* Insights Section */}
        <InsightsSection results={results} />

        {/* Recommendations */}
        <div className="mt-12 card space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-50 flex items-center gap-2">
              <span>💡</span> Personalized Recommendations
            </h2>
            <p className="text-slate-400 text-sm mt-2">Action steps to improve your academic performance</p>
          </div>

          <div className="space-y-3">
            {results.recommendations && results.recommendations.length > 0 ? (
              results.recommendations.map((rec, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-lg bg-slate-800/50 p-4 border border-slate-700/50"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                      <span className="text-sm font-bold text-blue-400">{i + 1}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-slate-50">{rec}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-400">No recommendations available at this time.</p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col gap-3 sm:flex-row justify-center">
          <button
            onClick={onBackHome}
            className="btn-secondary"
          >
            Back to Home
          </button>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Make Another Prediction
          </button>
        </div>
      </div>
    </main>
  )
}
