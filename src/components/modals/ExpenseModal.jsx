import { useState } from 'react';


function ExpenseModal ({onClose,onSubmit,data}){
  const [form, setForm] = useState(data || {title:'', amount: '', category: '', date:''});

  const handleTitleChange = (e) => {
   
     setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleAmountChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleCategoryChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleDateChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (form.title && form.amount && form.category && form.date) {
     onSubmit(form)
    }else{
        const err = document.getElementById("err")
        err.style.display = "block";
            setTimeout(()=>{
                err.style.display = "none";
            }, 2000);
            // console.log(err.style)
    }
      onClose();    
  };

  return (
    <div className="fixed inset-0 flex p-6 items-center justify-center z-50 " onClick={e =>  e.stopPropagation()}>
      <div className="bg-white p-6 rounded-xl space-y-4  max-w-80
       shadow-lg">
        <h3 className="text-lg font-bold text-center">{ data ? "Edit" : "Add"} Expense</h3>
        <div id="err" style={{display:"none"}} className="text-center text-red-500 mb-4 font-bold">Enter all fields please</div>
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleTitleChange} className="w-full px-3 py-2 border rounded" />
        <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleAmountChange} className="w-full px-3 py-2 border rounded" />
        <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleCategoryChange} className="w-full px-3 py-2 border rounded" />
        <input type="date" name="date" value={form.date} onChange={handleDateChange} className="w-full px-3 py-2 border rounded" />
        <div className="flex justify-between gap-2">
          <button type="button" onClick={(e) =>{
            e.stopPropagation()
             onClose()
          }} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-black text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal
