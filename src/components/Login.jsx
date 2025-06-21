// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   // const [username, setUsername] = useState('');
// const [logins, setLogin] = useState({username: '', password: ''})
//  const handleChange = (e) => setLogin({ ...logins, [e.target.name]: e.target.value });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (logins.username && logins.password) {
//       localStorage.setItem('logins', logins);
//       onLogin(logins.username);
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-yellow-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4 w-80">
//         <h2 className="text-xl font-semibold text-center">Login to ExpenseTracker</h2>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           className="w-full px-4 py-2 border rounded"
//           name='username'
//           onChange={handleChange}
//         />
//          <input
//           type="text"
//           placeholder="Enter your password"
//           className="w-full px-4 py-2 border rounded"
//           name='password'
//           onChange={handleChange}
//         />
//         <button type="submit" className="w-full bg-black text-white py-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//    const handleNameChange = (e) => setUsername(e.target.value)
//    const handlepasswordChange = (e) => setPassword(e.target.value)
//     const navigate = useNavigate();

//     const handleLogin = (e) =>{
//         e.preventDefault();
//         if(username !== username && password !== password || username ==="" && password === ""){
//            document.getElementById("display").style.display = "block";
//             setTimeout(()=>{
//                 document.getElementById("display").style.display = "none";
//             }, 2000)

//         }else{
              
//                localStorage.setItem("isLoggedin", true)
//                localStorage.setItem("user", JSON.stringify({username}));
//             //    console.log(logins)
//             navigate("/dashboard")
//         }
//     }
//   return (
//    <div  className="min-h-screen flex items-center justify-center bg-gray-100 p-10" >
//     <div  className="bg-white p-6 rounded-lg shadow-lg w-full max-w-68">
//         <h2 className="text-2xl font-bold mb-4 text-center w-full">Login</h2>
//     <form className="space-y-4" onSubmit={handleLogin}>
//     <div id="display" style={{display:"none"}} className="text-center text-red-500 mb-4 font-bold">Enter all fields please</div>
//     <input type="text" placeholder="Username" name="username" className="w-full border p-2 rounded mb-3" onChange={handleNameChange} value={username} />
//     <input type="password" placeholder="Password" name="password" className="w-full border p-2 rounded mb-3" onChange={handlepasswordChange} value={password} />
//     <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded" >Login</button>
//    </form>
//     </div>
//    </div>
//   );
// }

// export default Login
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = ({type}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        if(type === 'signup'){
            if(name === "" && email === "" && password === ""){
                document.getElementById("display").style.display = "block";
            setTimeout(()=>{
                document.getElementById("display").style.display = "none";
            }, 2000)
            }else{
                localStorage.setItem("user", JSON.stringify({name, email, password}));
                type =  'login';
                setName("")
                setEmail("")
                setPassword("")
                navigate("/dashboard")
                
            }
            
        }else{
           const user =  JSON.parse(localStorage.getItem("user"));
           if(user.email !== name && user.password !== password){
            document.getElementById("display").textContent ="Invalid Credentials";
               document.getElementById("display").style.display = "block";
            setTimeout(()=>{
                document.getElementById("display").style.display = "none";
            }, 2000)
           }else{
                setEmail("")
                setPassword("")
                navigate("/dashboard");
                
           }
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-68">
        <h1 className="text-2xl font-bold mb-4 text-center w-full">{type === "signup" ? "Sign-up" : "Login"}</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
             <div id="display" style={{display:"none"}} className="text-center text-red-500 mb-4 font-bold">Enter all fields please</div>
            {type === 'signup' && (

                <input className="w-full border p-2 rounded mb-3"
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e)=> setName(e.target.value)}/>
            )}

            <input className="w-full border p-2 rounded mb-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}/>

            <input className="w-full border p-2 rounded mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
            

            <button className="w-full bg-blue-600 text-white p-2 rounded" type="submit">{type === 'login' ? 'Login' : 'Create Account'}</button>
        </form>
        </div>
    </div>
  )
}

export default Login
