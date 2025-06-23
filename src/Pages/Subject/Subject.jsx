import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import TableHeader from "../../Components/TableHeader";
import AddSubject from "./AddSubject";

export default function ClassSection() {
  return (
    <>
      <AddSubject />
      <SubjectList />
    </>
  );
}

function SubjectList() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const examData = [
    {
      id: 1,
      title: "Robert Jackson",
      category: "Teacher",
      overview: "Title name whichever should be",
    },
    {
      id: 2,
      title: "Michal Robert",
      category: "Student",
      overview: "Title name whichever should be",
    },
  ];

  const filteredData = examData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}
      <TableHeader title="Subject" search={search} setSearch={setSearch} />

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>TITLE</th>
              <th>CATEGORY</th>
              <th>OVERVIEW</th>
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
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.overview}</td>
                  <td className="action-icons">
                    <span className="edit-icon">✏️</span>
                    <span className="delete-icon">🗑️</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 px-3 text-center text-gray-500">
                  No matching subjects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
