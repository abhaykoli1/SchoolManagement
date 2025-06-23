import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Addonlineadmission from "./Addonlineadmission";
import TableHeader from "../../Components/TableHeader";

export default function Onlineadmission() {
  return (
    <>
      <Addonlineadmission />
      <OnlineadmissionList />
    </>
  );
}

function OnlineadmissionList() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const examData = [
    {
      id: 1,
      parent: "Mr. Ahmed",
      student: "Ali Ahmed",
      username: "ahmed@gmail.com",
      contact: "9876543210",
      status: "Active",
    },
    {
      id: 2,
      parent: "Mrs. Sharma",
      student: "Nina Sharma",
      username: "sharma@gmail.com",
      contact: "8765432109",
      status: "Inactive",
    },
  ];

  const filteredData = examData.filter(
    (item) =>
      item.parent.toLowerCase().includes(search.toLowerCase()) ||
      item.student.toLowerCase().includes(search.toLowerCase()) ||
      item.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}
      <TableHeader title="Parent List" search={search} setSearch={setSearch} />

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>PARENT NAME</th>
              <th>STUDENT NAME</th>
              <th>USERNAME</th>
              <th>CONTACT</th>
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
                  <td>{item.parent}</td>
                  <td>{item.student}</td>
                  <td>{item.username}</td>
                  <td>{item.contact}</td>
                  <td>{item.status}</td>
                  <td className="action-icons">
                    <span className="edit-icon">✏️</span>
                    <span className="delete-icon">🗑️</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 px-3 text-center text-gray-500">
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
