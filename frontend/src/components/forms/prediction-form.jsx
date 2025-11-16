import { useState } from 'react'
import FormField from './form-field'
import SelectField from './select-field'
import ToggleField from './toggle-field'

export default function PredictionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    Hours_Studied: 0,
    Attendance: 0,
    Access_to_Resources: 'No',
    Sleep_Hours: 0,
    Previous_Scores: 0,
    Motivation_Level: 'Low',
    Tutoring_Sessions: 0,
    Teacher_Quality: 'Poor',
    Learning_Disabilities_Yes: false,
    School_Type_Public: false,
    Internet_Access_Yes: false,
    Extracurricular_Activities_Yes: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : type === 'number' ? parseFloat(value) : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    const submitData = {
      Hours_Studied: formData.Hours_Studied,
      Attendance: formData.Attendance,
      Access_to_Resources: formData.Access_to_Resources === 'Yes' ? 1 : 0,
      Sleep_Hours: formData.Sleep_Hours,
      Previous_Scores: formData.Previous_Scores,
      Motivation_Level: formData.Motivation_Level === 'High' ? 2 : formData.Motivation_Level === 'Medium' ? 1 : 0,
      Tutoring_Sessions: formData.Tutoring_Sessions,
      Teacher_Quality: formData.Teacher_Quality === 'Excellent' ? 2 : formData.Teacher_Quality === 'Good' ? 1 : 0,
      Learning_Disabilities_Yes: formData.Learning_Disabilities_Yes,
      School_Type_Public: formData.School_Type_Public,
      Internet_Access_Yes: formData.Internet_Access_Yes,
      Extracurricular_Activities_Yes: formData.Extracurricular_Activities_Yes,
    }

    onSubmit(submitData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Study & Academic Section */}
      <div className="card space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Study & Academic Factors</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Hours Studied (per week)"
            type="number"
            name="Hours_Studied"
            value={formData.Hours_Studied}
            onChange={handleChange}
            min="0"
            max="168"
            required
          />
          <FormField
            label="Attendance (%)"
            type="number"
            name="Attendance"
            value={formData.Attendance}
            onChange={handleChange}
            min="0"
            max="100"
            required
          />
          <SelectField
            label="Access to Resources"
            name="Access_to_Resources"
            value={formData.Access_to_Resources}
            onChange={handleChange}
            options={['Yes', 'No']}
          />
          <FormField
            label="Previous Scores"
            type="number"
            name="Previous_Scores"
            value={formData.Previous_Scores}
            onChange={handleChange}
            min="0"
            max="100"
            required
          />
          <SelectField
            label="Motivation Level"
            name="Motivation_Level"
            value={formData.Motivation_Level}
            onChange={handleChange}
            options={['Low', 'Medium', 'High']}
          />
          <FormField
            label="Tutoring Sessions"
            type="number"
            name="Tutoring_Sessions"
            value={formData.Tutoring_Sessions}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
      </div>

      {/* Health & Wellness Section */}
      <div className="card space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Health & Wellness</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Sleep Hours (per night)"
            type="number"
            name="Sleep_Hours"
            value={formData.Sleep_Hours}
            onChange={handleChange}
            min="0"
            max="24"
            required
          />
          <SelectField
            label="Teacher Quality"
            name="Teacher_Quality"
            value={formData.Teacher_Quality}
            onChange={handleChange}
            options={['Poor', 'Good', 'Excellent']}
          />
        </div>
      </div>

      {/* Personal Factors Section */}
      <div className="card space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Personal & Environmental Factors</h2>
        <div className="space-y-4">
          <ToggleField
            label="Learning Disabilities"
            name="Learning_Disabilities_Yes"
            checked={formData.Learning_Disabilities_Yes === 1}
            onChange={handleChange}
            description="Do you have any documented learning disabilities?"
          />
          <ToggleField
            label="School Type (Public)"
            name="School_Type_Public"
            checked={formData.School_Type_Public === 1}
            onChange={handleChange}
            description="Do you attend a public school?"
          />
          <ToggleField
            label="Internet Access"
            name="Internet_Access_Yes"
            checked={formData.Internet_Access_Yes === 1}
            onChange={handleChange}
            description="Do you have reliable internet access?"
          />
          <ToggleField
            label="Extracurricular Activities"
            name="Extracurricular_Activities_Yes"
            checked={formData.Extracurricular_Activities_Yes === 1}
            onChange={handleChange}
            description="Are you involved in extracurricular activities?"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn-primary w-full py-3 text-lg">
        Predict My Score
      </button>

      {submitted && (
        <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-400">
          Submitting your data...
        </div>
      )}
    </form>
  )
}
