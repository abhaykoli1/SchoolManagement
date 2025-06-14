import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddHostelmanagement() {
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
      {/* Add Hostel management */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <h2 className="text-[18px] font-medium uppercase">Hostel Management</h2>
      </div>

          <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Student Name / ID */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
         Student Name / ID
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
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

          {/*     Hostel Name / Block */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
    Hostel Name / Block
            </label>
           <input
              type="text"
              name="Hostel"
              value={formData.Hostel}
              onChange={handleChange}
              placeholder="2"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
        
            />
          </div>

            {/* Room Number . */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
Room Number
            </label>
            <input
              type="text"
              name="Room"
              value={formData.Room}
              onChange={handleChange}
              placeholder="A-1"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
        
            />
          </div>

          {/* Bed Number (if shared) */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
  Bed Number (if shared)
            </label>
            <input
              type="text"
              name="shared"
              value={formData.shared}
              onChange={handleChange}
              placeholder="04"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>


                {/* Mess Facility  */}
          <div>
            <label className="uppercase block font-[500] text-[14px]  text-[#666666] mb-2">
              Mess Facility 
            </label>
            <select
              name="Facility"
              value={formData.Facility}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3">
              <option value="" >YES</option>
              <option value="10th">NO</option>
    
            </select>
          </div>
        {/* Allotment Date */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
Allotment Date
            </label>
            <input
              type="date"
              name="Allotment"
              value={formData.Allotment}
              onChange={handleChange}
              placeholder="04"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>


          
                  {/* Vacate Date */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
Vacate Date
            </label>
            <input
              type="date"
              name="Vacate"
              value={formData.Vacate}
              onChange={handleChange}
              placeholder="04"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>
 
    
      {/* Fee Status */}
          <div>
            <label className="uppercase block font-[500] text-[14px]  text-[#666666] mb-2">Fee Status
            </label>
            <select
              name="Fee"
              value={formData.Fee}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3">
              <option value="Active" >Paid</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
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
