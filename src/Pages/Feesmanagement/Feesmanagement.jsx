import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AddFeesmanagement from "./AddFeesmanagement";
import TableHeader from "../../Components/TableHeader";

export default function Feesmanagement() {
  return (
    <>
      <AddFeesmanagement />
      <Feesmanagementlist />
    </>
  );
}

function Feesmanagementlist() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const feeData = [
    {
      id: 1,
      student: "Saniya Khan",
      class: "9th",
      feeType: "Tuition",
      amount: "10000Rs",
      paymentDate: "10 June 2025",
      status: "Paid",
    },
    {
      id: 2,
      student: "Saniya Khan",
      class: "9th",
      feeType: "Tuition",
      amount: "10000Rs",
      paymentDate: "10 June 2025",
      status: "Paid",
    },
  ];

  const filteredData = feeData.filter((item) =>
    item.student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      <TableHeader
        title="Fees Management"
        search={search}
        setSearch={setSearch}
      />

      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>STUDENT NAME</th>
              <th>CLASS</th>
              <th>FEE TYPE</th>
              <th>AMOUNT</th>
              <th>PAYMENT DATE</th>
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
                  <td>{item.feeType}</td>
                  <td>{item.amount}</td>
                  <td>{item.paymentDate}</td>
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
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
