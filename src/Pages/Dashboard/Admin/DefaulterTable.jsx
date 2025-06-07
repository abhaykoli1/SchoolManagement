import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";

export default function DefaulterTable() {
  const todos = [
    "Call parents of Ali (Grade 7) and Fatima (Grade 8) for pending fees.",
    "Follow up with Ahmed (Grade 6) on ‘Science Fundamentals’ book - overdue by 3 days.",
    "Check homework for 12 students in Grade 8 - Science Chapter 4",
    "Call parents of Ali (Grade 7) and Fatima (Grade 8) for pending fees.",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthYearLabel = (date) =>
    date.toLocaleString("default", { month: "long", year: "numeric" });

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const getStartingDayOfWeek = () => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    return (firstDay.getDay() + 6) % 7; // convert Sunday(0) to 6
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const startDay = getStartingDayOfWeek();

  const calendarDays = Array(startDay).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <div className="mt-6 bg-gray-50  space-y-6">
      {/* Calendar and To-Do List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Calendar */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <button className="text-lg" onClick={goToPreviousMonth}>
              {"<"}
            </button>
            <h3 className="text-base font-semibold">
              {getMonthYearLabel(currentDate)}
            </h3>
            <button className="text-lg" onClick={goToNextMonth}>
              {">"}
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs sm:text-sm">
            {["MON", "TUE", "WED", "THR", "FRI", "SAT", "SUN"].map((d, i) => (
              <div key={i} className="font-medium text-gray-600">
                {d}
              </div>
            ))}
            {calendarDays.map((day, i) => (
              <div
                key={i}
                className={`h-10 flex items-center justify-center rounded-lg ${
                  day ? "bg-gray-50" : ""
                } ${[2, 4, 11, 18].includes(day) ? "bg-gray-200 font-semibold" : ""}`}
              >
                {day || ""}
              </div>
            ))}
          </div>
        </div>

        {/* To-Do List */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-base font-semibold mb-4">Today's To-Do</h2>
          <ul className="space-y-3">
            {todos.map((task, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-gray-50 rounded-md p-3 text-sm sm:text-base"
              >
                <div className="min-w-[2rem] min-h-[2rem] flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                  <FaPhone size={14} />
                </div>
                <span className="text-gray-700 break-words">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
