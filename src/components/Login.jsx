import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('username', username);
      onLogin(username);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-yellow-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4 w-80">
        <h2 className="text-xl font-semibold text-center">Login to ExpenseTrackr</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="w-full bg-black text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
