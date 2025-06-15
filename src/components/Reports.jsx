import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#8AFFC1', '#FF9F40'];

const Reports = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem('expenses')) || [];
    const grouped = raw.reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + Number(curr.amount);
      return acc;
    }, {});
    setData(Object.entries(grouped).map(([name, value]) => ({ name, value })));
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Spending by Category</h2>
      {data.length === 0 ? <p>No data</p> : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" outerRadius={100} label>
              {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Reports;
