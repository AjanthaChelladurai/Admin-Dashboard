
import React from "react";

const Navbar = ({ setIsLoggedIn }) => {
  return (
    <div className="h-16 bg-black flex items-center px-6 justify-between shadow-lg">
      <h1 className="text-white font-bold text-xl">Dashboard</h1>

      <button
        onClick={() => setIsLoggedIn(false)}
        className="bg-gradient-to-r from-primary to-secondary py-1 px-4 rounded-lg text-black font-bold hover:scale-105 transition transform"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
