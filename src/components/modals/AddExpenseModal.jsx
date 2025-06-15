import React, { useState } from 'react';

const AddExpenseModal = ({ onClose, onSave }) => {
  const [form, setForm] = useState({ title: '', amount: '', category: '', date: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.amount && form.category && form.date) {
      onSave({ ...form, id: Date.now() });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl space-y-4 w-96 shadow-lg">
        <h3 className="text-lg font-bold">Add Expense</h3>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} className="w-full px-3 py-2 border rounded" />
        <input type="number" name="amount" placeholder="Amount" onChange={handleChange} className="w-full px-3 py-2 border rounded" />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} className="w-full px-3 py-2 border rounded" />
        <input type="date" name="date" onChange={handleChange} className="w-full px-3 py-2 border rounded" />
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-black text-white rounded">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseModal;
