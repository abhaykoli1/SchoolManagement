import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function Addonlineadmission() {
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
        <h2 className="text-[18px] font-medium uppercase">Online Admission / Enrollment</h2>
      </div>

          <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Parent Name */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
  Parent Name
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

          {/* Student Name. */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
Student Name
            </label>
            <input
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
        
            />
          </div>

          {/*  Username / Email */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
Username / Email
            </label>
           <input
              type="text"
              name="Quantity"
              value={formData.Quantity}
              onChange={handleChange}
              placeholder="Username / Email"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
        
            />
          </div>

            {/* Password . */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
Password
            </label>
            <input
              type="text"
              name="Supplier"
              value={formData.Supplier}
              onChange={handleChange}
              placeholder="............"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
        
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="uppercase block font-[500] text-[14px] text-[#666666] mb-2">
Contact Number
            </label>
            <input
              type="text"
              name="Unit"
              value={formData.Unit}
              onChange={handleChange}
              placeholder="+91"
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3"
            />
          </div>


                {/* Status  */}
          <div>
            <label className="uppercase block font-[500] text-[14px]  text-[#666666] mb-2">
              Status 
            </label>
            <select
              name="Status"
              value={formData.Status}
              onChange={handleChange}
              className="w-full bg-white font-[500] text-[14px] border border-gray-300 p-1 rounded-md focus:outline-none ps-3">
              <option value="" >YES</option>
              <option value="10th">NO</option>
    
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
         Add  
          </button>
        </div>
      </form>
    </div>
  );
}
