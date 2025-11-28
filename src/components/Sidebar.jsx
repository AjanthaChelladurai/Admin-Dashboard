import React from "react";
import { FaChartLine, FaBox, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-20 bg-black flex flex-col items-center py-5 space-y-6 shadow-lg">
      <div className="text-primary text-3xl font-bold">AD</div>
      <FaChartLine className="text-white text-2xl cursor-pointer hover:text-primary transition" />
      <FaBox className="text-white text-2xl cursor-pointer hover:text-primary transition" />
      <FaCog className="text-white text-2xl cursor-pointer hover:text-primary transition" />
    </div>
  );
};

export default Sidebar;
