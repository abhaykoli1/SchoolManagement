import { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import TableHeader from "../../Components/TableHeader";
import Addinventorymanagement from "./Addinventorymanagement";
export default function Inventorymanagement() {
  return (
    <>
      <Addinventorymanagement />
      <Inventorymanagementlist />
    </>
  );
}

function Inventorymanagementlist() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const examData = [
    {
      id: 1,
      item: "Football",
      category: "Sports",
      quantity: "2",
      condition: "Good",
      cost: "600",
      purchase: "10 June, 2025",
    },
    {
      id: 2,
      item: "Basketball",
      category: "Sports",
      quantity: "3",
      condition: "New",
      cost: "900",
      purchase: "12 June, 2025",
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

      <div className="grid grid-cols-1 overflow-x-auto">
        <table className="custom-table">
          <thead className="custom-thead">
            <tr className="custom-thead-row">
              <th>S NO.</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Condition</th>
              <th>Total Cost</th>
              <th>Purchase Date</th>
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
                <td>{exam.item}</td>
                <td>{exam.category}</td>
                <td>{exam.quantity}</td>
                <td>{exam.condition}</td>
                <td>{exam.cost}</td>
                <td>{exam.purchase}</td>
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
