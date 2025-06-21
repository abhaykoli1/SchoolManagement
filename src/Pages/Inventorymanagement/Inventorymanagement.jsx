import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Addinventorymanagement from "./AddInventorymanagement";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import InventoryHeader from "../../Components/InventoryHeader";

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

  const examData = [
    {
      id: 1,
      item: "Item Name",
      category: "Sports",
      quantity: "2",
      condition: "Good",
      cost: "600",
      purchase: "10,june,2025",
    },
    {
      id: 2,
      item: "Item Name",
      category: "Sports",
      quantity: "2",
      condition: "Good",
      cost: "600",
      purchase: "10,june,2025",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-5">
      {/* Header + Search */}

      <InventoryHeader
        title="Inventory List"
        search={search}
        setSearch={setSearch}
      />

      {/* Responsive Table */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 overflow-x-auto">
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="custom-tbody">
            {examData.map((exam, index) => (
              <tr key={exam.id} className="custom-tbody-row">
                <td>{index + 1}</td>
                <td>{exam.item}</td>
                <td>{exam.category}</td>
                <td>{exam.quantity}</td>
                <td>{exam.condition}</td>
                <td>{exam.cost}</td>
                <td>{exam.purchase}</td>
                <td>
                  <span className="action-icons">
                    <FiEdit className="icon" />
                    <FiTrash2 className="icon delete-icon" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
