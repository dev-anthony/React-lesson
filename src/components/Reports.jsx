// import { useEffect, useState } from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#8AFFC1', '#FF9F40'];

// const Reports = () => {
//   const [data, setData] = useState(()=>{
//     const saved = localStorage.getItem('expenses');
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     const raw = JSON.parse(localStorage.getItem('expenses')) || [];
//     const grouped = raw.reduce((acc, curr) => {
//       acc[curr.category] = (acc[curr.category] || 0) + Number(curr.amount);
//       return acc;
//     }, {});
//     setData(Object.entries(grouped).map(([name, value]) => ({ name, value })));
//     localStorage.setItem('expenses', JSON.stringify(data))
//   }, []);

//   return (
//     <>
//     <h2 className="text-2xl font-bold mb-4 text-center">Expenses Statistics</h2>
    
//       {data.length === 0 ? <p>No data</p> : (
//         <div className="h-full rounded-lg flex items-center justify-center">
//         <ResponsiveContainer width="100%" height={250}>
//           <PieChart>
//             <Pie data={data} dataKey="value" outerRadius={100} label>
//               {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//         </div>
//       )}
//     </>
//   );
// };

// export default Reports;
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#8AFFC1', '#FF9F40', '#000000'];

const Reports = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const updateChartData = () => {
      const raw = JSON.parse(localStorage.getItem('expenses')) || [];
      const grouped = raw.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + Number(curr.amount);
        return acc;
      }, {});
      const chartData = Object.entries(grouped).map(([name, value]) => ({ name, value }));
      setData(chartData);
    };

    // Load initial data
    updateChartData();

    // Listen for custom event when expenses are updated
    window.addEventListener('expensesUpdated', updateChartData);

    // Cleanup
    return () => {
      window.removeEventListener('expensesUpdated', updateChartData);
    };
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold mb-2 text-center">Expenses Statistics</h2>

      {data.length === 0 ? (
        <p className="text-center">No data</p>
      ) : (
        <div className="h-full rounded-lg flex items-center p-4 justify-center">
          <ResponsiveContainer width="100%" height={230}>
            <PieChart>
              <Pie data={data} dataKey="value" outerRadius={100} label>
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default Reports;
