import { useState } from "react";
import { FaEllipsisV, FaSearch, FaCheckSquare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import profile from "../../assets/teacher/profile.svg";

const staffData = [
  {
    id: 1,
    name: "Adarsh Patel",
    subject: "Science",
    designation: "Math Teacher",
    image: profile,
  },
  {
    id: 2,
    name: "Vishal Dadika",
    subject: "Hindi",
    designation: "Hindi Teacher",
    image: profile,
  },
  {
    id: 3,
    name: "Vishal Dadika",
    subject: "English",
    designation: "Hindi Teacher",
    image: "",
    success: true,
  },
];

export default function ExpertStaffList() {
  const [search, setSearch] = useState("");

  const filteredData = staffData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-3">
        <h2 className="text-sm font-semibold">Expert Staff List</h2>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-md w-full sm:w-auto">
            <FaSearch className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none text-sm bg-transparent flex-1"
            />
          </div>
        </div>
      </div>

      {/* Responsive Table */}

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 overflow-x-auto">
        <table className="w-full bg-white rounded-md text-sm">
          <thead>
            <tr className="bg-gray-100 text-xs text-left text-gray-600">
              <th className="py-2 px-3 whitespace-nowrap">S NO.</th>
              <th className="py-2 px-3 whitespace-nowrap">IMAGE</th>
              <th className="py-2 px-3 whitespace-nowrap">NAME</th>
              <th className="py-2 px-3 whitespace-nowrap">SUBJECT</th>
              <th className="py-2 px-3 whitespace-nowrap">DESIGNATION</th>
              <th className="py-2 px-3 whitespace-nowrap">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((staff, index) => (
                <tr key={staff.id} className="border-b">
                  <td className="py-2 px-3 whitespace-nowrap">{index + 1}</td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    {staff.image ? (
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center text-white text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5.121 17.804A7.974 7.974 0 0112 15c1.66 0 3.19.51 4.438 1.377M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    )}
                  </td>
                  <td className="py-2 px-3 whitespace-nowrap">{staff.name}</td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    {staff.subject}
                  </td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    {staff.designation}
                  </td>
                  <td className="py-2 px-3 whitespace-nowrap">
                    <button className="px-3 hover:bg-gray-200 border rounded-xl cursor-pointer">
                      <BsThreeDots className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 px-3 text-center text-gray-500">
                  No matching staff found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
