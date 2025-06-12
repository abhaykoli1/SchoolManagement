import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddSingleResult() {
  const [formData, setFormData] = useState({
    studentName: "",
    rollno: "",
    classSection: "",
    subject: "",
    publishDate: "",
    status: "",
    totalMarks: "",
    obtainMarks: "",
    grade: "",
    description: "",
    file: null,
    resultType: "single",
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
      studentName: "",
      rollno: "",
      classSection: "",
      subject: "",
      publishDate: "",
      status: "",
      totalMarks: "",
      obtainMarks: "",
      grade: "",
      description: "",
      file: null,
      resultType: "single",
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      {/* Header with Title and Toggle */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h2 className="text-sm font-medium">Front Result</h2>
        {/* Toggle Section */}
        <div className="flex flex-col md:flex-row md:gap-4 gap-2 text-xs items-start md:items-center">
          {/* Single Student Result */}
          <Link
            to="/single-result"
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
            <span>SINGLE STUDENT RESULT</span>
          </Link>

          {/* Multiple Students Result */}
          <Link
            to="/multiple-result"
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
            <span>MULTIPLE STUDENTS RESULT</span>
          </Link>
        </div>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Student Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              STUDENT NAME
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder="Annual Exam"
            />
          </div>

          {/* Roll No. */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              ROLL NUMBER / ID
            </label>
            <input
              type="text"
              name="rollno"
              value={formData.rollno}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder="Annual Exam"
            />
          </div>

          {/* Class & Section */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              CLASS & SECTION
            </label>
            <select
              name="classSection"
              value={formData.classSection}
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
              SUBJECT
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="">Select Subject</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="Biology">Biology</option>
            </select>
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
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Obtained Marks */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              OBTAIN MARKS
            </label>
            <input
              type="number"
              name="obtainMarks"
              value={formData.obtainMarks}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>
          {/* Passing Marks */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              GRADE
            </label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="">Select Grade</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>

          {/* Result Status */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              RESULT STATUS
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="">Select Status</option>
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
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

          {/* Upload Report Card (PDF) */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              UPLOAD REPORT CARD (PDF)
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
                FILE UPLOAD
              </button>
            </div>
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
            className="w-full bg-white border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            placeholder="Description"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 w-full">
          <button
            type="button"
            onClick={handleReset}
            className="border border-[#0b1d6e] text-[#0b1d6e] px-6 py-2 text-sm rounded-3xl w-full sm:w-auto"
          >
            Reset Form
          </button>
          <button
            type="submit"
            className="bg-[#0b1d6e] text-white px-6 py-2 text-sm rounded-3xl hover:bg-[#1e2e89] w-full sm:w-auto"
            onClick={handleSubmit}
          >
            Add Front Result
          </button>
        </div>
      </form>
    </div>
  );
}
