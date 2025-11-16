export default function ErrorState({ error }) {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="text-6xl">⚠️</div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-50">Something Went Wrong</h2>
          <p className="text-slate-400">{error}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="btn-primary mx-auto"
        >
          Try Again
        </button>
      </div>
    </main>
  )
}
