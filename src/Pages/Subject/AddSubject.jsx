import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddSubject() {
  const [formData, setFormData] = useState({
    class: "",
    subject: "",
    section: "",
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
      class: "",
      subject: "",
      section: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* Header with Title and Toggle */}
      <h2 className="text-[17px] font-semibold uppercase mb-6">Add Subject</h2>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Class */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              CLASS
            </label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder="Enter Designation"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              SUBJECT
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder="Enter Designation"
            />
          </div>

          {/* Section */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
              SECTION
            </label>
            <input
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder="Enter Designation"
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
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
}
