import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-cardBg p-5 rounded-xl shadow-chartGlow hover:scale-105 transition transform">
      <h2 className="text-gray-400">{title}</h2>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Card;
