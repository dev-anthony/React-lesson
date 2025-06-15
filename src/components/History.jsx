import React from 'react';
const History = () => {
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">All Expenses</h2>
      {expenses.map((e) => (
        <div key={e.id} className="bg-white p-4 rounded shadow flex justify-between">
          <div>
            <strong>{e.title}</strong><br />
            <span className="text-sm">{e.category} - {e.date}</span>
          </div>
          <span className="text-red-600 font-bold">${e.amount}</span>
        </div>
      ))}
    </div>
  );
};
export default History;