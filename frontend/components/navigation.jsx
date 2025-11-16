'use client'

export default function Navigation({ currentPage, onNavigate }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-950/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
            <span className="text-xl font-bold text-slate-950">📊</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-slate-50">EduPredict</h1>
            <p className="text-xs text-slate-400">Score Prediction AI</p>
          </div>
        </div>

        <div className="flex gap-2 sm:gap-4">
          <button
            onClick={() => onNavigate('home')}
            className={`px-3 py-2 rounded-lg font-medium transition-all ${
              currentPage === 'home'
                ? 'bg-blue-500 text-slate-950'
                : 'text-slate-400 hover:text-slate-50'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('predict')}
            className={`px-3 py-2 rounded-lg font-medium transition-all ${
              currentPage === 'predict'
                ? 'bg-blue-500 text-slate-950'
                : 'text-slate-400 hover:text-slate-50'
            }`}
          >
            Predict
          </button>
        </div>
      </div>
    </nav>
  )
}
