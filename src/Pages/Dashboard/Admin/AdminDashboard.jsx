import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GiLaurelCrown } from "react-icons/gi";
import { MdApartment } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import DashboardCharts from "./DashboardCharts";
import StudentDashboard from "./StudentDashboard";
import DefaulterTable from "./DefaulterTable";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Students",
      value: "50055",
      icon: <FaGraduationCap className="text-3xl text-blue-500" />,
    },
    {
      title: "Awards",
      value: "50+",
      icon: <GiLaurelCrown className="text-3xl text-yellow-500" />,
    },
    {
      title: "Department",
      value: "30+",
      icon: <MdApartment className="text-3xl text-green-500" />,
    },
    {
      title: "Revenue",
      value: "$505",
      icon: <FaDollarSign className="text-3xl text-orange-500" />,
    },
  ];
  return (
    <>
      <div className="bg-gray-50 min-h-screen p-2">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg sm:text-xl font-semibold">Welcome Admin!</h1>
          <p className="text-sm sm:text-base">
            Home / <span className="text-gray-700">Admin</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm"
            >
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-xl font-bold">{item.value}</p>
              </div>
              <div className="ml-4">{item.icon}</div>
            </div>
          ))}
        </div>
      <DashboardCharts />
      <StudentDashboard/>
      <DefaulterTable/>
      </div>

    </>
  );
}
