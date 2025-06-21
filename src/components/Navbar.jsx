
// import { NavLink, useNavigate } from 'react-router-dom';
// import { Home, BarChart2, Clock, Settings, LogOut, X} from 'lucide-react';



// const navItems = [
//   { name: 'Dashboard', path: '/dashboard', icon: <Home size={20} /> },
//   // { name: 'Expense Reports', path: '/reports', icon: <BarChart2 size={20} /> },
//   // { name: 'Expense History', path: '/history', icon: <Clock size={20} /> },
// ];

// const Navbar = ({ setUser, onClose,isMobile }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     setUser(null);
//     navigate('/');
//   };

//   return (
//     <aside className="w-64 bg-black text-white shadow-lg h-full p-4 space-y-6 min-h-screen">
//       <div>
//         <h1 className="text-2xl font-bold">ExpenseTracker</h1>
//         {isMobile && (<button onClick={onClose} className='md:hidden mb-4'>
//           <X size={20}/>
//         </button>)}
//       </div>
//       <nav className="space-y-4">
//         {navItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.path}
//             className={({ isActive }) =>
//               `flex items-center gap-3 p-2 rounded hover:bg-gray-800 ${isActive ? 'bg-gray-900' : ''}`
//             }
//           >
//             {item.icon}
//             <span>{item.name}</span>
//           </NavLink>
//         ))}
//       </nav>
//       <button
//         onClick={handleLogout}
//         className="flex items-center gap-3 p-2 rounded bg-red-600 hover:bg-red-700 mt-10"
//       >
//         <LogOut size={20} />
//         Logout
//       </button>
//     </aside>
//   );
// };

// export default Navbar;
