'use client'

export default function InsightsSection({ results }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 mb-12">
      {/* Strengths */}
      <div className="card space-y-4">
        <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2">
          <span>⭐</span> Your Strengths
        </h3>
        <div className="space-y-3">
          {results.strengths && results.strengths.length > 0 ? (
            results.strengths.map((strength, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
              >
                <span className="text-emerald-400 font-bold">✓</span>
                <p className="text-slate-50 text-sm leading-relaxed">{strength}</p>
              </div>
            ))
          ) : (
            <p className="text-slate-400 text-sm">No strengths identified yet.</p>
          )}
        </div>
      </div>

      {/* Weak Areas */}
      <div className="card space-y-4">
        <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2">
          <span>⚠️</span> Areas for Improvement
        </h3>
        <div className="space-y-3">
          {results.weak_areas && results.weak_areas.length > 0 ? (
            results.weak_areas.map((weakness, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20"
              >
                <span className="text-amber-400 font-bold">!</span>
                <p className="text-slate-50 text-sm leading-relaxed">{weakness}</p>
              </div>
            ))
          ) : (
            <p className="text-slate-400 text-sm">No weak areas identified.</p>
          )}
        </div>
      </div>

      {/* Score Analysis */}
      <div className="lg:col-span-2 card space-y-4">
        <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2">
          <span>📊</span> Score Analysis
        </h3>
        <p className="text-slate-50 leading-relaxed">{results.score_analysis}</p>
      </div>
    </div>
  )
}
