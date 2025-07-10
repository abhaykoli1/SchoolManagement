import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import AddAttendance from "./AddAttendance";
import TableHeader from "../../Components/TableHeader";

export default function AttendanceManagement() {
  return (
    <>
      <AddAttendance />
      <AttendanceList />
    </>
  );
}

function AttendanceList() {
  const [search, setSearch] = useState("");
   const [selectedId, setSelectedId] = useState(null);

  const examData = [
    {
      id: 1,
      name: "Adarsh Patel",
      roll: "101",
      status: "Active",
      date: "Jan 30, 2024 ",
    },
    {
      id: 2,
      name: "Adarsh Patel",
      roll: "101",
      status: "Active",
      date: "Jan 30, 2024 ",
    },
    {
      id: 3,
      name: "Adarsh Patel",
      roll: "101",
      status: "Active",
      date: "Jan 30, 2024 ",
    },
  ];

  // Default selection for large screens
  useEffect(() => {
    if (window.innerWidth >= 1024 && examData.length > 0) {
      setSelectedId(examData[0].id);
    }
  }, [examData]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
    
      <TableHeader title="Inventory" search={search} setSearch={setSearch} />

      {/* Responsive Table */}
      <div className="grid grid-cols-1 overflow-x-auto">
        <table className="custom-table">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Status</th>
              <th>Date</th>
              <th className="action-label">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="custom-tbody">
            {examData.map((exam, index) => (
              <tr
                key={exam.id}
                className={`custom-row ${
                  exam.id === selectedId
                    ? "selected-row"
                    : index % 2 === 0
                    ? "even-row"
                    : "odd-row"
                }`}
                onClick={() => {
                  setSelectedId(exam.id);
                  if (window.innerWidth < 1024) {
                    document.body.style.overflow = "hidden";
                  }
                }}
              >
                <td>{index + 1}</td>
                <td>{exam.name}</td>
                <td>{exam.roll}</td>
                <td>{exam.status}</td>
                <td>{exam.date}</td>
                <td className="action-icons">
                  <span className="edit-icon">✏️</span>
                  <span className="delete-icon">🗑️</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
