export default function ToggleField({ label, name, checked, onChange, description }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-slate-700 bg-slate-800/50">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="mt-1 h-5 w-5 rounded border-slate-600 cursor-pointer"
      />
      <div className="flex-1">
        <label className="block text-sm font-semibold text-slate-50 cursor-pointer">
          {label}
        </label>
        {description && (
          <p className="text-xs text-slate-400 mt-1">{description}</p>
        )}
      </div>
    </div>
  )
}
