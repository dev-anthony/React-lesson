import { useState } from "react";
import ExpenseModal from '../modals/ExpenseModal.jsx';

function ExpenseCard ({ expense,handleEdit }) {

const [showModal, setShowModal] = useState(false);



 return(
     <div onClick={(e) => {
     e.stopPropagation()
      setShowModal(true)
     }} className="flex justify-between items-center p-3 shadow bg-gray-100 rounded-lg">
        <div >
        <h4 className="font-semibold">{expense.title}</h4>
        <p className="text-sm text-gray-600">
        {expense.category} • {new Date(expense.date).toLocaleDateString()}
      </p>

      {showModal && (
        <ExpenseModal
        onSubmit={handleEdit}
        data={expense}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
    <span className="text-red-600 font-medium">${parseFloat(expense.amount).toFixed(2)}</span>
  </div>
 );

}



export default ExpenseCard;
