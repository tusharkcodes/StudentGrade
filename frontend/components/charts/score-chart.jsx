'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

export default function ScoreChart({ score, previousScore }) {
  const data = [
    { name: 'Previous', score: previousScore, fill: '#64748b' },
    { name: 'Predicted', score: score, fill: '#3b82f6' }
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis dataKey="name" stroke="#cbd5e1" />
        <YAxis stroke="#cbd5e1" domain={[0, 100]} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#f1f5f9'
          }}
          formatter={(value) => [`${value.toFixed(1)}`, 'Score']}
        />
        <Legend />
        <Bar dataKey="score" name="Score" radius={[8, 8, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
