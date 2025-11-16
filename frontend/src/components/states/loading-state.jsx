export default function LoadingState() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-slate-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-50">Analyzing Your Data</h2>
          <p className="text-slate-400">Our AI is processing your information to generate predictions...</p>
        </div>
      </div>
    </main>
  )
}
