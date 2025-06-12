import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
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
      title: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      {/* Header with Title and Toggle */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h2 className="text-md font-medium">Add Event</h2>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              EVENT TITLE
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder="Enter Designation"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              EVENT DATE
            </label>
            <input
              type="date"
              name="Date"
              value={formData.Date}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              EVENT TIME
            </label>
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder="Enter Designation"
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 w-full">
          <button
            type="button"
            onClick={handleReset}
            className="border border-[#0b1d6e] cursor-pointer text-[#0b1d6e] px-6 py-2 text-sm rounded-3xl w-full sm:w-auto"
          >
            Reset Form
          </button>
          <button
            type="submit"
            className="bg-[#0b1d6e] cursor-pointer text-white px-6 py-2 text-sm rounded-3xl hover:bg-[#1e2e89] w-full sm:w-auto"
            onClick={handleSubmit}
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
}
