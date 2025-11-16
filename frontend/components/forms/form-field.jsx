export default function FormField({
  label,
  type = 'text',
  value,
  onChange,
  error,
  hint,
  min,
  max,
  step,
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-50">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        className={`input-field ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
      {hint && <p className="text-xs text-slate-400">{hint}</p>}
    </div>
  )
}
