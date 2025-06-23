import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddClassSection() {
  const [formData, setFormData] = useState({
    class: "",
    section: "",
    publishDate: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const handleReset = () => {
    setFormData({
      class: "",
      section: "",
      publishDate: "",
      file: null,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      {/* Header with Title and Toggle */}
      <h2 className="text-[17px] font-semibold uppercase mb-6">Classes</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Class & Section */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              CLASS
            </label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="">Select Class</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              SECTION
            </label>
            <select
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>

          {/* Publish Date */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              PUBLISH DATE
            </label>
            <input
              type="date"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Result File */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              RESULT FILE
            </label>
            <div className="relative w-full">
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 p-1 rounded-md pr-32 focus:outline-none ps-3"
              />
              <button
                type="button"
                className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-[#0b1d6e] text-white text-xs  px-4 !py-1.5 rounded hover:bg-[#1e2e89] transition"
              >
                UPLOAD
              </button>
            </div>
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
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
}
