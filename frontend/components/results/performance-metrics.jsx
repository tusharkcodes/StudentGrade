'use client'

export default function PerformanceMetrics({ formData }) {
  const metrics = [
    {
      label: 'Study Hours',
      value: formData.Hours_Studied,
      max: 24,
      icon: '📚',
      color: 'bg-blue-500'
    },
    {
      label: 'Attendance',
      value: formData.Attendance,
      max: 100,
      icon: '✓',
      color: 'bg-emerald-500',
      unit: '%'
    },
    {
      label: 'Sleep Hours',
      value: formData.Sleep_Hours,
      max: 12,
      icon: '💤',
      color: 'bg-amber-500'
    },
  ]

  return (
    <div className="card space-y-6">
      <h3 className="text-lg font-bold text-slate-50">Your Metrics</h3>
      
      {metrics.map((metric, i) => (
        <div key={i} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-medium text-slate-50">
              <span>{metric.icon}</span>
              {metric.label}
            </span>
            <span className="text-lg font-bold text-blue-400">{metric.value}{metric.unit || ''}</span>
          </div>
          <div className="h-2 rounded-full bg-slate-800/50 overflow-hidden">
            <div
              className={`h-full ${metric.color} transition-all`}
              style={{ width: `${(metric.value / metric.max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
