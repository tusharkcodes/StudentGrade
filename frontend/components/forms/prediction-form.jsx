'use client'

import { useState } from 'react'
import FormField from '@/components/forms/form-field'
import SelectField from '@/components/forms/select-field'
import ToggleField from '@/components/forms/toggle-field'

const initialData = {
  Hours_Studied: 0,
  Attendance: 0,
  Access_to_Resources: 'Medium',
  Sleep_Hours: 0,
  Previous_Scores: 0,
  Motivation_Level: 'Medium',
  Tutoring_Sessions: 0,
  Teacher_Quality: 'Medium',
  Learning_Disabilities_Yes: 0,
  School_Type_Public: 0,
  Internet_Access_Yes: 1,
  Extracurricular_Activities_Yes: 0,
}

export default function PredictionForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (formData.Hours_Studied < 0 || formData.Hours_Studied > 24) {
      newErrors.Hours_Studied = 'Hours studied must be between 0-24'
    }
    if (formData.Attendance < 0 || formData.Attendance > 100) {
      newErrors.Attendance = 'Attendance must be between 0-100%'
    }
    if (formData.Sleep_Hours < 0 || formData.Sleep_Hours > 24) {
      newErrors.Sleep_Hours = 'Sleep hours must be between 0-24'
    }
    if (formData.Previous_Scores < 0 || formData.Previous_Scores > 100) {
      newErrors.Previous_Scores = 'Previous score must be between 0-100'
    }
    if (formData.Tutoring_Sessions < 0) {
      newErrors.Tutoring_Sessions = 'Tutoring sessions cannot be negative'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-8">
      {/* Study & Academic Factors */}
      <fieldset className="space-y-6 pb-6 border-b border-slate-700">
        <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2">
          <span>📚</span> Study & Academic Factors
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Hours Studied"
            type="number"
            value={formData.Hours_Studied}
            onChange={(e) => handleChange('Hours_Studied', Number(e.target.value))}
            error={errors.Hours_Studied}
            min={0}
            max={24}
            hint="Hours per week"
          />
          <FormField
            label="Attendance (%)"
            type="number"
            value={formData.Attendance}
            onChange={(e) => handleChange('Attendance', Number(e.target.value))}
            error={errors.Attendance}
            min={0}
            max={100}
            hint="Class attendance percentage"
          />
          <FormField
            label="Previous Scores"
            type="number"
            value={formData.Previous_Scores}
            onChange={(e) => handleChange('Previous_Scores', Number(e.target.value))}
            error={errors.Previous_Scores}
            min={0}
            max={100}
            hint="Your previous exam score"
          />
          <FormField
            label="Tutoring Sessions"
            type="number"
            value={formData.Tutoring_Sessions}
            onChange={(e) => handleChange('Tutoring_Sessions', Number(e.target.value))}
            error={errors.Tutoring_Sessions}
            min={0}
            hint="Number per month"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <SelectField
            label="Access to Resources"
            value={formData.Access_to_Resources}
            onChange={(e) => handleChange('Access_to_Resources', e.target.value)}
            options={['Low', 'Medium', 'High']}
          />
          <SelectField
            label="Motivation Level"
            value={formData.Motivation_Level}
            onChange={(e) => handleChange('Motivation_Level', e.target.value)}
            options={['Low', 'Medium', 'High']}
          />
          <SelectField
            label="Teacher Quality"
            value={formData.Teacher_Quality}
            onChange={(e) => handleChange('Teacher_Quality', e.target.value)}
            options={['Low', 'Medium', 'High']}
          />
        </div>
      </fieldset>

      {/* Health & Wellness */}
      <fieldset className="space-y-6 pb-6 border-b border-slate-700">
        <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2">
          <span>💤</span> Health & Wellness
        </h3>
        <FormField
          label="Sleep Hours"
          type="number"
          value={formData.Sleep_Hours}
          onChange={(e) => handleChange('Sleep_Hours', Number(e.target.value))}
          error={errors.Sleep_Hours}
          min={0}
          max={24}
          hint="Average hours of sleep per night"
        />
      </fieldset>

      {/* Personal Factors */}
      <fieldset className="space-y-6 pb-6 border-b border-slate-700">
        <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2">
          <span>👤</span> Personal Factors
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <ToggleField
            label="Learning Disabilities"
            checked={formData.Learning_Disabilities_Yes === 1}
            onChange={(checked) => handleChange('Learning_Disabilities_Yes', checked ? 1 : 0)}
            description="Do you have any learning disabilities?"
          />
          <ToggleField
            label="Internet Access"
            checked={formData.Internet_Access_Yes === 1}
            onChange={(checked) => handleChange('Internet_Access_Yes', checked ? 1 : 0)}
            description="Do you have internet access?"
          />
          <ToggleField
            label="Extracurricular Activities"
            checked={formData.Extracurricular_Activities_Yes === 1}
            onChange={(checked) => handleChange('Extracurricular_Activities_Yes', checked ? 1 : 0)}
            description="Do you participate in extracurricular activities?"
          />
          <SelectField
            label="School Type"
            value={formData.School_Type_Public === 1 ? 'Public' : 'Private'}
            onChange={(e) => handleChange('School_Type_Public', e.target.value === 'Public' ? 1 : 0)}
            options={['Public', 'Private']}
          />
        </div>
      </fieldset>

      {/* Submit Button */}
      <div className="flex gap-4">
        <button type="submit" className="btn-primary text-lg px-8 py-3 flex-grow">
          Predict My Score
        </button>
      </div>
    </form>
  )
}
