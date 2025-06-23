import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import AddHostelmanagement from "./AddHostelmanagement";
import TableHeader from "../../Components/TableHeader";

export default function Hostelmanagement() {
  return (
    <>
      <AddHostelmanagement />
      <HostelmanagementList />
    </>
  );
}

function HostelmanagementList() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const hostelData = [
    {
      id: 1,
      student: "Saniya Khan",
      class: "9th",
      hostel: "Sunrise Hostel",
      amount: "₹10,000",
      room: "A-1",
      mess: "Veg",
      allot: "10 June 2025",
      vacate: "10 Dec 2025",
      status: "Paid",
    },
    {
      id: 2,
      student: "Muskan",
      class: "10th",
      hostel: "Green Valley",
      amount: "₹10,000",
      room: "A-2",
      mess: "Non-Veg",
      allot: "10 June 2025",
      vacate: "10 Dec 2025",
      status: "Paid",
    },
  ];

  const filteredData = hostelData.filter((item) =>
    Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      <TableHeader
        title="Hostel Management"
        search={search}
        setSearch={setSearch}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>STUDENT</th>
              <th>CLASS</th>
              <th>HOSTEL</th>
              <th>AMOUNT</th>
              <th>ROOM</th>
              <th>MESS</th>
              <th>ALLOT DATE</th>
              <th>VACATE DATE</th>
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
                  <td>{item.student}</td>
                  <td>{item.class}</td>
                  <td>{item.hostel}</td>
                  <td>{item.amount}</td>
                  <td>{item.room}</td>
                  <td>{item.mess}</td>
                  <td>{item.allot}</td>
                  <td>{item.vacate}</td>
                  <td>{item.status}</td>
                  <td className="action-icons">
                    <span className="edit-icon">✏️</span>
                    <span className="delete-icon">🗑️</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="11"
                  className="py-4 px-3 text-center text-gray-500"
                >
                  No matching hostel records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
