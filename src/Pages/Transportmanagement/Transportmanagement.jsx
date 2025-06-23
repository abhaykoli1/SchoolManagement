import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import AddTransportmanagement from "./AddTransportmanagement";
import TableHeader from "../../Components/TableHeader";

export default function Transportmanagement() {
  return (
    <>
      <AddTransportmanagement />
      <TransportList />
    </>
  );
}

function TransportList() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const transportData = [
    {
      id: 1,
      studentName: "Saniya Khan",
      route: "Route A",
      driver: "Vivek",
      vehicle: "MH12AB1234",
      timing: "10:00 AM",
      assigned: "20 Students",
      status: "Available",
    },
    {
      id: 2,
      studentName: "Aman Verma",
      route: "Route B",
      driver: "Ravi",
      vehicle: "MH14XY5678",
      timing: "10:30 AM",
      assigned: "15 Students",
      status: "Issued",
    },
  ];

  const filteredData = transportData.filter((item) =>
    item.studentName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}
      <TableHeader
        title="Transport Management"
        search={search}
        setSearch={setSearch}
      />

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>STUDENT NAME</th>
              <th>ROUTE</th>
              <th>DRIVER</th>
              <th>VEHICLE NO</th>
              <th>TIMING</th>
              <th>ASSIGNED</th>
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
                  <td>{item.studentName}</td>
                  <td>{item.route}</td>
                  <td>{item.driver}</td>
                  <td>{item.vehicle}</td>
                  <td>{item.timing}</td>
                  <td>{item.assigned}</td>
                  <td>{item.status}</td>
                  <td className="action-icons">
                    <span className="edit-icon">✏️</span>
                    <span className="delete-icon">🗑️</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="py-4 px-3 text-center text-gray-500">
                  No matching transport entries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
