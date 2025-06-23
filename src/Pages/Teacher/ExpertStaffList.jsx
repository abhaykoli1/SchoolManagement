import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import profile from "../../assets/teacher/profile.svg";
import TableHeader from "../../Components/TableHeader";

const staffData = [
  {
    id: 1,
    name: "Adarsh Patel",
    subject: "Science",
    designation: "Math Teacher",
    image: profile,
  },
  {
    id: 2,
    name: "Vishal Dadika",
    subject: "Hindi",
    designation: "Hindi Teacher",
    image: profile,
  },
  {
    id: 3,
    name: "Vishal Dadika",
    subject: "English",
    designation: "English Teacher",
    image: "",
    success: true,
  },
];

export default function ExpertStaffList() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const filteredData = staffData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}
      <TableHeader title="Inventory" search={search} setSearch={setSearch} />

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>SUBJECT</th>
              <th>DESIGNATION</th>
              <th className="action-label">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="custom-tbody">
            {filteredData.length > 0 ? (
              filteredData.map((staff, index) => (
                <tr
                  key={staff.id}
                  className={`custom-row ${
                    staff.id === selectedId
                      ? "selected-row"
                      : index % 2 === 0
                      ? "even-row"
                      : "odd-row"
                  }`}
                  onClick={() => setSelectedId(staff.id)}
                >
                  <td>{index + 1}</td>
                  <td>
                    {staff.image ? (
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center text-white text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5.121 17.804A7.974 7.974 0 0112 15c1.66 0 3.19.51 4.438 1.377M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    )}
                  </td>
                  <td>{staff.name}</td>
                  <td>{staff.subject}</td>
                  <td>{staff.designation}</td>
                  <td className="action-icons">
                    <span className="edit-icon">✏️</span>
                    <span className="delete-icon">🗑️</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 px-3 text-center text-gray-500">
                  No matching staff found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
