import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
// import Reports from './components/Reports.jsx';
// import History from './components/History.jsx';


const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
 
 useEffect(()=>{
    const user =  JSON.parse(localStorage.getItem("user"));
    if(user){
      setUser(user)
    }
  }, [])
  
  // if (!user) return <Login onLogin={setUser} />
  // user ? (<Login type='login' onLogin={setUser}/>) : (<Login type='signup' onLogin={setUser}/>);

  return (
  <>
   
        
      {/* {user ? (<Login type='login' onLogin={setUser}/>) : (<Login type='signup' onLogin={setUser}/>)} */}
      {/* <Navbar setUser={setUser} /> */}
       <div className='h-full bg-gray-50'>
         <Routes >
           {user ? (<Route path='/' element={<Login type="login"/>} />) : (<Route path='/' element={<Login type="signup"/>} />)}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/reports" element={<Reports />} />
          <Route path="/history" element={<History />} /> */}
        </Routes>
       </div>
      </>
   
  );
};

export default App;
