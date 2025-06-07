import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTrophy, FaGamepad, FaSchool } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

const starStudents = [
  {
    id: "PRE2209",
    name: "John Smith",
    marks: 1185,
    percent: "98%",
    year: 2019,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "PRE1245",
    name: "Jolie Hoskins",
    marks: 1195,
    percent: "99.5%",
    year: 2018,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "PRE1625",
    name: "Pennington Joy",
    marks: 1196,
    percent: "99.6%",
    year: 2017,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "PRE2516",
    name: "Millie Marsden",
    marks: 1187,
    percent: "98.2%",
    year: 2016,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "PRE2209",
    name: "John Smith",
    marks: 1185,
    percent: "98%",
    year: 2015,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const activities = [
  {
    icon: <FaTrophy className="text-blue-500 text-2xl" />,
    title: '1st place in "Chess"',
    subtitle: "John Doe won 1st place in 'Chess'",
    time: "1 Day ago",
  },
  {
    icon: <FaGamepad className="text-sky-500 text-2xl" />,
    title: 'Participated in "Carrom"',
    subtitle: "Justin Lee participated in 'Carrom'",
    time: "2 hours ago",
  },
  {
    icon: <FaSchool className="text-indigo-500 text-2xl" />,
    title: 'Internation conference in "St.John School"',
    subtitle: "Justin Lee attended internation conference in 'St.John School'",
    time: "2 Week ago",
  },
  {
    icon: <MdEmojiEvents className="text-cyan-500 text-2xl" />,
    title: 'Won 1st place in "Chess"',
    subtitle: "John Doe won 1st place in 'Chess'",
    time: "3 Day ago",
  },
];

export default function StudentDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Star Students */}
      <div className="bg-white rounded-xl p-4 shadow-sm relative w-full">
        <button className="absolute top-3 right-3 cursor-pointer">
          <BsThreeDotsVertical
            size={20}
            className="text-gray-400 hover:text-gray-600"
          />
        </button>
        <h2 className="text-md font-semibold mb-4">Star Students</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 font-medium">
              <tr>
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Marks</th>
                <th className="py-2 px-4">Percentage</th>
                <th className="py-2 px-4">Year</th>
              </tr>
            </thead>
            <tbody>
              {starStudents.map((student, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="py-2 px-4 text-gray-700">{student.id}</td>
                  <td className="py-2 px-4 flex text-gray-700 items-center gap-2">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    {student.name}
                  </td>
                  <td className="py-2 px-4 text-gray-700">{student.marks}</td>
                  <td className="py-2 px-4 text-gray-700">{student.percent}</td>
                  <td className="py-2 px-4 text-gray-700">{student.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Activity */}
      <div className="bg-white rounded-xl p-4 shadow-sm relative w-full">
        <button className="absolute top-3 right-3 cursor-pointer">
          <BsThreeDotsVertical
            size={20}
            className="text-gray-400 hover:text-gray-600"
          />
        </button>
        <h2 className="text-md font-semibold mb-4">Student Activity</h2>

        {/* Horizontal scroll wrapper for mobile */}
        <div className="overflow-x-auto">
          <ul className="min-w-[500px] space-y-5">
            {activities.map((activity, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">
                      {activity.title}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {activity.subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs bg-pink-100 text-gray-600 px-2 py-1 rounded whitespace-nowrap">
                  {activity.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
