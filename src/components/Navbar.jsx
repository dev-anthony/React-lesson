import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, BarChart2, Clock, Settings, LogOut } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
  { name: 'Reports', path: '/reports', icon: <BarChart2 size={20} /> },
  { name: 'History', path: '/history', icon: <Clock size={20} /> },
  { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
];

const Navbar = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  };

  return (
    <aside className="w-64 bg-black text-white p-4 space-y-6 min-h-screen">
      <h1 className="text-2xl font-bold">ExpenseTrackr</h1>
      <nav className="space-y-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-gray-800 ${isActive ? 'bg-gray-900' : ''}`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-2 rounded bg-red-600 hover:bg-red-700 mt-10"
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
};

export default Navbar;
