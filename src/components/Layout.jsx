
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, setIsLoggedIn }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar setIsLoggedIn={setIsLoggedIn} /> {/* pass logout */}
        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
