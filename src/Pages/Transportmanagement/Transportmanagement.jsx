import { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import { BsThreeDots } from "react-icons/bs";
import AddTransportmanagement from "./AddTransportmanagement";

export default function Transportmanagement() {
  return (
    <>
      <AddTransportmanagement />
      <Transporlist />
    </>
  );
}

function Transporlist() {
  const [search, setSearch] = useState("");

  const examData = [
    {
      id: 1,
      Studentname: "saniya Khan",
      Route: "Route Name",
      Driver: "vivek",
      Vehicle: "Vehicle No",
      Timing: "10:am",
      Assigned: "Students Assigned",
      Status: "Available",
    },
    {
      id: 2,
      Studentname: "saniya Khan",
      Route: "Route Name",
      Driver: "vivek",
      Vehicle: "Vehicle No",
      Timing: "10:am",
      Assigned: "Students Assigned",
      Status: "Issued",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-3">
        <h2 className="text-[18px] font-medium uppercase">Transport  Management List</h2>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
          <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-md w-full sm:w-auto">
            <FaSearch className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none text-sm bg-transparent text-[#666666] border-0 tracking-[-1px] font-[500] flex-1 uppercase"
            />
          </div>
        </div>
      </div>

      {/* Responsive Table */}

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 overflow-x-auto">
        <table className="w-full bg-white rounded-md text-sm">
          <thead>
            <tr className="bg-[#0F216914] text-xs text-left text-gray-600">
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">S NO.</th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">Student Name</th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">Route</th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">Driver Name</th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">Vehicle No</th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">Timing</th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">Students Assigned</th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">Status</th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">Action </th>
            </tr>
          </thead>
          <tbody>
            {examData.map((exam, index) => (
              <tr key={exam.id} className="border-b border-gray-200">
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">{index + 1}</td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">{exam.Studentname}</td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">{exam.Route}</td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">{exam.Driver}</td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">{exam.Vehicle}</td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">{exam.Timing}</td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">{exam.Assigned}</td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">{exam.Status}</td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">
                  <button className="px-3 hover:bg-gray-200 border rounded-xl cursor-pointer">
                    <strong className="font-[500] text-[15px] text-[#262626]">Edit/</strong>
                    <strong className="font-[500] text-[15px] text-[#D61414]">Delete</strong>
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
