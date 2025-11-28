import React from "react";
import { analyticsData, chartData } from "../data/dummyData";
import Card from "../components/Card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useDispatch } from "react-redux";
import { openPopup } from "../features/chartPopup/chartPopupSlice";

const COLORS = ["#00f6ff", "#9b59b6", "#ff4d6d"];

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="space-y-8">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {analyticsData.map((item, index) => (
          <Card key={index} title={item.title} value={item.value} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="bg-cardBg p-5 rounded-xl shadow-chartGlow cursor-pointer" onClick={() => dispatch(openPopup("line"))}>
          <h2 className="text-gray-400 mb-2">Daily Users</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData.line}>
              <Line type="monotone" dataKey="users" stroke="#00f6ff" strokeWidth={3} dot={{ r: 5 }} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-cardBg p-5 rounded-xl shadow-chartGlow cursor-pointer" onClick={() => dispatch(openPopup("bar"))}>
          <h2 className="text-gray-400 mb-2">Monthly Sales</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData.bar}>
              <Bar dataKey="sales" fill="#9b59b6" />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-cardBg p-5 rounded-xl shadow-chartGlow cursor-pointer" onClick={() => dispatch(openPopup("doughnut"))}>
          <h2 className="text-gray-400 mb-2">Order Status</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={chartData.doughnut} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={5}>
                {chartData.doughnut.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
