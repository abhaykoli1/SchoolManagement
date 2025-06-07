import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BsThreeDotsVertical } from "react-icons/bs";

const overviewData = [
  { name: "Jan", Teacher: 45, Student: 30 },
  { name: "Feb", Teacher: 60, Student: 50 },
  { name: "Mar", Teacher: 78, Student: 60 },
  { name: "Apr", Teacher: 62, Student: 32 },
  { name: "May", Teacher: 47, Student: 35 },
  { name: "Jun", Teacher: 43, Student: 58 },
  { name: "Jul", Teacher: 28, Student: 26 },
];

const studentData = [
  { name: "Jan", Girls: 450, Boys: 300 },
  { name: "Feb", Girls: 600, Boys: 500 },
  { name: "Mar", Girls: 700, Boys: 520 },
  { name: "Apr", Girls: 580, Boys: 500 },
  { name: "May", Girls: 500, Boys: 460 },
  { name: "Jun", Girls: 400, Boys: 300 },
  { name: "Jul", Girls: 450, Boys: 420 },
  { name: "Aug", Girls: 600, Boys: 500 },
  { name: "Sep", Girls: 550, Boys: 460 },
  { name: "Oct", Girls: 480, Boys: 300 },
  { name: "Nov", Girls: 400, Boys: 350 },
  { name: "Dec", Girls: 480, Boys: 420 },
];

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
      {/* Line Chart */}
      <div className="bg-white rounded-xl p-4 shadow-sm relative w-full">
        <button className="absolute top-3 right-3 cursor-pointer">
          <BsThreeDotsVertical size={25} className="bg-gray-200 p-1 rounded" />
        </button>

        <h2 className="text-md font-semibold mb-5">Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={overviewData}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Teacher"
              stroke="#6366F1"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="Student"
              stroke="#06B6D4"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-xl p-4 shadow-sm relative w-full">
        <button className="absolute top-3 right-3 cursor-pointer">
          <BsThreeDotsVertical size={25} className="bg-gray-200 p-1 rounded" />
        </button>

        <h2 className="text-md font-semibold mb-5">Number of Students</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={studentData}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Girls" fill="#06B6D4" />
            <Bar dataKey="Boys" fill="#6366F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
