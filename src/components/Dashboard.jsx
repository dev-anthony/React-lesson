import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import AddExpenseModal from './modals/AddExpenseModal';
import ExpenseCard from './partials/ExpenseCard';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-xl shadow col-span-1">
        <h2 className="text-lg font-semibold">Total Spent</h2>
        <p className="text-3xl text-red-600 font-bold">${total.toFixed(2)}</p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 flex items-center gap-2 px-4 py-2 bg-black text-white rounded"
        >
          <Plus size={18} /> Add Expense
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow col-span-2">
        <h2 className="text-lg font-semibold mb-2">Recent Expenses</h2>
        <div className="space-y-2 max-h-72 overflow-y-auto">
          {expenses.length === 0 ? (
            <p className="text-gray-500">No expenses yet</p>
          ) : (
            expenses.slice(0, 5).map((e) => <ExpenseCard key={e.id} expense={e} />)
          )}
        </div>
      </div>

      {showModal && (
        <AddExpenseModal
          onClose={() => setShowModal(false)}
          onSave={handleAddExpense}
        />
      )}
    </div>
  );
};

export default Dashboard;
