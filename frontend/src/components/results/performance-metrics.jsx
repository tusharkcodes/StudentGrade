export default function PerformanceMetrics({ formData }) {
  const metrics = [
    { label: 'Hours Studied', value: formData.Hours_Studied, unit: 'hrs/week' },
    { label: 'Attendance', value: formData.Attendance, unit: '%' },
    { label: 'Sleep Hours', value: formData.Sleep_Hours, unit: 'hrs/night' },
    { label: 'Previous Score', value: formData.Previous_Scores, unit: '/100' },
  ]

  return (
    <div className="card space-y-4">
      <h3 className="text-xl font-bold text-slate-50">Your Metrics</h3>
      <div className="space-y-3">
        {metrics.map((metric, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">{metric.label}</span>
              <span className="text-slate-50 font-semibold">{metric.value} {metric.unit}</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                style={{ width: `${Math.min((metric.value / 100) * 100, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
