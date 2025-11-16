export default function FormField({ label, ...props }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-50">
        {label}
      </label>
      <input className="input-field" {...props} />
    </div>
  )
}
