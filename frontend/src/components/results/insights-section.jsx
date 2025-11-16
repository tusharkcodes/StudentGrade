export default function InsightsSection({ results }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 mb-12">
      {/* Strengths */}
      <div className="card space-y-4">
        <h2 className="text-2xl font-bold text-slate-50 flex items-center gap-2">
          <span>✅</span> Your Strengths
        </h2>
        <div className="space-y-2">
          {results.strengths && results.strengths.length > 0 ? (
            results.strengths.map((strength, i) => (
              <div key={i} className="badge-success">
                {strength}
              </div>
            ))
          ) : (
            <p className="text-slate-400 text-sm">No specific strengths identified.</p>
          )}
        </div>
      </div>

      {/* Weaknesses */}
      <div className="card space-y-4">
        <h2 className="text-2xl font-bold text-slate-50 flex items-center gap-2">
          <span>⚠️</span> Areas for Improvement
        </h2>
        <div className="space-y-2">
          {results.weaknesses && results.weaknesses.length > 0 ? (
            results.weaknesses.map((weakness, i) => (
              <div key={i} className="badge-warning">
                {weakness}
              </div>
            ))
          ) : (
            <p className="text-slate-400 text-sm">No major areas for improvement identified.</p>
          )}
        </div>
      </div>
    </div>
  )
}
