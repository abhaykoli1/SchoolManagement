import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddAttendance() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    gender: "",
    section: "",
    phone: "",
    date: "",
    attendance: "",
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
      name: "",
      class: "",
      gender: "",
      section: "",
      phone: "",
      date: "",
      attendance: "",
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      {/* Header with Title and Toggle */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h2 className="text-[17px] font-semibold uppercase mb-6">
          Add Attendance
        </h2>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Student Name */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              STUDENT NAME
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder="Enter Designation"
            />
          </div>

          {/* Class */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              CLASS
            </label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="">Select Class</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              GENDER
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/*Section */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              SECTION
            </label>
            <select
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              PHONE NUMBER
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Date */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              DATE
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>
          {/* Attendance Status */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              ATTENDANCE STATUS
            </label>
            <div className="flex gap-4 text-xs">
              {/* Present */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="PRESENT"
                  checked={formData.attendance === "PRESENT"}
                  onChange={handleChange}
                  className="accent-green-600"
                />
                Present
              </label>

              {/* Absent */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="ABSENT"
                  checked={formData.attendance === "ABSENT"}
                  onChange={handleChange}
                  className="accent-red-600"
                />
                Absent
              </label>

              {/* Leave */}
              <label className="flex items-center gap-2 cursor-pointer text-md">
                <input
                  type="radio"
                  name="attendance"
                  value="LEAVE"
                  checked={formData.attendance === "LEAVE"}
                  onChange={handleChange}
                  className="accent-yellow-500"
                />
                Leave
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 w-full">
          <button
            type="button"
            onClick={handleReset}
            className="bg-[#0b1d6e] cursor-pointer text-white px-6 py-2 text-sm rounded hover:bg-[#1e2e89] w-full sm:w-auto"
          >
            Reset Form
          </button>
          <button
            type="submit"
            className="bg-[#0b1d6e] cursor-pointer text-white px-6 py-2 text-sm rounded hover:bg-[#1e2e89] w-full sm:w-auto"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
