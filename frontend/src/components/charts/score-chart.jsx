import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ScoreChart({ score, previousScore }) {
  const data = [
    {
      name: 'Score',
      'Previous': previousScore,
      'Predicted': score,
    }
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="name" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" domain={[0, 100]} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#f1f5f9'
          }}
        />
        <Legend wrapperStyle={{ color: '#94a3b8' }} />
        <Bar dataKey="Previous" fill="#6b7280" />
        <Bar dataKey="Predicted" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  )
}
