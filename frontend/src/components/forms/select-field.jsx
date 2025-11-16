export default function SelectField({ label, name, value, onChange, options }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-50">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="input-field cursor-pointer"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
