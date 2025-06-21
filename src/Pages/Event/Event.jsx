import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import AddEvent from "./AddEvent";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function Event() {
  return (
    <>
      <AddEvent />
      <EventList />
    </>
  );
}

function EventList() {
  const [search, setSearch] = useState("");

  const examData = [
    {
      id: 1,
      author: "Robert Jackson",
      comment: "Title name whichever should be ",
      response: "Title name whichever should be ",
      submitted: "Jan 30, 2024 ",
    },
    {
      id: 2,
      author: "Robert Jackson",
      comment: "Title name whichever should be ",
      response: "Title name whichever should be ",
      submitted: "Jan 30, 2024 ",
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
        <table className="custom-table">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>AUTHOR</th>
              <th>COMMENT</th>
              <th>IN RESPONSE TO</th>
              <th>SUBMITTED ON</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody className="custom-tbody">
            {examData.map((exam, index) => (
              <tr key={exam.id} className="custom-tbody-row">
                <td>{index + 1}</td>
                <td>{exam.author}</td>
                <td>{exam.comment}</td>
                <td>{exam.response}</td>
                <td>{exam.submitted}</td>
                <td>
                  <span className="action-icons">
                    <FiEdit className="icon" />
                    <FiTrash2 className="icon delete-icon" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
