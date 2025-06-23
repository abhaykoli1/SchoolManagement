import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import AddAssignment from "./AddAssignment";
import TableHeader from "../../Components/TableHeader";

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
  const [selectedId, setSelectedId] = useState(null);

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

  const filteredData = examData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}
      <TableHeader title="Homework" search={search} setSearch={setSearch} />

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>CLASS</th>
              <th>SUBJECT</th>
              <th>TITLE</th>
              <th>ASSIGN DATE</th>
              <th>DUE DATE</th>
              <th>STATUS</th>
              <th className="action-label">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="custom-tbody">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`custom-row ${
                    item.id === selectedId
                      ? "selected-row"
                      : index % 2 === 0
                      ? "even-row"
                      : "odd-row"
                  }`}
                  onClick={() => setSelectedId(item.id)}
                >
                  <td>{index + 1}</td>
                  <td>{item.class}</td>
                  <td>{item.subject}</td>
                  <td>{item.title}</td>
                  <td>{item.assignDate}</td>
                  <td>{item.dueDate}</td>
                  <td>{item.status}</td>
                  <td className="action-icons">
                    <span className="edit-icon">✏️</span>
                    <span className="delete-icon">🗑️</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="py-4 px-3 text-center text-gray-500">
                  No matching assignments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
