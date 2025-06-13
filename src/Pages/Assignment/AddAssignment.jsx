import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddAssignment() {
  const [formData, setFormData] = useState({
    teacherName: "",
    section: "",
     subject: "",
    title: "",
    assigndate: "",
    duedate: "",
 file: null,
    status:"",
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
    status:"",
   description: "",
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      {/* Header with Title and Toggle */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h2 className="text-[18px] font-medium uppercase">Home work assiment</h2>
      </div>

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
              value={formData.teacherName}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
              placeholder=""
            />
          </div>

          {/* Class Section. */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
         Class & Section
            </label>
            <input
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
        
            />
          </div>

          {/* Subject & Section */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
         Subject
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            >
              <option value="9th"></option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>

            {/* Title No. */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
    Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
        
            />
          </div>

          {/* Assign Date */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
         Assign Date
            </label>
            <input
              type="date"
              name="assigndate"
              value={formData.assigndate}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>

          {/* Duedate */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
            Due Date
            </label>
            <input
              type="date"
              name="duedate"
              value={formData.duedate}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>
    
          {/* Upload Report Card (PDF) */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
            Upload File
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


     {/* status & Section */}
          <div>
            <label className="uppercase block font-[500] text-[14px]  text-[#666666] mb-2">Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3">
              <option value="Active" >Active</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="uppercase block font-[500] text-[14px] font-semibold text-[#666666] mb-2">
      Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={7}
            className="w-full font-[500] text-[14px] bg-white border-2 text-[#00000066] border-[#E5E5E5] text-[500] text-[14px]  p-4 rounded-md focus:outline-none ps-3"
            placeholder="Textarea (Detailed Instructions)"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 w-full">
          <button
            type="button"
            onClick={handleReset}
            className="border border-[#0b1d6e] text-[#0F2169] font[500] tracking-[0.1px] text-[15px] px-6 py-2 rounded-3xl w-full sm:w-auto"
          >
            Reset Form
          </button>
          <button
            type="submit"
            className="bg-[#0b1d6e] text-[#D9D9D9] font[500] tracking-[0.1px] text-[15px] px-6 py-2 rounded-3xl hover:bg-[#1e2e89] w-full sm:w-auto"
            onClick={handleSubmit}
          >
         Add Assignment 
          </button>
        </div>
      </form>
    </div>
  );
}
