import React from 'react';

const ExpenseCard = ({ expense }) => (
  <div className="flex justify-between items-center p-3 bg-gray-100 rounded">
    <div>
      <h4 className="font-semibold">{expense.title}</h4>
      <p className="text-sm text-gray-600">
        {expense.category} • {new Date(expense.date).toLocaleDateString()}
      </p>
    </div>
    <span className="text-red-600 font-medium">${parseFloat(expense.amount).toFixed(2)}</span>
  </div>
);

export default ExpenseCard;
