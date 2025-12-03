import React, { useState } from "react";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-darkBg">
      <div className="bg-cardBg p-10 rounded-3xl w-96 shadow-chartGlow">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Admin Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-gray-400">Email</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-primary outline-none"
              placeholder="Enter your username"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-gray-400">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 rounded-lg bg-black text-white border border-gray-700 focus:border-primary outline-none"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary py-3 rounded-xl text-black font-bold hover:scale-105 transition transform"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
