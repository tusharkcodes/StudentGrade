export default function Navigation({ currentPage, onNavigate }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>📚</span> EduPredict
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currentPage === 'home'
                  ? 'bg-blue-500 text-slate-950'
                  : 'text-slate-50 hover:bg-slate-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('predict')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currentPage === 'predict'
                  ? 'bg-blue-500 text-slate-950'
                  : 'text-slate-50 hover:bg-slate-800'
              }`}
            >
              Predict
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
