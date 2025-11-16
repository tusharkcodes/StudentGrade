export default function SelectField({ label, value, onChange, options }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-50">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="input-field appearance-none bg-slate-800 pr-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23cbd5e1' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
          backgroundPosition: 'right 0.5rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.5em 1.5em',
        }}
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
