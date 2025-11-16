export default function ToggleField({ label, checked, onChange, description }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`mt-1 flex-shrink-0 h-6 w-11 rounded-full border-2 transition-all ${
          checked
            ? 'bg-emerald-500 border-emerald-500'
            : 'bg-slate-800 border-slate-700'
        }`}
        aria-pressed={checked}
      >
        <div
          className={`h-5 w-5 rounded-full bg-slate-50 transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      <div className="flex-grow">
        <p className="font-medium text-slate-50">{label}</p>
        {description && <p className="text-sm text-slate-400">{description}</p>}
      </div>
    </div>
  )
}
