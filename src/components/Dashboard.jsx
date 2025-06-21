import  { useEffect, useState } from 'react';
import { Plus, LogOut } from 'lucide-react';
// import AddExpenseModal from './modals/AddExpenseModal';
import ExpenseCard from './partials/ExpenseCard';
import ExpenseModal from './modals/ExpenseModal';
import { useNavigate } from "react-router-dom";
import Reports from '../components/Reports.jsx';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem('user'));
 useEffect(()=>{
    const user =  JSON.parse(localStorage.getItem("user"));
    if(user){
      setUser(user)
    }
  }, [])
  const [showModal, setShowModal] = useState(false);
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });
    const [total, setTotal] = useState(0)

  useEffect(() => {
     const newTotal = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
     setTotal(newTotal)
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);


  // const handleAddExpense = (newExpense) => {
  //   setExpenses([{...newExpense, id: Date.now}, ...expenses]);
  // };
  const handleAddExpense = (newExpense) => {
  const updatedExpenses = [{ ...newExpense, id: Date.now() }, ...expenses];
  setExpenses(updatedExpenses);

  // Update localStorage and notify other components
  localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  window.dispatchEvent(new Event('expensesUpdated'));
};


  // const handleEditExpense = (expense) => {

  //   const updatedExpenses = {...expenses.find(item => item.id == expense.id ),...expense}
  //   const newData = [...expenses.filter(k => k.id !== expense.id),updatedExpenses]
  //   console.log({newData})
  //   setExpenses(newData) 
  //   // setExpenses((prev)=> prev.map((item) => (item.id === expense.id ? expense: item)))
  // }
  const handleEditExpense = (expense) => {
  const updatedExpenses = expenses.map((item) =>
    item.id === expense.id ? { ...item, ...expense } : item
  );

  setExpenses(updatedExpenses);

  // Update localStorage and notify chart
  localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  window.dispatchEvent(new Event('expensesUpdated'));
};

 
  const handleLogout = () => {
   navigate('/');
 };

 

  return (
<>
  <div className="flex h-full bg-gray-50 font-sans">

    <main className='flex-1 bg-purple-50 p-6'>
        <div className='flex justify-between mb-6'>
          <h1 className=' font-bold text-2xl'>Welcome, {user.name}</h1>
          <button
        onClick={handleLogout}
       className="flex items-center gap-3 p-1.5 text-0.5xl rounded text-white bg-red-500 hover:bg-red-600">
        <LogOut size={15} />
        Logout
        </button>
        </div>
      { /* cards */}
      <div className='flex flex-col lg:grid lg:grid-cols-3 lg:gap-4 mb-4'>
        { /* balance card */}
      <div className="bg-white p-6 rounded-lg shadow lg:mb-0 mb-4">
          <h2 className="text-2xl font-bold">Total Spent</h2>
        <p className="text-3xl text-red-600 font-bold">${total.toFixed(2)}</p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 flex items-center gap-2 px-4 py-2 bg-black text-white rounded"
        >
          <Plus size={18} /> Add Expense
        </button>
      </div>
{ /* Recent reports */}
      <div className='col-span-2 bg-white p-4 rounded-lg shadow lg:mb-0 mb-4'>
        <Reports/>
      </div>
    
      </div>
        { /* Recent Expenses */}
      <div className="bg-white p-6 rounded-lg shadow gap-3 ">
        <h2 className="text-lg font-semibold mb-2">Recent Expenses</h2>
        <div className="space-y-2">
          {!expenses || expenses?.length === 0 ? (
            <p className="text-gray-500">You haven't added any expense.</p>
          ) : (
            expenses.map((e) => <ExpenseCard key={e.id} expense={e} handleEdit={handleEditExpense}/>)
          )}
        </div>
      </div>
      

      {showModal && (
        <ExpenseModal 
          onClose={() => setShowModal(false)}
          onSubmit={handleAddExpense}
        />
      )}
   </main>
  </div>
</>
  );
}

export default Dashboard;
