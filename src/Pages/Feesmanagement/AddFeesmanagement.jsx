import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddFeesmanagement() {
  const [formData, setFormData] = useState({
    teacherName: "",
    section: "",
    classSection: "",
    subject: "",
    publishDate: "",
    status: "",
    totalMarks: "",
    obtainMarks: "",
    grade: "",
    description: "",
    file: null,
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
      classSection: "",
      subject: "",
      publishDate: "",
      status: "",
      totalMarks: "",
      obtainMarks: "",
      grade: "",
      description: "",
      file: null,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* Header with Title and Toggle */}
      <h2 className="text-[17px] font-semibold uppercase mb-6">
        Fees Management
      </h2>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Student Name */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Student Name
            </label>
            <input
              type="text"
              name="teacherName"
              value={formData.teacherName}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder="Enter Student Name"
            />
          </div>

          {/* Class & Section */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Class & Section
            </label>
            <input
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              placeholder="Class 10 A"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Fee Type */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Fee Type
            </label>
            <input
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              placeholder="Enter Fee Type"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Amount
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="10000 RS"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Payment Mode */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Payment Mode
            </label>
            <input
              type="text"
              name="totalMarks"
              value={formData.totalMarks}
              onChange={handleChange}
              placeholder="Cash / UPI / Bank"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Payment Date */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Payment Date
            </label>
            <input
              type="text"
              name="obtainMarks"
              placeholder="DD/MM/YYYY"
              value={formData.obtainMarks}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Receipt Upload */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Receipt Upload
            </label>
            <input
              type="text"
              name="totalMarks"
              placeholder="Upload Receipt"
              value={formData.totalMarks}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Status */}
          <div>
            <label className="uppercase block font-[500] text-[14px]  text-[#666666] mb-2">
              Status
            </label>
            <select
              name="classSection"
              placeholder="Select Status"
              value={formData.classSection}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="">PSlD</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>

          {/* Class & Section */}
          <div>
            <label className="uppercase block font-[500] text-[14px]  text-[#666666] mb-2">
              Status
            </label>
            <select
              name="classSection"
              value={formData.classSection}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="Active">Active</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
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
            Add Expert Teacher
          </button>
        </div>
      </form>
    </div>
  );
}
