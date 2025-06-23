import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import AddLibrary from "./AddLibrary";
import TableHeader from "../../Components/TableHeader";

export default function Library() {
  return (
    <>
      <AddLibrary />
      <LibraryList />
    </>
  );
}

function LibraryList() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const libraryData = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      quantity: "12",
      status: "Available",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self-help",
      quantity: "8",
      status: "Issued",
    },
  ];

  const filteredData = libraryData.filter((item) =>
    [item.title, item.author, item.category, item.status]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      <TableHeader
        title="Library Management"
        search={search}
        setSearch={setSearch}
      />

      <div className="overflow-x-auto">
        <table className="custom-table mt-3">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>TITLE</th>
              <th>AUTHOR</th>
              <th>CATEGORY</th>
              <th>QUANTITY</th>
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
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
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
                  No matching books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
