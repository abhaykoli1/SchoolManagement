import React, { useState } from "react";

export default function AddExam() {
  const [formData, setFormData] = useState({
    examName: "",
    classSection: "",
    subject: "",
    examDate: "",
    startEndTime: "",
    totalMarks: "",
    passingMarks: "",
    description: "",
    resultType: "single",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  const handleReset = () => {
    setFormData({
      examName: "",
      classSection: "",
      subject: "",
      examDate: "",
      startEndTime: "",
      totalMarks: "",
      passingMarks: "",
      description: "",
      resultType: "single",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      {/* Header with Title and Toggle */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <h2 className="text-[17px] font-semibold uppercase ">
          Exam Management
        </h2>

        {/* Toggle Section */}
        <div className="flex flex-col md:flex-row md:gap-4 gap-2 text-xs items-start md:items-center">
          {/* Single Student Result */}
          <div
            onClick={() =>
              setFormData((prev) => ({ ...prev, resultType: "single" }))
            }
            className="flex items-center gap-2 cursor-pointer"
          >
            <span
              className={`w-4 h-4 rounded-full border border-black ${
                formData.resultType === "single" ? "bg-green-600" : ""
              }`}
            ></span>
            SINGLE STUDENT RESULT
          </div>

          {/* Multiple Students Result */}
          <div
            onClick={() =>
              setFormData((prev) => ({ ...prev, resultType: "multiple" }))
            }
            className="flex items-center gap-2 cursor-pointer"
          >
            <span
              className={`w-4 h-4 rounded-full border border-black ${
                formData.resultType === "multiple" ? "bg-green-600" : ""
              }`}
            ></span>
            MULTIPLE STUDENTS RESULT
          </div>
        </div>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Exam Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              EXAM NAME
            </label>
            <input
              type="text"
              name="examName"
              value={formData.examName}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder="Enter Exam Name"
            />
          </div>

          {/* Class & Section */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              CLASS & SECTION
            </label>
            <input
              type="text"
              name="classSection"
              value={formData.classSection}
              onChange={handleChange}
              placeholder="Enter Class & Section"
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              SUBJECT
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter Subject"
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Exam Date */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              EXAM DATE
            </label>
            <input
              type="date"
              name="examDate"
              value={formData.examDate}
              onChange={handleChange}
              placeholder="Select Exam Date"
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Start–End Time */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              START TIME – END TIME
            </label>
            <input
              type="text"
              name="startEndTime"
              value={formData.startEndTime}
              onChange={handleChange}
              placeholder="e.g., 10:00 AM – 12:00 PM"
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Total Marks */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              TOTAL MARKS
            </label>
            <input
              type="number"
              name="totalMarks"
              value={formData.totalMarks}
              onChange={handleChange}
              placeholder="Enter Total Marks"
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Passing Marks */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              PASSING MARKS
            </label>
            <select
              name="passingMarks"
              value={formData.passingMarks}
              onChange={handleChange}
              placeholder="Select Passing Marks"
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="">Select Grade</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">
            DESCRIPTION
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Enter Exam Description"
            className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
          ></textarea>
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
