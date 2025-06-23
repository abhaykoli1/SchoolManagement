import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function Addinventorymanagement() {
  const [formData, setFormData] = useState({
    teacherName: "",
    section: "",
    subject: "",
    title: "",
    assigndate: "",
    duedate: "",
    file: null,
    status: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const handleReset = () => {
    setFormData({
      teacherName: "",
      section: "",
      subject: "",
      title: "",
      assigndate: "",
      duedate: "",
      file: null,
      status: "",
      description: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* Add Hostel management */}
      <h2 className="text-[17px] font-semibold uppercase mb-6">
        Inventory Management
      </h2>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Item Name */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">Item Name</label>
            <input
              type="text"
              name="studentName"
              placeholder="Enter Student Name"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Item Category. */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Item Category
            </label>
            <input
              type="text"
              placeholder="Enter Item Category"
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/*  Quantity */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="Quantity"
              value={formData.Quantity}
              onChange={handleChange}
              placeholder="0"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Supplier Name . */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Supplier Name
            </label>
            <input
              type="text"
              name="Supplier"
              placeholder="Enter Supplier Name"
              value={formData.Supplier}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Price per Unit */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Price per Unit
            </label>
            <input
              type="text"
              name="Unit"
              value={formData.Unit}
              onChange={handleChange}
              placeholder="₹ 300"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Total Cost */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Total Cost
            </label>
            <input
              type="text"
              name="Allotment"
              value={formData.Allotment}
              onChange={handleChange}
              placeholder="auto calculate: price × quantity"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Condition */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Condition
            </label>
            <input
              type="text"
              name="Condition"
              value={formData.Condition}
              onChange={handleChange}
              placeholder="Good"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 w-full">
          <button
            type="button"
            onClick={handleReset}
            className="!border !border-[#0b1d6e] cursor-pointer !text-[#0b1d6e] px-6 py-2 text-sm rounded w-full sm:w-auto"
          >
            Reset Form
          </button>
          <button
            type="submit"
            className="bg-[#0b1d6e] cursor-pointer text-white px-6 py-2 text-sm rounded hover:bg-[#1e2e89] w-full sm:w-auto"
            onClick={handleSubmit}
          >
            Add Inventory
          </button>
        </div>
      </form>
    </div>
  );
}
