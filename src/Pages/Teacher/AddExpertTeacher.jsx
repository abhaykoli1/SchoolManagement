import React, { useState } from "react";
import ExpertStaffList from "./ExpertStaffList";

export default function AddExpertTeacher() {
  const [formData, setFormData] = useState({
    teacher: "",
    designation: "",
    subject: "",
    phone: "",
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
    console.log("Submitted data:", formData);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-lg font-semibold mb-6">Add Expert Teacher</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Teacher Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                TEACHER
              </label>
              <select
                name="teacher"
                value={formData.teacher}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              >
                <option value="">Select Teacher</option>
                <option value="john">John Doe</option>
                <option value="jane">Jane Smith</option>
              </select>
            </div>

            {/* Designation Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                DESIGNATION
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
                placeholder="Enter Designation"
              />
            </div>

            {/* Subject Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                ADD SUBJECT
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3e"
              >
                <option value="">Select Subject</option>
                <option value="math">Mathematics</option>
                <option value="science">Science</option>
              </select>
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                PHONE NUMBER
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
                placeholder="Enter Phone Number"
              />
            </div>
            {/* File Upload */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                FILE
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
                  className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-[#0b1d6e] text-white text-sm font-semibold px-4 py-1 rounded-md hover:bg-[#1e2e89] transition"
                >
                  PHOTOS UPLOAD
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-[#0b1d6e] text-white text-sm font-semibold px-8 py-1.5 rounded-md hover:bg-[#1e2e89] transition"
              onClick={handleSubmit}
            >
              Add Expert Teacher
            </button>
          </div>
        </form>
      </div>

      <ExpertStaffList />
    </>
  );
}
