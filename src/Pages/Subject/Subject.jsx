import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import AddSubject from "./AddSubject";

export default function ClassSection() {
  return (
    <>
      <AddSubject />
      <SubjectList />
    </>
  );
}

function SubjectList() {
  const [search, setSearch] = useState("");

  const examData = [
    {
      id: 1,
      title: "Robert Jackson",
      category: "Teacher",
      overview:"Title name whichever should be ",
    },
    {
      id: 2,
      title: "Michal Robert ",
      category: "Student ",
      overview:"Title name whichever should be ",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-3">
        <h2 className="text-sm font-semibold">Subject List</h2>

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
              <th className="py-2 px-3 whitespace-nowrap">Title</th>
              <th className="py-2 px-3 whitespace-nowrap">Category</th>
              <th className="py-2 px-3 whitespace-nowrap">Overview </th>
              <th className="py-2 px-3 whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {examData.map((exam, index) => (
              <tr key={exam.id} className="border-b border-gray-200">
                <td className="py-2 px-3 whitespace-nowrap">{index + 1}</td>
                <td className="py-2 px-3 whitespace-nowrap">{exam.title}</td>
                <td className="py-2 px-3 whitespace-nowrap">
                  {exam.category}
                </td>
                <td className="py-2 px-3 whitespace-nowrap">{exam.overview}</td>
                <td className="py-2 px-3 whitespace-nowrap">
                  <button className="px-3 hover:bg-gray-200 border rounded-xl cursor-pointer">
                    <BsThreeDots className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
