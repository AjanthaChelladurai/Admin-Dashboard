import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closePopup } from "../features/chartPopup/chartPopupSlice";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { chartData } from "../data/dummyData";

const COLORS = ["#00f6ff", "#9b59b6", "#ff4d6d"];

const ChartPopup = () => {
  const { isOpen, chartType } = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-cardBg p-6 rounded-2xl w-11/12 md:w-2/3 shadow-chartGlow relative">
        <button className="absolute top-4 right-4 text-white text-xl" onClick={() => dispatch(closePopup())}>
          ×
        </button>

        {chartType === "line" && (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData.line}>
              <Line type="monotone" dataKey="users" stroke="#00f6ff" strokeWidth={3} dot={{ r: 5 }} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        )}

        {chartType === "bar" && (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData.bar}>
              <Bar dataKey="sales" fill="#9b59b6" />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        )}

        {chartType === "doughnut" && (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={chartData.doughnut} dataKey="value" innerRadius={50} outerRadius={100} paddingAngle={5}>
                {chartData.doughnut.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default ChartPopup;
