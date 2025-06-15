import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Reports from './components/Reports.jsx';
import History from './components/History.jsx';
import Settings from './components/Setting.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('username'));

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="flex h-screen">
      <Navbar setUser={setUser} />
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings user={user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
