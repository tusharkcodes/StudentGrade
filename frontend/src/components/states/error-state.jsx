export default function ErrorState({ error }) {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full card space-y-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">❌</div>
          <h2 className="text-2xl font-bold text-slate-50">Error</h2>
        </div>
        <p className="text-slate-400">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="btn-primary w-full"
        >
          Try Again
        </button>
      </div>
    </main>
  )
}
