import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddTransportmanagement() {
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
        Transport Management
      </h2>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Teacher Name */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Teacher Name
            </label>
            <input
              type="text"
              name="teacherName"
              placeholder="Enter Teacher Name"
              value={formData.teacherName}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Route Name */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Route Name
            </label>
            <input
              type="text"
              name="section"
              placeholder="Enter Route Name"
              value={formData.section}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Driver Name */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Driver Name
            </label>
            <input
              type="text"
              name="section"
              placeholder="Enter Driver Name"
              value={formData.section}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/*     Driver Mobile Number No. */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Driver Mobile Number
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter Driver Mobile Number"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Pickup Point */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Pickup Point
            </label>
            <input
              type="text"
              name="totalMarks"
              placeholder="Enter Pickup Point"
              value={formData.totalMarks}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Drop Point */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Drop Point
            </label>
            <input
              type="text"
              name="obtainMarks"
              placeholder="Enter Drop Point"
              value={formData.obtainMarks}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>
          {/* Pickup Time */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Pickup Time
            </label>
            <input
              type="text"
              name="totalMarks"
              placeholder="Enter Pickup Time"
              value={formData.totalMarks}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Drop Point */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Drop Time
            </label>
            <input
              type="text"
              name="obtainMarks"
              placeholder="Enter Drop Time"
              value={formData.obtainMarks}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Transport Fee */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              Transport Fee
            </label>
            <input
              type="text"
              name="obtainMarks"
              placeholder="Enter Transport Fee"
              value={formData.obtainMarks}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Assign Students */}
          <div>
            <label className="uppercase block font-[500] text-[14px]  text-[#666666] mb-2">
              Assign Students
            </label>
            <select
              name="classSection"
              placeholder="Select Class Section"
              value={formData.classSection}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value=""></option>
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
              placeholder="Select Status"
              value={formData.classSection}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
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
            Add Transport
          </button>
        </div>
      </form>
    </div>
  );
}
