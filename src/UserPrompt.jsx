// src/components/UserPrompt.jsx
import React, { useState } from 'react';

export default function UserPrompt({ onSave }) {
  const [form, setForm] = useState({
    age: '',
    sex: 'male',
    height: '',
    weight: '',
    activity: 'moderate',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const parsed = {
      age: parseInt(form.age),
      sex: form.sex,
      height: parseInt(form.height),
      weight: parseFloat(form.weight),
      activity: form.activity,
    };
    localStorage.setItem('userData', JSON.stringify(parsed));
    onSave(parsed);
  };

  return (
    <div className="p-4 border rounded mb-4 bg-yellow-50">
      <h3 className="font-semibold mb-2">Enter your information</h3>
      <div className="grid gap-2">
        <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} />
        <input name="height" type="number" placeholder="Height (cm)" value={form.height} onChange={handleChange} />
        <input name="weight" type="number" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} />
        <select name="sex" value={form.sex} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select name="activity" value={form.activity} onChange={handleChange}>
          <option value="sedentary">Sedentary</option>
          <option value="light">Light Activity</option>
          <option value="moderate">Moderate</option>
          <option value="active">Active</option>
          <option value="very">Very Active</option>
        </select>
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
      </div>
    </div>
  );
}
