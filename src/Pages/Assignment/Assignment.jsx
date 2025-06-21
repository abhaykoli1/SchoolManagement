import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import AddAssignment from "./AddAssignment";

export default function Assignment() {
  return (
    <>
      <AddAssignment />
      <AssignmentList />
    </>
  );
}

function AssignmentList() {
  const [search, setSearch] = useState("");

  const examData = [
    {
      id: 1,
      class: "10-A",
      subject: "Science",
      title: "Ch-5 Assignment",
      assignDate: "04/06/2025",
      dueDate: "04/06/2025",
      status: "Active",
    },
    {
      id: 2,
      class: "10-A",
      subject: "Science",
      title: "Ch-5 Assignment",
      assignDate: "04/06/2025",
      dueDate: "04/06/2025",
      status: "Active",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-3">
        <h2 className="text-[18px] font-medium uppercase">Homework List</h2>

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
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">
                S NO.
              </th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">
                Class
              </th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">
                Subject
              </th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">
                Title
              </th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">
                Assign Date
              </th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">
                Due Date
              </th>

              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">
                Status
              </th>
              <th className="py-3 px-3 text-[#666666] text-[14px] font-[500] whitespace-nowrap uppercase tracking-[-1px]">
                Action{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {examData.map((exam, index) => (
              <tr key={exam.id} className="border-b border-gray-200">
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">
                  {index + 1}
                </td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">
                  {exam.class}
                </td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">
                  {exam.subject}
                </td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">
                  {exam.title}
                </td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">
                  {exam.assignDate}
                </td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">
                  {exam.dueDate}
                </td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">
                  {exam.status}
                </td>
                <td className="py-3 px-3 text-[#262626] text-[15px] font-[500] whitespace-nowrap capitalize tracking-[-1px]">
                  <button className="px-3 hover:bg-gray-200 border rounded-xl cursor-pointer">
                    <strong className="font-[500] text-[15px] text-[#262626]">
                      Edit/
                    </strong>
                    <strong className="font-[500] text-[15px] text-[#D61414]">
                      Delete
                    </strong>
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
