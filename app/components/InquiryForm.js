"use client";

import { useState } from 'react';

export default function InquiryForm({ title, description, fields, submitLabel, successMessage }) {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState(() => Object.fromEntries(fields.map((field) => [field.name, field.defaultValue || ''])));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card-surface p-7">
      <h2 className="mb-3 text-2xl font-semibold text-slate-900">{title}</h2>
      {description ? <p className="mb-6 text-slate-600">{description}</p> : null}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label htmlFor={field.name} className="block text-sm font-semibold text-slate-700">
              {field.label}
            </label>
            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={values[field.name]}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
                autoComplete={field.autoComplete || 'off'}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={5}
                value={values[field.name]}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
                required={field.required}
                autoComplete={field.autoComplete || 'off'}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type || 'text'}
                value={values[field.name]}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
                required={field.required}
                autoComplete={field.autoComplete || 'off'}
              />
            )}
          </div>
        ))}
        <button type="submit" className="btn-primary mt-2">
          {submitLabel}
        </button>
        {submitted ? (
          <p className="pt-2 font-semibold text-brand-700" role="status" aria-live="polite">
            {successMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
}
